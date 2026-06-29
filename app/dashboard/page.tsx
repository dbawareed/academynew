'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  LayoutDashboard,
  BookOpen,
  Award,
  Bell,
  Settings,
  LogOut,
  User,
  Clock,
  TrendingUp,
  CheckCircle,
  PlayCircle,
  FileText,
  Star,
} from 'lucide-react'

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'الرئيسية', href: '/dashboard', active: true },
  { icon: BookOpen, label: 'دوراتي', href: '#' },
  { icon: Award, label: 'شهاداتي', href: '#' },
  { icon: FileText, label: 'الاختبارات', href: '#' },
  { icon: Bell, label: 'الإشعارات', href: '#', badge: 3 },
  { icon: Settings, label: 'الإعدادات', href: '#' },
]

const stats = [
  { label: 'دورات مسجلة', value: '12', icon: BookOpen, color: 'text-primary-400', bg: 'bg-primary-500/10' },
  { label: 'دورات مكتملة', value: '8', icon: CheckCircle, color: 'text-green-400', bg: 'bg-green-500/10' },
  { label: 'شهادات', value: '5', icon: Award, color: 'text-accent-gold', bg: 'bg-accent-gold/10' },
  { label: 'ساعات تعلم', value: '156', icon: Clock, color: 'text-accent-rose', bg: 'bg-accent-rose/10' },
]

const courses = [
  { title: 'التصوير الفوتوغرافي الاحترافي', progress: 75, instructor: 'أحمد العلي', image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=200&q=80', lastAccessed: 'منذ 2 ساعة' },
  { title: 'المونتاج بـ Premiere Pro', progress: 45, instructor: 'نورة الفهد', image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=200&q=80', lastAccessed: 'منذ يوم' },
  { title: 'صناعة المحتوى الرقمي', progress: 90, instructor: 'محمد العبدالله', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=200&q=80', lastAccessed: 'منذ 3 أيام' },
]

const certificates = [
  { title: 'شهادة التصوير الفوتوغرافي', date: '15 يونيو 2026', id: 'CA-PH-2026-001' },
  { title: 'شهادة المونتاج الأساسي', date: '10 مايو 2026', id: 'CA-ED-2026-003' },
  { title: 'شهادة صناعة المحتوى', date: '1 أبريل 2026', id: 'CA-CT-2026-005' },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen pt-20 bg-[#0a0a0f] flex">
      {/* Sidebar */}
      <aside className="w-64 fixed right-0 top-0 bottom-0 z-40 hidden lg:flex flex-col border-l border-white/5 bg-[#0f0f1a] pt-20">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-white font-bold font-arabic">محمد أحمد</div>
              <div className="text-gray-400 text-sm font-arabic">طالب مميز</div>
            </div>
          </div>

          <nav className="space-y-2">
            {sidebarLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-arabic ${
                  link.active
                    ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span className="flex-1">{link.label}</span>
                {link.badge && (
                  <span className="w-5 h-5 rounded-full bg-accent-rose text-white text-xs flex items-center justify-center">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-6">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors font-arabic w-full">
            <LogOut className="w-5 h-5" />
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:mr-64 p-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold text-white font-arabic mb-2">مرحباً، محمد!</h1>
            <p className="text-gray-400 font-arabic">إليك ملخص تقدمك في رحلتك التعليمية</p>
          </motion.div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-white mb-1 font-arabic">{stat.value}</div>
                <div className="text-gray-400 text-sm font-arabic">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Active Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold font-arabic text-lg">دوراتي النشطة</h2>
                <Link href="#" className="text-primary-400 text-sm font-arabic hover:text-primary-300">عرض الكل</Link>
              </div>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.title} className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div
                      className="w-16 h-16 rounded-xl bg-cover bg-center shrink-0"
                      style={{ backgroundImage: `url('${course.image}')` }}
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-medium font-arabic truncate">{course.title}</h3>
                      <p className="text-gray-400 text-sm font-arabic">{course.instructor}</p>
                      <div className="mt-2">
                        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary-500 to-accent-violet rounded-full transition-all"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-xs text-gray-400 font-arabic">{course.progress}%</span>
                          <span className="text-xs text-gray-400 font-arabic">{course.lastAccessed}</span>
                        </div>
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0 hover:bg-primary-500/20 transition-colors">
                      <PlayCircle className="w-5 h-5 text-primary-400" />
                    </button>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certificates & Notifications */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white font-bold font-arabic text-lg">شهاداتي</h2>
                  <Link href="#" className="text-primary-400 text-sm font-arabic hover:text-primary-300">عرض الكل</Link>
                </div>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div key={cert.id} className="flex items-center gap-3 p-3 rounded-xl bg-white/5">
                      <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5 text-accent-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-white font-medium text-sm font-arabic truncate">{cert.title}</h3>
                        <p className="text-gray-400 text-xs font-arabic">{cert.date}</p>
                      </div>
                      <button className="text-xs text-primary-400 hover:text-primary-300 font-arabic">تحميل</button>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-white font-bold font-arabic text-lg">آخر الإشعارات</h2>
                  <Link href="#" className="text-primary-400 text-sm font-arabic hover:text-primary-300">عرض الكل</Link>
                </div>
                <div className="space-y-3">
                  {[
                    { text: 'تم إضافة درس جديد في دورة التصوير', time: 'منذ ساعة', icon: PlayCircle, color: 'text-primary-400' },
                    { text: 'تهانينا! حصلت على شهادة جديدة', time: 'منذ يوم', icon: Award, color: 'text-accent-gold' },
                    { text: 'تذكير: امتحان دورة المونتاج غداً', time: 'منذ يومين', icon: Star, color: 'text-accent-rose' },
                  ].map((notif, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${notif.color} bg-white/5`}>
                        <notif.icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm font-arabic">{notif.text}</p>
                        <p className="text-gray-400 text-xs font-arabic">{notif.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
