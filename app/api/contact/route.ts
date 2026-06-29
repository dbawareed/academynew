import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // In production, save to Prisma/PostgreSQL
    // await prisma.contact.create({ data: { name, email, phone, subject, message } })

    // Send notification or email here

    return NextResponse.json({ success: true, message: 'Contact form submitted successfully' })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 })
  }
}
