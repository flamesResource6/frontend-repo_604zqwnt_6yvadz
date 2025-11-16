import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        }),
      })

      if (res.ok) {
        setStatus('Thanks! We will reach out shortly.')
        e.target.reset()
      } else {
        const data = await res.json().catch(() => ({}))
        setStatus(data.detail || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-50 to-violet-50 text-cyan-700 border border-cyan-100">
              Get in touch
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Book your visit</h2>
            <p className="mt-3 text-gray-600">Tell us a bit about yourself and we’ll confirm an appointment time.</p>

            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="rounded-xl p-4 bg-white/80 border border-white/60">Same-day appointments</div>
              <div className="rounded-xl p-4 bg-white/80 border border-white/60">Transparent pricing</div>
              <div className="rounded-xl p-4 bg-white/80 border border-white/60">Insurance assistance</div>
              <div className="rounded-xl p-4 bg-white/80 border border-white/60">Comfort-first care</div>
            </div>
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-6 bg-white/80 backdrop-blur border border-white/60 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700">Full name</label>
              <input name="name" required className="mt-2 w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input name="email" type="email" required className="mt-2 w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea name="message" rows="4" required className="mt-2 w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 outline-none focus:ring-2 focus:ring-cyan-500" />
            </div>
            <button className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-shadow">
              Send request
            </button>
            {status && (
              <p className="text-sm text-gray-700">{status}</p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
