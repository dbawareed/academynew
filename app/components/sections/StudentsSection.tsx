'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote, Award, TrendingUp } from 'lucide-react'

const projects = [
  {
    id: 1,
    student: 'عبدالله محمد',
    project: 'حملة إعلانية لعلامة تجارية',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    review: 'الدورة غيرت نظرتي للتصوير التجاري. تعلمت أساليب احترافية ساعدتني في العمل المباشر.',
    achievement: 'حصل على وظيفة مصور في وكالة إعلانية',
  },
  {
    id: 2,
    student: 'ليلى أحمد',
    project: 'فيلم قصير عن الثقافة السعودية',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    review: 'محتوى الدورة عملي وممتاز. المدربين محترفين جداً ويقدمون ملاحظات بناءة.',
    achievement: 'فاز بجائزة أفضل فيلم قصير في مهرجان الشباب',
  },
  {
    id: 3,
    student: 'سالم خالد',
    project: 'تصميم هوية بصرية متكاملة',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80',
    rating: 4,
    review: 'أفضل استثمار في مسيرتي المهنية. تعلمت من الصفر حتى الاحتراف.',
    achievement: 'افتتح استوديو تصميم خاص به',
  },
  {
    id: 4,
    student: 'نورة سعد',
    project: 'مونتاج مسلسل وثائقي',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=400&q=80',
    rating: 5,
    review: 'المحتوى العملي والمشاريع الحقيقية هي ما يميز هذه الأكاديمية عن غيرها.',
    achievement: 'عملت كمحررة فيديو في قناة رسمية',
  },
]

const successStories = [
  { number: '85%', label: 'نسبة توظيف الطلاب', icon: TrendingUp },
  { number: '500+', label: 'مشروع تم إنجازه', icon: Award },
  { number: '50+', label: 'علامة تجارية تعاونت', icon: Star },
]

export function StudentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="students" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <Award className="w-4 h-4" />
            مشاريع الطلاب وقصص النجاح
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">إنجازات</span>{' '}
            <span className="text-gradient">طلابنا</span>{' '}
            <span className="text-white">تتحدث</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-arabic">
            مشاريع احترافية حقيقية أنجزها طلابنا خلال رحلتهم التعليمية
          </p>
        </motion.div>

        {/* Success Stats */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          {successStories.map((story, index) => (
            <motion.div
              key={story.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center group hover:bg-white/10 transition-colors"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-violet/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <story.icon className="w-7 h-7 text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 font-arabic">{story.number}</div>
              <div className="text-gray-400 text-sm font-arabic">{story.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                <div className="absolute top-3 left-3 flex gap-1">
                  {[...Array(project.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-violet shrink-0" />
                  <div>
                    <h4 className="text-white font-bold font-arabic">{project.student}</h4>
                    <p className="text-primary-400 text-sm font-arabic">{project.project}</p>
                  </div>
                </div>
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -right-2 w-6 h-6 text-primary-500/20" />
                  <p className="text-gray-400 text-sm leading-relaxed font-arabic pr-4">{project.review}</p>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-accent-gold/10">
                  <Award className="w-5 h-5 text-accent-gold shrink-0" />
                  <p className="text-accent-gold text-xs font-arabic">{project.achievement}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
