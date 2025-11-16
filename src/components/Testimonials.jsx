import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ava M.',
    text: 'The most relaxing dental visit I have ever had. The space feels futuristic yet warm, and the team is incredibly caring.',
  },
  {
    name: 'Daniel K.',
    text: 'From 3D scans to painless treatment, everything felt precise. I finally love my smile!',
  },
  {
    name: 'Sophia R.',
    text: 'Beautiful clinic, friendly staff, and amazing results. Highly recommend Lumina Dental.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-violet-50 text-violet-700 border border-violet-100">
            Patient Stories
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">What our patients say</h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="rounded-2xl p-6 bg-white/80 backdrop-blur border border-white/60 shadow-sm"
            >
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#f59e0b" className="text-yellow-500" />
                ))}
              </div>
              <p className="mt-4 text-gray-700">“{t.text}”</p>
              <p className="mt-4 text-sm font-medium text-gray-900">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
