'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Eye, Heart, Zap, Camera, Video, Palette, TrendingUp } from 'lucide-react'

const values = [
  { icon: Target, title: 'الجودة', desc: 'نقدم أعلى معايير الجودة في التعليم والتدريب' },
  { icon: Eye, title: 'الرؤية', desc: 'نرى المستقبل ونعد الطلاب لمواكبة التغيير' },
  { icon: Heart, title: 'الشغف', desc: 'نؤمن بأن الشغف هو المحرك الأساسي للإبداع' },
  { icon: Zap, title: 'الابتكار', desc: 'نستخدم أحدث التقنيات والأساليب التعليمية' },
]

const features = [
  { icon: Camera, label: 'تصوير احترافي', count: '50+ دورة' },
  { icon: Video, label: 'إنتاج فيديو', count: '35+ دورة' },
  { icon: Palette, label: 'تصميم جرافيك', count: '40+ دورة' },
  { icon: TrendingUp, label: 'سوشيال ميديا', count: '25+ دورة' },
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden group">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-900/50 to-accent-violet/30 rounded-3xl relative overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=800&q=80')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 glass-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">10+</div>
                    <div className="text-gray-400 text-sm font-arabic">سنوات خبرة</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -top-6 -right-6 glass-card rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-gold to-accent-rose flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">98%</div>
                    <div className="text-gray-400 text-sm font-arabic">رضا الطلاب</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary-400 font-medium text-sm font-arabic">من نحن</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-6 font-arabic leading-tight">
              <span className="text-white">نحن نصنع</span>
              <br />
              <span className="text-gradient">المبدعين</span>
              <span className="text-white"> بجدارة</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-arabic">
              أكاديمية الإبداع هي منصة تعليمية رائدة متخصصة في التصوير الفوتوغرافي وصناعة المحتوى الرقمي. 
              تأسست في عام 2016 بهدف سد الفجوة بين الشغف والمهارة، وتقديم تعليم عملي يرتكز على المشاريع الحقيقية.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 font-arabic">
              نؤمن بأن كل فرد يملك قصة فريدة تستحق أن تُروى بأجمل صورة وأفضل محتوى. 
              من هنا، نبذل قصارى جهدنا لتمكين طلابنا من امتلاك الأدوات والمهارات التي تؤهلهم للنجاح في سوق العمل.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 group hover:bg-white/10 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                    <feature.icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm font-arabic">{feature.label}</div>
                    <div className="text-gray-500 text-xs font-arabic">{feature.count}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl p-6 text-center group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-violet/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-primary-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-arabic">{value.title}</h3>
              <p className="text-gray-400 text-sm font-arabic leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
