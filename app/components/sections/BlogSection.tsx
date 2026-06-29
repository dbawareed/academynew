'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Clock, ArrowLeft, User, Calendar } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: '10 نصائح ذهبية لتحسين إضاءة صورك',
    excerpt: 'تعلم كيفية استخدام الإضاءة الطبيعية والصناعية لإخراج أفضل ما في لقطاتك الفوتوغرافية',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=600&q=80',
    author: 'أحمد العلي',
    date: '15 يونيو 2026',
    readTime: '5 دقائق',
    category: 'تصوير',
  },
  {
    id: 2,
    title: 'مستقبل صناعة المحتوى في 2026',
    excerpt: 'تعرف على أحدث التوجهات والتقنيات التي ستشكل مستقبل صناعة المحتوى الرقمي',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    author: 'محمد العبدالله',
    date: '12 يونيو 2026',
    readTime: '8 دقائق',
    category: 'محتوى',
  },
  {
    id: 3,
    title: 'دليلك الشامل للتصوير السينمائي',
    excerpt: 'كل ما تحتاج معرفته عن التصوير السينمائي من الإضاءة حتى المونتاج النهائي',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
    author: 'سارة خالد',
    date: '10 يونيو 2026',
    readTime: '12 دقيقة',
    category: 'سينما',
  },
  {
    id: 4,
    title: 'أفضل معدات التصوير للمبتدئين',
    excerpt: 'قائمة مختصرة بأفضل الكاميرات والعدسات والإكسسوارات لتبدأ رحلتك التصويرية',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
    author: 'خالد السالم',
    date: '8 يونيو 2026',
    readTime: '7 دقائق',
    category: 'معدات',
  },
  {
    id: 5,
    title: 'استراتيجيات النمو على تيك توك',
    excerpt: 'كيف تبني جمهوراً كبيراً على تيك توك من خلال المحتوى المرئي المتميز',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80',
    author: 'فاطمة الزهراني',
    date: '5 يونيو 2026',
    readTime: '6 دقائق',
    category: 'سوشيال',
  },
  {
    id: 6,
    title: 'أساسيات التصميم الجرافيكي للمصورين',
    excerpt: 'لماذا يجب على كل مصور تعلم أساسيات التصميم الجرافيكي وكيف تبدأ',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80',
    author: 'نورة الفهد',
    date: '1 يونيو 2026',
    readTime: '9 دقائق',
    category: 'تصميم',
  },
]

export function BlogSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <BookOpen className="w-4 h-4" />
            المدونة
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">آخر</span>{' '}
            <span className="text-gradient">المقالات</span>{' '}
            <span className="text-white">والنصائح</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-arabic">
            محتوى تعليمي مجاني يحدث باستمرار لمساعدتك في رحلتك الإبداعية
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${article.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-lg bg-primary-500/20 text-primary-400 text-xs font-medium font-arabic">
                    {article.category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                  <span className="flex items-center gap-1 font-arabic">
                    <User className="w-3 h-3" />
                    {article.author}
                  </span>
                  <span className="flex items-center gap-1 font-arabic">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 font-arabic">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary-400 transition-colors font-arabic line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 font-arabic line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary-400 text-sm font-medium font-arabic group-hover:gap-3 transition-all">
                  <span>اقرأ المقال</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
