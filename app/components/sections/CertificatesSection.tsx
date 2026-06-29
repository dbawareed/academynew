'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Award, CheckCircle, Download, Shield, Star, FileCheck } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'شهادة التصوير الفوتوغرافي الاحترافي',
    description: 'تؤهلك لاحتراف التصوير الفوتوغرافي بجميع أنواعه',
    icon: CameraIcon,
    color: 'from-primary-500 to-blue-600',
    features: ['معتمدة دولياً', 'قابلة للتحقق', 'معرف فريد', 'PDF رقمي'],
  },
  {
    id: 2,
    title: 'شهادة المونتاج الاحترافي',
    description: 'تغطي Premiere Pro و After Effects و DaVinci Resolve',
    icon: ScissorsIcon,
    color: 'from-accent-rose to-red-600',
    features: ['معتمدة من Adobe', 'مشاركة على LinkedIn', 'تحقق رقمي', 'طباعة فورية'],
  },
  {
    id: 3,
    title: 'شهادة صناعة المحتوى الرقمي',
    description: 'شاملة استراتيجيات المحتوى والسوشيال ميديا',
    icon: ContentIcon,
    color: 'from-accent-emerald to-green-600',
    features: ['اعتماد معتمد', 'سيرة ذاتية محسنة', 'تصميم احترافي', 'تتبع المهارات'],
  },
]

function CameraIcon() {
  return <Award className="w-8 h-8 text-white" />
}

function ScissorsIcon() {
  return <FileCheck className="w-8 h-8 text-white" />
}

function ContentIcon() {
  return <Star className="w-8 h-8 text-white" />
}

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <Shield className="w-4 h-4" />
            الشهادات والاعتمادات
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">شهادات</span>{' '}
            <span className="text-gradient">معتمدة</span>{' '}
            <span className="text-white">تثبت كفاءتك</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-arabic">
            شهادات رقمية معتمدة يمكن مشاركتها وتحققها إلكترونياً
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Certificate Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-violet/20 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-accent-rose/20 rounded-2xl transform -rotate-3" />
              
              <div className="relative glass-card rounded-2xl p-8 border-2 border-accent-gold/30">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent-gold to-primary-500 flex items-center justify-center mb-4 shadow-lg shadow-accent-gold/30">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-arabic mb-2">
                    {certificates[selectedCert].title}
                  </h3>
                  <p className="text-gray-400 text-sm font-arabic">{certificates[selectedCert].description}</p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400 text-sm font-arabic">رقم الشهادة</span>
                    <span className="text-accent-gold font-mono font-bold">CA-2026-8842</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400 text-sm font-arabic">تاريخ الإصدار</span>
                    <span className="text-white font-arabic">23 يونيو 2026</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm font-arabic">الحالة</span>
                    <span className="flex items-center gap-1 text-green-400 text-sm font-arabic">
                      <CheckCircle className="w-4 h-4" />
                      معتمدة
                    </span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="flex-1 btn-primary text-sm font-arabic flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    تحميل PDF
                  </button>
                  <button className="flex-1 btn-secondary text-sm font-arabic">
                    مشاركة
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Certificates List */}
          <div className="space-y-4">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                onClick={() => setSelectedCert(index)}
                className={`cursor-pointer glass-card rounded-2xl p-6 transition-all border-2 ${
                  selectedCert === index ? 'border-primary-500/50 bg-white/10' : 'border-transparent hover:bg-white/5'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shrink-0 shadow-lg`}>
                    <cert.icon />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 font-arabic">{cert.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 font-arabic">{cert.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {cert.features.map((feature) => (
                        <span key={feature} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 text-primary-400 text-xs font-arabic">
                          <CheckCircle className="w-3 h-3" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
