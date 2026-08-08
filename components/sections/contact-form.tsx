'use client'

import * as React from 'react'
import { CheckCircle2, Loader2, Send, Sparkles } from 'lucide-react'
import emailjs from '@emailjs/browser'

import { emailConfig } from '@/lib/config'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type SubmitState = 'idle' | 'sending' | 'success' | 'error'

const FIELD_CLASS =
  'w-full rounded-xl border border-[var(--line-strong)] bg-[var(--canvas-alt)]/70 px-3 py-2 text-xs font-medium text-[var(--ink)] placeholder:text-[var(--ink-muted)]/50 transition-all duration-200 focus:border-[var(--fab-accent)] focus:bg-[var(--panel)] focus:ring-2 focus:ring-[var(--fab-accent)]/20 focus:outline-none shadow-2xs'

const MAX_WORDS = 500

/**
 * Contact form with live 500-word limit counter and dynamic expanding message area.
 */
export function ContactForm() {
  const [state, setState] = React.useState<SubmitState>('idle')
  const [error, setError] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [senderName, setSenderName] = React.useState('')

  const wordCount = React.useMemo(() => {
    const trimmed = message.trim()
    return trimmed ? trimmed.split(/\s+/).length : 0
  }, [message])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (wordCount > MAX_WORDS) {
      setError(`Message exceeds the maximum limit of ${MAX_WORDS} words.`)
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('from_name') ?? '').trim()
    setSenderName(name)

    setState('sending')
    setError('')

    try {
      const response = await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: name,
          reply_to: String(data.get('reply_to') ?? ''),
          subject: String(data.get('subject') ?? ''),
          message: String(data.get('message') ?? ''),
        },
        emailConfig.publicKey,
      )

      if (response.status !== 200) {
        throw new Error(response.text || 'The message could not be sent.')
      }

      form.reset()
      setMessage('')
      setState('success')
    } catch (caught) {
      setState('error')
      setError(
        caught instanceof Error && caught.message
          ? caught.message
          : 'The message could not be sent. Please email me directly instead.',
      )
    }
  }

  if (state === 'success') {
    return (
      <div className="surface-card flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 via-[var(--panel)] to-[var(--panel)] shadow-lg h-full space-y-4 animate-in fade-in zoom-in-95 duration-300">
        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          <Sparkles className="h-4 w-4 absolute -top-1 -right-1 text-amber-300 animate-pulse" />
        </div>

        <div className="space-y-1.5 max-w-sm">
          <h4 className="text-lg font-bold text-[var(--ink)]">
            Thank you, {senderName || 'there'}!
          </h4>
          <p className="text-xs text-[var(--ink-muted)] leading-relaxed">
            Your message has been delivered directly to Ninad&apos;s inbox. You will receive a response shortly!
          </p>
        </div>

        <div className="pt-2">
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setState('idle')
              setSenderName('')
            }}
            className="text-xs font-semibold px-4 py-2 rounded-xl cursor-pointer hover:border-[var(--fab-accent)]"
          >
            Send Another Message
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full surface-card p-4 sm:p-5 rounded-2xl border border-[var(--line-strong)] bg-[var(--panel)] shadow-sm flex flex-col gap-3"
    >
      {/* Form Header */}
      <div className="flex items-center justify-between pb-1.5 border-b border-[var(--line)] shrink-0">
        <div className="flex items-center gap-1.5">
          <Sparkles className="h-3.5 w-3.5 text-[var(--fab-accent)]" />
          <h3 className="text-xs font-bold tracking-wider text-[var(--ink)] uppercase">
            Send Message
          </h3>
        </div>
        <span className="text-[10px] font-medium text-[var(--ink-muted)]">
          Direct Inbox
        </span>
      </div>

      <div className="grid gap-2.5 sm:grid-cols-2 shrink-0">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-[11px] font-semibold text-[var(--ink)]">
            Full Name
          </label>
          <input
            id="contact-name"
            name="from_name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Tanvir Ahmed (BUET) / Dr. Alex Vance"
            className={FIELD_CLASS}
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="mb-1 block text-[11px] font-semibold text-[var(--ink)]"
          >
            Email Address
          </label>
          <input
            id="contact-email"
            name="reply_to"
            type="email"
            required
            autoComplete="email"
            placeholder="e.g. tanvir.ahmed@buet.ac.bd / alex@mit.edu"
            className={FIELD_CLASS}
          />
        </div>
      </div>

      <div className="shrink-0">
        <label htmlFor="contact-subject" className="mb-1 block text-[11px] font-semibold text-[var(--ink)]">
          Subject / Inquiry Type
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder="e.g. AI Research Collaboration / ML Engineering Opportunity"
          className={FIELD_CLASS}
        />
      </div>

      {/* Message Area: Flex-1 to Fill All Remaining Space */}
      <div className="flex-1 flex flex-col min-h-[140px]">
        <div className="flex items-center justify-between mb-1 shrink-0">
          <label htmlFor="contact-message" className="block text-[11px] font-semibold text-[var(--ink)]">
            Message
          </label>
          <div className="flex items-center gap-1.5 text-[10px] font-mono">
            <span className={wordCount > MAX_WORDS ? 'text-rose-500 font-bold' : 'text-[var(--ink-muted)]'}>
              {wordCount} / {MAX_WORDS} words
            </span>
          </div>
        </div>
        <textarea
          id="contact-message"
          name="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="e.g. আসসালামু আলাইকুম / Hi Ninad, I reviewed your computer vision & LLM research. We would love to discuss a research partnership or engineering role..."
          className={cn(FIELD_CLASS, 'flex-1 min-h-[120px] resize-y leading-relaxed')}
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        disabled={state === 'sending' || wordCount > MAX_WORDS}
        className="w-full h-9 py-2 text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer shrink-0 mt-1"
      >
        {state === 'sending' ? (
          <>
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
            Sending Message…
          </>
        ) : (
          <>
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
            Send Message
          </>
        )}
      </Button>

      {state === 'error' && (
        <p aria-live="polite" className="text-center text-xs text-rose-500 font-medium shrink-0">
          {error}
        </p>
      )}
    </form>
  )
}