'use client'

import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import {
  MapPin, Briefcase, Clock, Search, X, Upload, Send,
  CheckCircle2, AlertCircle, Loader2, ChevronLeft, ChevronRight,
  ArrowRight, Sparkles, User, Mail, Phone, FileText
} from 'lucide-react'

interface Job {
  id: string
  title: string
  department: string
  location: string
  type: string
  experience: string
  description: string
  requirements: string
  isActive: boolean
  createdAt: string
}

const JOBS_PER_PAGE = 6
const API_BASE_URL = process.env.NEXT_PUBLIC_BRIGHTO_API_URL || 'http://localhost:3001'

function useDebounce(value: string, delay: number) {
  const [debounced, setDebounced] = useState(value)
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])
  return debounced
}

export default function CareerPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search, 300)
  const [filter, setFilter] = useState('All')
  const [page, setPage] = useState(1)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showApply, setShowApply] = useState(false)
  const [applying, setApplying] = useState(false)
  const [applied, setApplied] = useState(false)
  const [applyError, setApplyError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [resume, setResume] = useState<File | null>(null)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const fetchJobs = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API_BASE_URL}/api/jobs`)
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`)
      const data = await res.json()
      if (data.success) {
        setJobs(data.jobs.filter((j: Job) => j.isActive))
      } else {
        throw new Error(data.error || 'Failed to load jobs')
      }
    } catch (err: any) {
      setError(err.message || 'Failed to load jobs. Please try again.')
      setJobs([])
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  const departments = useMemo(() => {
    return ['All', ...new Set(jobs.map((j) => j.department))]
  }, [jobs])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const q = debouncedSearch.toLowerCase()
      const matchesSearch =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.department.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.experience.toLowerCase().includes(q)
      const matchesFilter = filter === 'All' || job.department === filter
      return matchesSearch && matchesFilter
    })
  }, [jobs, debouncedSearch, filter])

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE)
  const paginatedJobs = filteredJobs.slice((page - 1) * JOBS_PER_PAGE, page * JOBS_PER_PAGE)

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch, filter])

  const openApply = (job: Job) => {
    setSelectedJob(job)
    setShowApply(true)
    setApplied(false)
    setApplyError('')
    setForm({ name: '', email: '', phone: '', message: '' })
    setResume(null)
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0]
      validateAndSetFile(file)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      validateAndSetFile(e.target.files[0])
    }
  }

  const validateAndSetFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setApplyError('File size must be less than 5MB')
      return
    }
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
    if (!allowedTypes.includes(file.type)) {
      setApplyError('Only PDF or DOCX files are allowed')
      return
    }
    setApplyError('')
    setResume(file)
  }

  const handleApply = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!resume || !selectedJob) return
    setApplying(true)
    setApplyError('')

    try {
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('message', form.message)
      formData.append('jobId', selectedJob.id)
      formData.append('resume', resume)

      const res = await fetch(`${API_BASE_URL}/api/jobs/apply`, {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (res.ok && data.success) {
        setApplied(true)
      } else {
        setApplyError(data.error || 'Failed to submit application')
      }
    } catch {
      setApplyError('Network error. Please check your connection and try again.')
    } finally {
      setApplying(false)
    }
  }

  const jobColors: Record<string, { color: string; bg: string; border: string }> = {
    'Engineering': { color: '#15803d', bg: '#f0fdf4', border: '#bcf0da' },
    'Operations': { color: '#0369a1', bg: '#f0f9ff', border: '#bae6fd' },
    'Sales': { color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
    'Marketing': { color: '#7c3aed', bg: '#faf5ff', border: '#ddd6fe' },
    'Finance': { color: '#be123c', bg: '#fff1f2', border: '#fecdd3' },
    'HR': { color: '#0f766e', bg: '#f0fdfa', border: '#99f6e4' },
    'Technology': { color: '#0891b2', bg: '#ecfeff', border: '#a5f3fc' },
    'Default': { color: '#374151', bg: '#f3f4f6', border: '#e5e7eb' },
  }

  const getDeptColor = (dept: string) => {
    return jobColors[dept] || jobColors['Default']
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 sm:pt-36 sm:pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-green-950 overflow-hidden text-white">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-green-500/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-500/15 border border-green-500/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-green-400" />
            <span className="text-xs font-bold text-green-300 uppercase tracking-wider">Join Our Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            Build Your Career with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
              Hubcheck
            </span>
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl leading-relaxed mb-8">
            Empower banks, NBFCs, and MNCs with India&apos;s most trusted warehouse auditing & collateral management services. Join our dynamic network of professionals nationwide.
          </p>
        </div>
      </section>

      {/* Main Jobs Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Filters */}
          <div className="w-full lg:w-64 flex-shrink-0 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Search & Filters</h3>
            
            <div className="relative mb-6">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search jobs..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-white transition-all text-sm"
              />
              <Search className="absolute left-3 top-2.5 w-4.5 h-4.5 text-slate-400" />
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Departments</h4>
              <div className="space-y-1">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setFilter(dept)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      filter === dept
                        ? 'bg-green-50 text-green-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Job List */}
          <div className="flex-grow w-full">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm">
                <Loader2 className="w-8 h-8 text-green-600 animate-spin mb-4" />
                <p className="text-slate-500 font-medium">Loading opportunities...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center py-16 px-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
                <AlertCircle className="w-12 h-12 text-rose-500 mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">Failed to Load Jobs</h3>
                <p className="text-slate-500 max-w-md mb-6">{error}</p>
                <button
                  onClick={fetchJobs}
                  className="px-5 py-2 bg-green-700 hover:bg-green-800 text-white rounded-xl font-bold transition-all text-sm cursor-pointer"
                >
                  Retry Fetching
                </button>
              </div>
            ) : filteredJobs.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 px-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center">
                <Briefcase className="w-12 h-12 text-slate-300 mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-2">No Openings Found</h3>
                <p className="text-slate-500 max-w-md mb-6">
                  We don&apos;t have any open positions matching your filters right now. You can send us your resume directly.
                </p>
                <a
                  href="mailto:info@hubcheck.com?subject=Job%20Application%20-%20General"
                  className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold transition-all text-sm inline-flex items-center gap-2"
                >
                  Submit Resume Directly <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paginatedJobs.map((job) => {
                    const colors = getDeptColor(job.department)
                    return (
                      <div
                        key={job.id}
                        className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-green-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-3">
                            <span
                              className="text-xs font-bold px-2.5 py-1 rounded-full border"
                              style={{
                                color: colors.color,
                                backgroundColor: colors.bg,
                                borderColor: colors.border
                              }}
                            >
                              {job.department}
                            </span>
                            <span className="text-xs text-slate-400 flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {job.type}
                            </span>
                          </div>
                          
                          <h3 className="text-lg font-bold text-slate-800 mb-2 hover:text-green-700 transition-colors">
                            {job.title}
                          </h3>
                          
                          <div className="flex flex-wrap gap-y-1 gap-x-4 mb-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                              {job.experience}
                            </span>
                          </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                          <button
                            onClick={() => openApply(job)}
                            className="w-full py-2 bg-slate-900 hover:bg-green-700 text-white rounded-xl text-xs font-bold tracking-wide transition-all cursor-pointer text-center"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-between mt-8 bg-white px-4 py-3 rounded-xl border border-slate-200">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent transition-all cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <span className="text-sm font-semibold text-slate-600">
                      Page {page} of {totalPages}
                    </span>
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="p-2 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:hover:bg-transparent transition-all cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Slide-over Application Modal */}
      {showApply && selectedJob && (
        <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setShowApply(false)}
          />

          {/* Panel */}
          <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col justify-between z-10 animate-slide-in-right">
            {/* Header */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
              <div>
                <h2 className="text-lg font-bold text-slate-800">Apply for Position</h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {selectedJob.title} &bull; {selectedJob.department}
                </p>
              </div>
              <button
                onClick={() => setShowApply(false)}
                className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Form Content */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              {applied ? (
                <div className="flex flex-col items-center justify-center text-center py-12 px-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-4 border border-green-100">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Application Submitted!</h3>
                  <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-6">
                    Thank you for applying. We have received your application for the {selectedJob.title} position and will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setShowApply(false)}
                    className="px-6 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold text-sm transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-5">
                  {applyError && (
                    <div className="p-4 bg-rose-50 border border-rose-100 text-rose-700 text-xs font-semibold rounded-xl flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                      <div>{applyError}</div>
                    </div>
                  )}

                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-green-600 focus:bg-white rounded-xl focus:outline-none transition-all text-sm text-slate-700"
                      />
                      <User className="absolute left-3.5 top-2.5 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-green-600 focus:bg-white rounded-xl focus:outline-none transition-all text-sm text-slate-700"
                      />
                      <Mail className="absolute left-3.5 top-2.5 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 focus:border-green-600 focus:bg-white rounded-xl focus:outline-none transition-all text-sm text-slate-700"
                      />
                      <Phone className="absolute left-3.5 top-2.5 w-4.5 h-4.5 text-slate-400" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Why are you a good fit? (Optional)
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us briefly about your experience..."
                      rows={3}
                      className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-green-600 focus:bg-white rounded-xl focus:outline-none transition-all text-sm text-slate-700 resize-none"
                    />
                  </div>

                  {/* Resume Upload */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block">
                      Resume / CV * (PDF, DOC, DOCX up to 5MB)
                    </label>

                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                        dragActive
                          ? 'border-green-600 bg-green-50/50'
                          : resume
                          ? 'border-green-500 bg-slate-50'
                          : 'border-slate-300 hover:border-green-600 hover:bg-slate-50'
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />

                      {resume ? (
                        <>
                          <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center border border-green-100 mb-1">
                            <FileText className="w-5 h-5 text-green-600" />
                          </div>
                          <p className="text-sm font-semibold text-slate-700 truncate max-w-xs">
                            {resume.name}
                          </p>
                          <p className="text-xs text-slate-400 font-medium">
                            {(resume.size / (1024 * 1024)).toFixed(2)} MB &bull; Click or drag to replace
                          </p>
                        </>
                      ) : (
                        <>
                          <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mb-1">
                            <Upload className="w-5 h-5 text-slate-500 animate-pulse" />
                          </div>
                          <p className="text-sm font-semibold text-slate-700">
                            Drag & drop your resume here
                          </p>
                          <p className="text-xs text-slate-400 font-medium">
                            or click to browse from files
                          </p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4 border-t border-slate-200 mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowApply(false)}
                      className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-sm font-semibold transition-all cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={applying || !resume}
                      className="px-6 py-2.5 bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white rounded-xl text-sm font-bold tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                    >
                      {applying ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
