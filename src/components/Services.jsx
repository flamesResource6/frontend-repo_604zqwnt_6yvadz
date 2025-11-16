import { motion } from 'framer-motion'
import { Sparkles, ShieldCheck, Smile, Scan, Syringe, BadgeCheck } from 'lucide-react'

const services = [
  {
    icon: Smile,
    title: 'Cosmetic Dentistry',
    desc: 'Whitening, veneers, and smile makeovers with stunning, natural results.',
  },
  {
    icon: ShieldCheck,
    title: 'Preventive Care',
    desc: 'Comprehensive exams, cleanings, and personalized hygiene plans.',
  },
  {
    icon: Scan,
    title: '3D Digital Imaging',
    desc: 'Ultra-precise scans for accurate diagnosis and treatment planning.',
  },
  {
    icon: Syringe,
    title: 'Gentle Treatments',
    desc: 'Anxiety-free procedures with modern, minimally invasive techniques.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-50 text-cyan-700 border border-cyan-100">
            Our Services
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Advanced care for every smile</h2>
          <p className="mt-3 text-gray-600">State-of-the-art technology and compassionate care in every visit.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="rounded-2xl p-6 bg-white/80 backdrop-blur border border-white/60 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white flex items-center justify-center shadow-md">
                <s.icon size={24} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
              <div className="mt-4 inline-flex items-center text-cyan-700 text-sm font-medium">
                <BadgeCheck size={16} className="mr-2" /> Board-certified specialists
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
