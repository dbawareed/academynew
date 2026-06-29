'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Camera,
  Video,
  PenTool,
  Scissors,
  ShoppingBag,
  Film,
  Smartphone,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  ChevronLeft,
  BookOpen,
} from 'lucide-react'

interface Course {
  id: number
  title: string
  category: string
  level: string
  instructor: string
  image: string
  rating: number
  students: number
  duration: string
  price: string
  icon: any
  description: string
}

const categories = [
  { id: 'all', label: 'الكل', icon: BookOpen },
  { id: 'photography', label: 'التصوير الفوتوغرافي', icon: Camera },
  { id: 'video', label: 'تصوير الفيديو', icon: Video },
  { id: 'content', label: 'صناعة المحتوى', icon: PenTool },
  { id: 'editing', label: 'المونتاج', icon: Scissors },
  { id: 'commercial', label: 'التصوير التجاري', icon: ShoppingBag },
  { id: 'cinematic', label: 'التصوير السينمائي', icon: Film },
  { id: 'social', label: 'السوشيال ميديا', icon: Smartphone },
]

const levels = ['الكل', 'مبتدئ', 'متوسط', 'احترافي']

const courses: Course[] = [
  {
    id: 1,
    title: 'أساسيات التصوير الفوتوغرافي',
    category: 'photography',
    level: 'مبتدئ',
    instructor: 'أحمد العلي',
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    students: 2340,
    duration: '12 ساعة',
    price: '299 ر.س',
    icon: Camera,
    description: 'تعلم أساسيات التصوير من الصفر: الإضاءة، التكوين، والكاميرا',
  },
  {
    id: 2,
    title: 'تصوير الفيديو الاحترافي',
    category: 'video',
    level: 'متوسط',
    instructor: 'سارة خالد',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    students: 1890,
    duration: '18 ساعة',
    price: '499 ر.س',
    icon: Video,
    description: 'تقنيات تصوير الفيديو الاحترافي باستخدام الكاميرات الحديثة',
  },
  {
    id: 3,
    title: 'صناعة المحتوى الرقمي',
    category: 'content',
    level: 'مبتدئ',
    instructor: 'محمد العبدالله',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    students: 3450,
    duration: '15 ساعة',
    price: '399 ر.س',
    icon: PenTool,
    description: 'استراتيجيات بناء محتوى قوي وجذاب على مختلف المنصات الرقمية',
  },
  {
    id: 4,
    title: 'المونتاج ببرنامج Premiere Pro',
    category: 'editing',
    level: 'متوسط',
    instructor: 'نورة الفهد',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    students: 1560,
    duration: '20 ساعة',
    price: '599 ر.س',
    icon: Scissors,
    description: 'إتقان المونتاج الاحترافي من الألف إلى الياء',
  },
  {
    id: 5,
    title: 'التصوير التجاري للمنتجات',
    category: 'commercial',
    level: 'احترافي',
    instructor: 'خالد السالم',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    students: 890,
    duration: '10 ساعة',
    price: '799 ر.س',
    icon: ShoppingBag,
    description: 'أسرار التصوير التجاري الناجح للمنتجات والأزياء',
  },
  {
    id: 6,
    title: 'السينما الرقمية',
    category: 'cinematic',
    level: 'احترافي',
    instructor: 'عبدالرحمن الغامدي',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
    rating: 5.0,
    students: 670,
    duration: '25 ساعة',
    price: '999 ر.س',
    icon: Film,
    description: 'تعلم لغة السينما وتقنيات الإنتاج السينمائي الرقمي',
  },
  {
    id: 7,
    title: 'إدارة حسابات السوشيال ميديا',
    category: 'social',
    level: 'مبتدئ',
    instructor: 'فاطمة الزهراني',
    image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    students: 4200,
    duration: '8 ساعة',
    price: '249 ر.س',
    icon: Smartphone,
    description: 'استراتيجيات نمو الحسابات على إنستغرام وتيك توك',
  },
  {
    id: 8,
    title: 'تصوير البورتريت الاحترافي',
    category: 'photography',
    level: 'متوسط',
    instructor: 'أحمد العلي',
    image: 'https://images.unsplash.com/photo-1554048612-387768052bf7?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    students: 1980,
    duration: '14 ساعة',
    price: '449 ر.س',
    icon: Camera,
    description: 'تقنيات تصوير البورتريت والتعامل مع الإضاءة الطبيعية والصناعية',
  },
]

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [activeLevel, setActiveLevel] = useState('الكل')
  const [searchQuery, setSearchQuery] = useState('')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const filteredCourses = courses.filter((course) => {
    const matchCategory = activeCategory === 'all' || course.category === activeCategory
    const matchLevel = activeLevel === 'الكل' || course.level === activeLevel
    const matchSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       course.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchLevel && matchSearch
  })

  return (
    <section id="courses" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <BookOpen className="w-4 h-4" />
            الدورات التدريبية
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">استكشف</span>{' '}
            <span className="text-gradient">دوراتنا</span>{' '}
            <span className="text-white">الاحترافية</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-arabic">
            دورات مصممة بعناية لتأخذك من المبتدئ إلى الاحتراف في مجال التصوير وصناعة المحتوى
          </p>
        </motion.div>

        {/* Filters */}
        <div className="glass-card rounded-2xl p-6 mb-10">
          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث في الدورات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-12 pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-4 justify-between">
            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              <Filter className="w-5 h-5 text-gray-400 shrink-0" />
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium font-arabic whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Levels */}
            <div className="flex items-center gap-2">
              {levels.map((level) => (
                <button
                  key={level}
                  onClick={() => setActiveLevel(level)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium font-arabic transition-all ${
                    activeLevel === level
                      ? 'bg-accent-gold/20 text-accent-gold border border-accent-gold/30'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${course.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className={`px-2 py-1 rounded-lg text-xs font-medium font-arabic ${
                      course.level === 'مبتدئ' ? 'bg-green-500/20 text-green-400' :
                      course.level === 'متوسط' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {course.level}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 flex items-center gap-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center">
                      <course.icon className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2 font-arabic group-hover:text-primary-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 font-arabic">
                    {course.description}
                  </p>

                  <div className="flex items-center gap-3 mb-4 text-sm text-gray-400 font-arabic">
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      {course.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-violet" />
                      <span className="text-sm text-gray-300 font-arabic">{course.instructor}</span>
                    </div>
                    <span className="text-lg font-bold text-accent-gold font-arabic">{course.price}</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Search className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg font-arabic">لا توجد دورات مطابقة لبحثك</p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-secondary font-arabic interactive">
            استعرض جميع الدورات
            <ChevronLeft className="w-5 h-5 inline-block mr-2" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
