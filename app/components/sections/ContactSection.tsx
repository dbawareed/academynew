'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from 'lucide-react'

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactInfo = [
    { icon: MapPin, title: 'الموقع', detail: 'الرياض، المملكة العربية السعودية', sub: 'برج التقنية، الطابق 15' },
    { icon: Phone, title: 'الهاتف', detail: '+966 50 123 4567', sub: 'من الأحد إلى الخميس، 9 ص - 5 م' },
    { icon: Mail, title: 'البريد', detail: 'info@creativity-academy.com', sub: 'نرد على جميع الاستفسارات خلال 24 ساعة' },
    { icon: Clock, title: 'ساعات العمل', detail: 'الأحد - الخميس', sub: '9:00 صباحاً - 5:00 مساءً' },
  ]

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <Mail className="w-4 h-4" />
            تواصل معنا
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">نحن هنا</span>{' '}
            <span className="text-gradient">لنساعدك</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-arabic">
            فريقنا جاهز للإجابة على جميع استفساراتك ومساعدتك في اختيار المسار التعليمي المناسب لك
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4 group hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-violet/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <item.icon className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1 font-arabic">{item.title}</h3>
                  <p className="text-gray-300 font-arabic">{item.detail}</p>
                  <p className="text-gray-500 text-sm font-arabic">{item.sub}</p>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden h-64 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 to-accent-violet/30 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary-400 mx-auto mb-2" />
                  <p className="text-white font-bold font-arabic">الرياض، المملكة العربية السعودية</p>
                  <p className="text-gray-400 text-sm font-arabic">برج التقنية، حي العليا</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2 font-arabic">تم إرسال رسالتك بنجاح!</h3>
                <p className="text-gray-400 font-arabic">سنقوم بالرد عليك في أقرب وقت ممكن</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2 font-arabic">الاسم الكامل</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                      placeholder="محمد أحمد"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2 font-arabic">البريد الإلكتروني</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2 font-arabic">رقم الجوال</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-sm font-medium mb-2 font-arabic">الموضوع</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                    >
                      <option value="" className="bg-[#12121a]">اختر الموضوع</option>
                      <option value="courses" className="bg-[#12121a]">استفسار عن دورة</option>
                      <option value="instructors" className="bg-[#12121a]">التواصل مع مدرب</option>
                      <option value="partnership" className="bg-[#12121a]">شراكة تجارية</option>
                      <option value="other" className="bg-[#12121a]">أخرى</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2 font-arabic">الرسالة</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic resize-none"
                    placeholder="اكتب رسالتك هنا..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full font-arabic flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      إرسال الرسالة
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
