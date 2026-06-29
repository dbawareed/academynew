'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, MessageCircle, Linkedin, Award, Users, BookOpen, Star } from 'lucide-react'

const instructors = [
  {
    name: 'أحمد العلي',
    role: 'خبير التصوير الفوتوغرافي',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'مصور فوتوغرافي محترف بخبرة 15 عاماً في التصوير التجاري والإعلاني',
    stats: { courses: 12, students: 4200, rating: 4.9 },
    certifications: ['Adobe Certified Expert', 'Sony Imaging Ambassador'],
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'سارة خالد',
    role: 'مخرجة فيديو ومنتجة',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    bio: 'مخرجة أفلام وثائقية حائزة على جوائز دولية في مجال الإنتاج المرئي',
    stats: { courses: 8, students: 3100, rating: 4.8 },
    certifications: ['Apple Certified Pro', 'Blackmagic Design Trainer'],
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'محمد العبدالله',
    role: 'استراتيجي محتوى رقمي',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'خبير في صناعة المحتوى الرقمي واستراتيجيات النمو على السوشيال ميديا',
    stats: { courses: 15, students: 5600, rating: 4.7 },
    certifications: ['Google Analytics Certified', 'HubSpot Content Marketing'],
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'نورة الفهد',
    role: 'محررة فيديو محترفة',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'متخصصة في المونتاج الاحترافي وتصميم الحركة البصري للمحتوى الرقمي',
    stats: { courses: 10, students: 2800, rating: 4.9 },
    certifications: ['Adobe Premiere Pro Certified', 'DaVinci Resolve Trainer'],
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'خالد السالم',
    role: 'مصور تجاري',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'مصور تجاري متخصص في تصوير المنتجات والأطعمة والأزياء للعلامات التجارية',
    stats: { courses: 6, students: 1500, rating: 4.8 },
    certifications: ['Phase One Certified Professional', 'Profoto Ambassador'],
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
  {
    name: 'فاطمة الزهراني',
    role: 'مديرة سوشيال ميديا',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    bio: 'مديرة محتوى لأكبر العلامات التجارية في المنطقة العربية',
    stats: { courses: 9, students: 3900, rating: 4.6 },
    certifications: ['Meta Blueprint Certified', 'TikTok Marketing Partner'],
    social: { instagram: '#', twitter: '#', linkedin: '#' },
  },
]

export function InstructorsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="instructors" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <Users className="w-4 h-4" />
            نخبة المدربين
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">تعلم من</span>{' '}
            <span className="text-gradient">خبراء</span>{' '}
            <span className="text-white">المجال</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-arabic">
            مدربون محترفون يجمعون بين الخبرة العملية والشهادات العالمية
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group glass-card rounded-2xl overflow-hidden"
            >
              {/* Image & Overlay */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${instructor.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
                
                {/* Social Links */}
                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <a href={instructor.social.instagram} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-pink-500 transition-colors">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href={instructor.social.twitter} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-400 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a href={instructor.social.linkedin} className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>

                <div className="absolute bottom-4 right-4 text-left">
                  <h3 className="text-white font-bold text-xl font-arabic">{instructor.name}</h3>
                  <p className="text-primary-400 text-sm font-arabic">{instructor.role}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-400 text-sm mb-4 leading-relaxed font-arabic">{instructor.bio}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-primary-400 mb-1">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-bold text-sm">{instructor.stats.courses}</span>
                    </div>
                    <div className="text-gray-500 text-xs font-arabic">دورة</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-accent-emerald mb-1">
                      <Users className="w-4 h-4" />
                      <span className="font-bold text-sm">{(instructor.stats.students / 1000).toFixed(1)}k</span>
                    </div>
                    <div className="text-gray-500 text-xs font-arabic">طالب</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 text-accent-gold mb-1">
                      <Star className="w-4 h-4" />
                      <span className="font-bold text-sm">{instructor.stats.rating}</span>
                    </div>
                    <div className="text-gray-500 text-xs font-arabic">تقييم</div>
                  </div>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-2">
                  {instructor.certifications.map((cert) => (
                    <span key={cert} className="flex items-center gap-1 px-2 py-1 rounded-lg bg-accent-gold/10 text-accent-gold text-xs font-arabic">
                      <Award className="w-3 h-3" />
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
