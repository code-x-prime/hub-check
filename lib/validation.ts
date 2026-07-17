import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  organization: z
    .string()
    .max(200, 'Organization must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters'),
  phone: z
    .string()
    .regex(/^[\d\s+\-()]*$/, 'Phone number contains invalid characters')
    .max(20, 'Phone must be less than 20 characters')
    .optional()
    .or(z.literal('')),
  service: z.string().min(1, 'Please select a service'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the Privacy Policy and consent to data processing' }),
  }),
  website: z.string().max(0, 'Bot detected').optional().or(z.literal('')),
})

export const jobApplicationSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  email: z
    .string()
    .email('Please enter a valid email address')
    .max(254, 'Email must be less than 254 characters'),
  phone: z
    .string()
    .regex(/^[\d\s+\-()]*$/, 'Phone number contains invalid characters')
    .max(20, 'Phone must be less than 20 characters'),
  message: z
    .string()
    .max(1000, 'Message must be less than 1000 characters')
    .optional()
    .or(z.literal('')),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the Privacy Policy and consent to data processing' }),
  }),
  website: z.string().max(0, 'Bot detected').optional().or(z.literal('')),
})

export const ALLOWED_FILE_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export const ALLOWED_FILE_EXTENSIONS = ['.pdf', '.doc', '.docx']
export const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5MB

export function validateFileUpload(file: File): { valid: boolean; error?: string } {
  if (!file || file.size === 0) {
    return { valid: false, error: 'Please select a file to upload' }
  }

  if (file.size > MAX_FILE_SIZE) {
    return { valid: false, error: `File size must be less than 5MB. Your file is ${(file.size / (1024 * 1024)).toFixed(2)}MB` }
  }

  if (!ALLOWED_FILE_TYPES.includes(file.type)) {
    return { valid: false, error: 'Only PDF, DOC, and DOCX files are allowed' }
  }

  const ext = '.' + file.name.split('.').pop()?.toLowerCase()
  if (!ALLOWED_FILE_EXTENSIONS.includes(ext)) {
    return { valid: false, error: 'Invalid file extension' }
  }

  // Check for double extensions (e.g., file.pdf.exe)
  const parts = file.name.split('.')
  if (parts.length > 2) {
    return { valid: false, error: 'Invalid file name' }
  }

  return { valid: true }
}

export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+=/gi, '')
    .replace(/data:/gi, '')
}
