import { NextRequest, NextResponse } from 'next/server'

const courses = [
  { id: 1, title: 'أساسيات التصوير الفوتوغرافي', category: 'photography', level: 'مبتدئ', price: 299, rating: 4.9, students: 2340 },
  { id: 2, title: 'تصوير الفيديو الاحترافي', category: 'video', level: 'متوسط', price: 499, rating: 4.8, students: 1890 },
  { id: 3, title: 'صناعة المحتوى الرقمي', category: 'content', level: 'مبتدئ', price: 399, rating: 4.7, students: 3450 },
  { id: 4, title: 'المونتاج بـ Premiere Pro', category: 'editing', level: 'متوسط', price: 599, rating: 4.9, students: 1560 },
  { id: 5, title: 'التصوير التجاري للمنتجات', category: 'commercial', level: 'احترافي', price: 799, rating: 4.8, students: 890 },
  { id: 6, title: 'السينما الرقمية', category: 'cinematic', level: 'احترافي', price: 999, rating: 5.0, students: 670 },
  { id: 7, title: 'إدارة حسابات السوشيال ميديا', category: 'social', level: 'مبتدئ', price: 249, rating: 4.6, students: 4200 },
  { id: 8, title: 'تصوير البورتريت الاحترافي', category: 'photography', level: 'متوسط', price: 449, rating: 4.9, students: 1980 },
]

export async function GET() {
  return NextResponse.json({ courses })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    // In production, validate with Prisma
    return NextResponse.json({ success: true, message: 'Course created' }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
  }
}
