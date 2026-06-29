'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LayoutDashboard,
  BookOpen,
  Users,
  Award,
  FileText,
  BarChart3,
  Settings,
  LogOut,
  TrendingUp,
  TrendingDown,
  UserPlus,
  Eye,
  Clock,
  ChevronLeft,
  CheckCircle,
  XCircle,
  Search,
  Filter,
} from 'lucide-react'

const sidebarLinks = [
  { icon: LayoutDashboard, label: 'الإحصائيات', href: '/admin', active: true },
  { icon: BookOpen, label: 'الدورات', href: '#' },
  { icon: Users, label: 'الطلاب', href: '#' },
  { icon: Award, label: 'المدربون', href: '#' },
  { icon: FileText, label: 'المقالات', href: '#' },
  { icon: Settings, label: 'الإعدادات', href: '#' },
]

const stats = [
  { label: 'إجمالي الطلاب', value: '10,482', change: '+12%', up: true, icon: Users, color: 'bg-blue-500/10 text-blue-400' },
  { label: 'الدورات النشطة', value: '248', change: '+5%', up: true, icon: BookOpen, color: 'bg-green-500/10 text-green-400' },
  { label: 'إيرادات الشهر', value: '184,500 ر.س', change: '-2%', up: false, icon: BarChart3, color: 'bg-yellow-500/10 text-yellow-400' },
  { label: 'معدل الإنجاز', value: '78%', change: '+8%', up: true, icon: CheckCircle, color: 'bg-purple-500/10 text-purple-400' },
]

const recentStudents = [
  { name: 'محمد أحمد', email: 'mohammed@email.com', course: 'التصوير الفوتوغرافي', progress: 75, status: 'active', date: '2026-06-23' },
  { name: 'سارة خالد', email: 'sara@email.com', course: 'المونتاج الاحترافي', progress: 45, status: 'active', date: '2026-06-22' },
  { name: 'فاطمة علي', email: 'fatima@email.com', course: 'صناعة المحتوى', progress: 90, status: 'completed', date: '2026-06-21' },
  { name: 'عبدالله سالم', email: 'abdullah@email.com', course: 'التصوير التجاري', progress: 20, status: 'active', date: '2026-06-20' },
  { name: 'نورة أحمد', email: 'noura@email.com', course: 'التصوير السينمائي', progress: 0, status: 'new', date: '2026-06-19' },
]

