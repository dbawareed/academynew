'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowDown, Play, Star, Users, BookOpen, Award } from 'lucide-react'
import { AnimatedCounter } from '../animations/AnimatedCounter'

export function HeroSection() {
  const stats = [
    { icon: Users, value: 10000, suffix: '+', label: 'طالب' },
    { icon: BookOpen, value: 250, suffix: '+', label: 'دورة' },
    { icon: Award, value: 120, suffix: '+', label: 'مشروع ناجح' },
    { icon: Star, value: 50, suffix: '+', label: 'مدرب محترف' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f] z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80')`,
          }}
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-transparent to-accent-violet/20 z-10 animate-pulse-slow" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full bg-primary-500/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute top-1/3 right-[15%] w-32 h-32 rounded-full bg-accent-gold/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/4 left-[20%] w-24 h-24 rounded-full bg-accent-rose/10 blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic">
            <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            نحن نبني جيلًا جديدًا من المبدعين
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 font-arabic"
        >
          <span className="text-white">حوّل شغفك بال</span>
          <span className="text-gradient">تصوير</span>
          <br className="hidden sm:block" />
          <span className="text-white">وصناعة المحتوى إلى</span>
          <br className="hidden sm:block" />
          <span className="text-gradient">مهنة احترافية</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-arabic leading-relaxed"
        >
          تعلم من نخبة المدربين المحترفين، واكتسب المهارات العملية التي تحتاجها
          لتحقيق نجاحك في عالم التصوير وصناعة المحتوى الرقمي.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link href="#courses" className="btn-primary text-lg font-arabic interactive">
            ابدأ رحلتك
          </Link>
          <Link
            href="#about"
            className="btn-secondary text-lg font-arabic flex items-center gap-2 interactive"
          >
            <Play className="w-5 h-5" />
            استكشف الدورات
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-2xl p-6 text-center group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-500/20 transition-colors">
                <stat.icon className="w-6 h-6 text-primary-400" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 font-arabic">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400 font-arabic">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-gray-500"
          >
            <span className="text-xs font-arabic">اسحب للأسفل</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
