'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'أحمد المالكي',
    role: 'مصور فوتوغرافي',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'أكاديمية الإبداع غيرت حياتي المهنية بالكامل. الدورات عملية ومباشرة، والمدربين يقدمون دعماً فعلياً. من خلال الدورات التي أخذتها، تمكنت من فتح استوديو خاص بي وتحقيق دخل ممتاز.',
  },
  {
    id: 2,
    name: 'فاطمة العنزي',
    role: 'صانعة محتوى',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'المنصة ممتازة للمبتدئين والمحترفين على حد سواء. المحتوى منظم وواضح، والمشاريع العملية تساعدك على بناء محفظة أعمال قوية. أنصح بها بشدة!',
  },
  {
    id: 3,
    name: 'سعد القحطاني',
    role: 'مونتاج فيديو',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'أفضل استثمار قمت به في حياتي. التعليم العملي والمدربون المحترفون جعلوني أتقن المونتاج في وقت قياسي. الآن أعمل مع أكبر الشركات في المملكة.',
  },
  {
    id: 4,
    name: 'نورة الشمري',
    role: 'مديرة سوشيال ميديا',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    text: 'المحتوى متجدد وعصري. ما يميز الأكاديمية هو الاهتمام بالتفاصيل والمتابعة المستمرة للطلاب. تعلمت استراتيجيات عملية أطبقها يومياً في عملي.',
  },
  {
    id: 5,
    name: 'خالد الدوسري',
    role: 'مصور تجاري',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 4,
    text: 'الدورات التجارية كانت نقلة نوعية في مسيرتي. التعلم من خبراء مثل خالد السالم فتح لي أبواباً لم أكن أتخيلها. الآن أعمل مع علامات تجارية عالمية.',
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent((prev) => {
      if (newDirection === 1) return (prev + 1) % testimonials.length
      return (prev - 1 + testimonials.length) % testimonials.length
    })
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
  }

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <Star className="w-4 h-4" />
            آراء الطلاب
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">ما يقوله</span>{' '}
            <span className="text-gradient">طلابنا</span>{' '}
            <span className="text-white">عنا</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12 relative overflow-hidden min-h-[400px]">
            <Quote className="absolute top-8 right-8 w-24 h-24 text-primary-500/5" />
            
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div
                      className="w-24 h-24 rounded-full bg-cover bg-center border-4 border-primary-500/30 shadow-lg shadow-primary-500/20"
                      style={{ backgroundImage: `url('${testimonials[current].image}')` }}
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-2xl font-arabic">
                    "{testimonials[current].text}"
                  </p>

                  <div>
                    <h4 className="text-white font-bold text-lg font-arabic">{testimonials[current].name}</h4>
                    <p className="text-primary-400 text-sm font-arabic">{testimonials[current].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-primary-500/20 transition-colors interactive"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > current ? 1 : -1)
                      setCurrent(index)
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === current ? 'bg-primary-500 w-8' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-white hover:bg-primary-500/20 transition-colors interactive"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
