'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Camera,
  Globe,
  MessageCircle,
  Video,
  Share2,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
} from 'lucide-react'

const footerLinks = {
  academy: [
    { label: 'من نحن', href: '#about' },
    { label: 'الدورات', href: '#courses' },
    { label: 'المدربون', href: '#instructors' },
    { label: 'معرض الأعمال', href: '#portfolio' },
  ],
  support: [
    { label: 'الأسئلة الشائعة', href: '#faq' },
    { label: 'تواصل معنا', href: '#contact' },
    { label: 'سياسة الخصوصية', href: '#' },
    { label: 'شروط الاستخدام', href: '#' },
  ],
  resources: [
    { label: 'المدونة', href: '#blog' },
    { label: 'نصائح التصوير', href: '#' },
    { label: 'أدوات مجانية', href: '#' },
    { label: 'دليل المبتدئين', href: '#' },
  ],
}

const socialLinks = [
  { icon: Globe, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
  { icon: MessageCircle, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
  { icon: Video, href: '#', label: 'YouTube', color: 'hover:text-red-500' },
  { icon: Share2, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
  { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-700' },
]

export function Footer() {
  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/5 pt-20 pb-8 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-xl font-arabic bg-gradient-to-r from-primary-400 to-accent-gold bg-clip-text text-transparent">
                أكاديمية الإبداع
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 font-arabic">
              نحن نحول الشغف إلى مهنة. انضم إلى أكبر مجتمع عربي للتصوير وصناعة المحتوى الرقمي.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold mb-6 font-arabic">الأكاديمية</h3>
            <ul className="space-y-3">
              {footerLinks.academy.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm font-arabic flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-arabic">الدعم</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary-400 transition-colors text-sm font-arabic flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 font-arabic">تواصل معنا</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm font-arabic">
                <MapPin className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                <span>الرياض، المملكة العربية السعودية<br />برج التقنية، الطابق 15</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-arabic">
                <Phone className="w-5 h-5 text-primary-400 shrink-0" />
                <span>+966 50 123 4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm font-arabic">
                <Mail className="w-5 h-5 text-primary-400 shrink-0" />
                <span>info@creativity-academy.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-2xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-arabic">
                اشترك في نشرتنا الإخبارية
              </h3>
              <p className="text-gray-400 text-sm font-arabic">
                احصل على أحدث الدورات والنصائح المجانية مباشرة إلى بريدك
              </p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 md:w-64 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors font-arabic"
              />
              <button className="btn-primary whitespace-nowrap font-arabic">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm font-arabic">
            © 2026 أكاديمية الإبداع. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-500 font-arabic">
            <Link href="#" className="hover:text-primary-400 transition-colors">سياسة الخصوصية</Link>
            <Link href="#" className="hover:text-primary-400 transition-colors">شروط الاستخدام</Link>
            <Link href="#" className="hover:text-primary-400 transition-colors">خريطة الموقع</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
