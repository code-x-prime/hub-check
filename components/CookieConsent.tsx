'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_CONSENT_KEY = 'hubcheck_cookie_consent'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY) as 'accepted' | 'rejected' | null
    if (stored) {
      setConsent(stored)
    } else {
      setVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected')
    setConsent('rejected')
    setVisible(false)
  }

  if (!visible || consent) return null

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 md:p-6" role="dialog" aria-label="Cookie consent" aria-modal="false">
      <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-2xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          <div className="flex-1 space-y-3">
            <h3 className="text-lg font-bold text-gray-900">We Value Your Privacy</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic, and improve our services.
              By clicking &ldquo;Accept All&rdquo;, you consent to the use of cookies. You can manage your
              preferences through our{' '}
              <Link href="/cookie-policy" className="text-[#15803d] hover:underline font-semibold">
                Cookie Policy
              </Link>.
            </p>
            <p className="text-xs text-gray-400">
              For more details, read our{' '}
              <Link href="/privacy-policy" className="text-[#15803d] hover:underline font-semibold">
                Privacy Policy
              </Link>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:flex-col lg:flex-row">
            <button
              onClick={handleReject}
              className="px-6 py-2.5 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
            >
              Reject All
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2.5 bg-[#15803d] text-white rounded-lg text-sm font-semibold hover:bg-[#147534] transition-colors cursor-pointer"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
