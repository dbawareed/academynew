'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Camera, Eye, EyeOff, UserPlus, Mail, Lock, User, Phone } from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    agreeTerms: false,
  })

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#12121a] to-[#0a0a0f]" />
      
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-[10%] w-96 h-96 rounded-full bg-primary-500/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-[10%] w-96 h-96 rounded-full bg-accent-rose/5 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-lg mx-4"
      >
        <div className="glass-card rounded-3xl p-8 sm:p-10">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-rose to-accent-gold flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent-rose/30">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white font-arabic mb-2">إنشاء حساب جديد</h1>
            <p className="text-gray-400 text-sm font-arabic">ابدأ رحلتك التعليمية مع أكاديمية الإبداع</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-white text-sm font-medium mb-2 font-arabic">الاسم الكامل</label>
              <div className="relative">
                <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pr-12 pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                  placeholder="محمد أحمد"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-white text-sm font-medium mb-2 font-arabic">البريد الإلكتروني</label>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pr-12 pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white text-sm font-medium mb-2 font-arabic">رقم الجوال</label>
                <div className="relative">
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full pr-12 pl-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                    placeholder="+966 50 123 4567"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2 font-arabic">كلمة المرور</label>
              <div className="relative">
                <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pr-12 pl-12 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                  className="w-4 h-4 mt-1 rounded border-white/20 bg-white/5 text-primary-500 focus:ring-primary-500"
                />
                <span className="text-sm text-gray-400 font-arabic">
                  أوافق على{' '}
                  <Link href="#" className="text-primary-400 hover:text-primary-300">شروط الاستخدام</Link>
                  {' '}و{' '}
                  <Link href="#" className="text-primary-400 hover:text-primary-300">سياسة الخصوصية</Link>
                </span>
              </label>
            </div>

            <button type="submit" className="w-full btn-primary font-arabic flex items-center justify-center gap-2">
              <UserPlus className="w-5 h-5" />
              إنشاء الحساب
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm font-arabic">
              لديك حساب بالفعل؟{' '}
              <Link href="/login" className="text-primary-400 hover:text-primary-300 font-medium">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
