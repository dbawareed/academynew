import express from 'express'

const router = express.Router()

const courses = [
  { id: 1, title: 'أساسيات التصوير الفوتوغرافي', category: 'photography', level: 'مبتدئ', price: 299, rating: 4.9, students: 2340, instructor: 'أحمد العلي' },
  { id: 2, title: 'تصوير الفيديو الاحترافي', category: 'video', level: 'متوسط', price: 499, rating: 4.8, students: 1890, instructor: 'سارة خالد' },
  { id: 3, title: 'صناعة المحتوى الرقمي', category: 'content', level: 'مبتدئ', price: 399, rating: 4.7, students: 3450, instructor: 'محمد العبدالله' },
  { id: 4, title: 'المونتاج بـ Premiere Pro', category: 'editing', level: 'متوسط', price: 599, rating: 4.9, students: 1560, instructor: 'نورة الفهد' },
  { id: 5, title: 'التصوير التجاري للمنتجات', category: 'commercial', level: 'احترافي', price: 799, rating: 4.8, students: 890, instructor: 'خالد السالم' },
  { id: 6, title: 'السينما الرقمية', category: 'cinematic', level: 'احترافي', price: 999, rating: 5.0, students: 670, instructor: 'عبدالرحمن الغامدي' },
  { id: 7, title: 'إدارة حسابات السوشيال ميديا', category: 'social', level: 'مبتدئ', price: 249, rating: 4.6, students: 4200, instructor: 'فاطمة الزهراني' },
  { id: 8, title: 'تصوير البورتريت الاحترافي', category: 'photography', level: 'متوسط', price: 449, rating: 4.9, students: 1980, instructor: 'أحمد العلي' },
]

router.get('/', (req, res) => {
  res.json({ courses })
})

router.get('/:id', (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id))
  if (!course) {
    return res.status(404).json({ error: 'Course not found' })
  }
  res.json({ course })
})

router.post('/', (req, res) => {
  // In production, validate and save with Prisma
  res.status(201).json({ success: true, message: 'Course created' })
})

router.put('/:id', (req, res) => {
  // In production, update with Prisma
  res.json({ success: true, message: 'Course updated' })
})

router.delete('/:id', (req, res) => {
  // In production, delete with Prisma
  res.json({ success: true, message: 'Course deleted' })
})

export default router