const recentCourses = [
  { title: 'أساسيات التصوير الفوتوغرافي', instructor: 'أحمد العلي', students: 2340, rating: 4.9, revenue: '701,000 ر.س' },
  { title: 'المونتاج بـ Premiere Pro', instructor: 'نورة الفهد', students: 1560, rating: 4.8, revenue: '936,000 ر.س' },
  { title: 'صناعة المحتوى الرقمي', instructor: 'محمد العبدالله', students: 3450, rating: 4.7, revenue: '1,378,000 ر.س' },
  { title: 'التصوير التجاري', instructor: 'خالد السالم', students: 890, rating: 4.8, revenue: '712,000 ر.س' },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('students')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen pt-20 bg-[#0a0a0f] flex">
      {/* Sidebar */}
      <aside className="w-64 fixed right-0 top-0 bottom-0 z-40 hidden lg:flex flex-col border-l border-white/5 bg-[#0f0f1a] pt-20">
        <div className="p-6">
          <div className="mb-8">
            <div className="text-white font-bold text-lg font-arabic">لوحة الإدارة</div>
            <div className="text-gray-400 text-sm font-arabic">إدارة النظام</div>
          </div>

          <nav className="space-y-2">
            {sidebarLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors font-arabic ${
                  link.active
                    ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
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
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl font-bold text-white font-arabic mb-2">نظرة عامة</h1>
            <p className="text-gray-400 font-arabic">إحصائيات وتحليلات الأكاديمية</p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className={`flex items-center gap-1 text-sm ${stat.up ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.up ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className="text-2xl font-bold text-white mb-1 font-arabic">{stat.value}</div>
                <div className="text-gray-400 text-sm font-arabic">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-6">
            {[
              { id: 'students', label: 'الطلاب', icon: Users },
              { id: 'courses', label: 'الدورات', icon: BookOpen },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-arabic transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Table */}
            <div className="lg:col-span-2 glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white font-bold font-arabic text-lg">
                  {activeTab === 'students' ? 'آخر الطلاب' : 'الدورات الأكثر مبيعاً'}
                </h2>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                      type="text"
                      placeholder="بحث..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pr-10 pl-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-primary-500 font-arabic"
                    />
                  </div>
                  <button className="p-2 rounded-xl bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    <Filter className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      {activeTab === 'students' ? (
                        <>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">الطالب</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">الدورة</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">التقدم</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">الحالة</th>
                        </>
                      ) : (
                        <>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">الدورة</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">المدرب</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">الطلاب</th>
                          <th className="text-right py-3 px-4 text-gray-400 font-medium text-sm font-arabic">الإيرادات</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody>
                    {activeTab === 'students' ? recentStudents.map((student, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-violet" />
                            <div>
                              <div className="text-white text-sm font-arabic">{student.name}</div>
                              <div className="text-gray-400 text-xs">{student.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-300 text-sm font-arabic">{student.course}</td>
                        <td className="py-4 px-4">
                          <div className="w-24">
                            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-gradient-to-r from-primary-500 to-accent-violet rounded-full transition-all"
                                style={{ width: `${student.progress}%` }}
                              />
                            </div>
                            <span className="text-gray-400 text-xs mt-1 block">{student.progress}%</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`px-3 py-1 rounded-lg text-xs font-medium font-arabic ${
                            student.status === 'active' ? 'bg-green-500/10 text-green-400' :
                            student.status === 'completed' ? 'bg-blue-500/10 text-blue-400' :
                            'bg-yellow-500/10 text-yellow-400'
                          }`}>
                            {student.status === 'active' ? 'نشط' : student.status === 'completed' ? 'مكتمل' : 'جديد'}
                          </span>
                        </td>
                      </tr>
                    )) : recentCourses.map((course, index) => (
                      <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                        <td className="py-4 px-4">
                          <div className="text-white text-sm font-arabic">{course.title}</div>
                          <div className="flex items-center gap-1 text-yellow-400 text-xs">
                            <span>★</span>
                            <span>{course.rating}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-gray-300 text-sm font-arabic">{course.instructor}</td>
                        <td className="py-4 px-4 text-gray-300 text-sm font-arabic">{course.students.toLocaleString()}</td>
                        <td className="py-4 px-4 text-green-400 text-sm font-arabic">{course.revenue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Side Stats */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-white font-bold font-arabic mb-4">النشاط الأخير</h3>
                <div className="space-y-4">
                  {[
                    { text: 'تسجيل طالب جديد في دورة التصوير', time: 'منذ 5 دقائق', icon: UserPlus, color: 'text-green-400' },
                    { text: 'إكمال دورة المونتاج', time: 'منذ 30 دقيقة', icon: CheckCircle, color: 'text-blue-400' },
                    { text: 'زيارة جديدة للموقع', time: 'منذ ساعة', icon: Eye, color: 'text-purple-400' },
                    { text: 'شراء دورة جديدة', time: 'منذ 2 ساعة', icon: Clock, color: 'text-yellow-400' },
                  ].map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 ${activity.color}`}>
                        <activity.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-arabic">{activity.text}</p>
                        <p className="text-gray-400 text-xs font-arabic">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="text-white font-bold font-arabic mb-4">معدل الرضا</h3>
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8" />
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#0ea5e9" strokeWidth="8" strokeDasharray="283" strokeDashoffset="28.3" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-white font-arabic">90%</div>
                      <div className="text-gray-400 text-xs font-arabic">رضا</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
