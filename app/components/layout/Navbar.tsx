'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import {
  Camera,
  Menu,
  X,
  Moon,
  Sun,
  GraduationCap,
  Users,
  ImageIcon,
  BookOpen,
  MessageSquare,
  Phone,
  Home,
  LogIn,
  UserPlus,
} from 'lucide-react'

const navLinks = [
  { href: '#hero', label: 'الرئيسية', icon: Home },
  { href: '#about', label: 'من نحن', icon: GraduationCap },
  { href: '#courses', label: 'الدورات', icon: BookOpen },
  { href: '#instructors', label: 'المدربون', icon: Users },
  { href: '#portfolio', label: 'معرض الأعمال', icon: ImageIcon },
  { href: '#testimonials', label: 'آراء الطلاب', icon: MessageSquare },
  { href: '#blog', label: 'المدونة', icon: BookOpen },
  { href: '#contact', label: 'تواصل معنا', icon: Phone },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group interactive">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl font-arabic bg-gradient-to-r from-primary-400 to-accent-gold bg-clip-text text-transparent">
              أكاديمية الإبداع
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-arabic interactive"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors interactive"
              aria-label="Toggle theme"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            <Link
              href="#login"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-white/5 font-arabic interactive"
            >
              <LogIn className="w-4 h-4" />
              تسجيل الدخول
            </Link>

            <Link
              href="#register"
              className="btn-primary text-sm font-arabic interactive"
            >
              <UserPlus className="w-4 h-4 inline-block ml-2" />
              انضم إلينا
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors interactive"
            >
              {mounted && theme === 'dark' ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors interactive"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass-nav border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/10 transition-colors text-gray-300 hover:text-white font-arabic"
                  >
                    <link.icon className="w-5 h-5 text-primary-400" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <Link
                  href="#login"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-primary-500/50 text-primary-400 hover:bg-primary-500/10 transition-colors font-arabic"
                >
                  <LogIn className="w-4 h-4" />
                  تسجيل الدخول
                </Link>
                <Link
                  href="#register"
                  className="btn-primary text-center font-arabic"
                >
                  <UserPlus className="w-4 h-4 inline-block ml-2" />
                  انضم إلينا
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
