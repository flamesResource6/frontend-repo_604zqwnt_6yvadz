import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/70 backdrop-blur border border-white/50 shadow-sm text-cyan-700">
            Premium Dental Care • Modern Tech
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Smile with confidence
            <span className="block bg-gradient-to-r from-cyan-600 to-violet-600 text-transparent bg-clip-text">in a modern 3D experience</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl">
            Experience cutting-edge dentistry where comfort meets technology. Advanced diagnostics, gentle treatments, and caring specialists.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white px-6 py-3 font-medium shadow-lg hover:shadow-xl transition-shadow">
              Book an appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full bg-white/80 backdrop-blur px-6 py-3 font-medium text-gray-800 border border-white/60 shadow-sm hover:bg-white">
              Explore services
            </a>
          </div>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { label: 'Years of Excellence', value: '15+' },
            { label: 'Happy Patients', value: '10k+' },
            { label: '5-Star Reviews', value: '2k+' },
            { label: 'Specialists', value: '12' },
          ].map((stat) => (
            <li key={stat.label} className="rounded-2xl p-6 bg-white/70 backdrop-blur border border-white/50 shadow-sm">
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-violet-600 text-transparent bg-clip-text">{stat.value}</p>
              <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
