'use client'

import { useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'هل الدورات متاحة للمبتدئين أم فقط للمحترفين؟',
    answer: 'دوراتنا مصممة لتناسب جميع المستويات. نقدم دورات مخصصة للمبتدئين تبدأ من الأساسيات، ودورات متقدمة للمحترفين. يمكنك اختيار المستوى المناسب لك عند التسجيل.',
  },
  {
    question: 'هل يمكنني الوصول للدورات مدى الحياة؟',
    answer: 'نعم! بمجرد تسجيلك في أي دورة، تحصل على وصول كامل ومدى الحياة لجميع المواد التعليمية والتحديثات المستقبلية للدورة.',
  },
  {
    question: 'هل هناك شهادات معتمدة بعد إنهاء الدورات؟',
    answer: 'بالتأكيد. نقدم شهادات إلكترونية معتمدة من الأكاديمية لكل دورة تكملها. الشهادات قابلة للتحقق والمشاركة على منصات التواصل المهنية.',
  },
  {
    question: 'كيف يمكنني التواصل مع المدربين؟',
    answer: 'نوفر عدة قنوات للتواصل: جلسات أسئلة وأجوبة أسبوعية، منتدى خاص للطلاب، وإمكانية التواصل المباشر مع المدربين عبر المنصة.',
  },
  {
    question: 'هل هناك ضمان استرداد الأموال؟',
    answer: 'نعم، نقدم ضمان استرداد أموال كامل خلال 7 أيام من تاريخ التسجيل إذا لم تكن راضياً عن المحتوى التعليمي.',
  },
  {
    question: 'هل يمكنني الدفع بالتقسيط؟',
    answer: 'نعم نوفر خيارات دفع مرنة تشمل الدفع بالتقسيط عبر عدة شركاء معتمدين. يمكنك الاختيار ما بين الدفع الشهري أو ربع السنوي.',
  },
  {
    question: 'هل المحتوى متاح على الجوال؟',
    answer: 'بالتأكيد! المنصة متوافقة مع جميع الأجهزة. يمكنك متابعة الدورات من هاتفك الذكي أو الجهاز اللوحي بسهولة.',
  },
  {
    question: 'هل تقدمون فرص عمل للمتفوقين؟',
    answer: 'نعم، نتعاون مع شركات ووكالات إعلانية كبرى لتوفير فرص عمل و internships لأفضل طلابنا المتفوقين.',
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-primary-400 text-sm font-medium font-arabic mb-6">
            <HelpCircle className="w-4 h-4" />
            الأسئلة الشائعة
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-arabic">
            <span className="text-white">كل ما</span>{' '}
            <span className="text-gradient">تريد معرفته</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-arabic">
            إجابات على أكثر الأسئلة شيوعاً من طلابنا
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.05 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-right transition-colors hover:bg-white/5"
              >
                <span className="text-white font-medium font-arabic text-lg">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-primary-400" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 border-t border-white/5 pt-4">
                      <p className="text-gray-400 leading-relaxed font-arabic">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4 font-arabic">لم تجد إجابة لسؤالك؟</p>
          <button className="btn-primary font-arabic inline-flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            تواصل مع فريق الدعم
          </button>
        </motion.div>
      </div>
    </section>
  )
}
