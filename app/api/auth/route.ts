import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Mock users database - replace with Prisma in production
const users: any[] = []

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, email, password, name, phone } = body

    if (action === 'register') {
      const existingUser = users.find((u) => u.email === email)
      if (existingUser) {
        return NextResponse.json({ error: 'Email already exists' }, { status: 400 })
      }

      const hashedPassword = await bcrypt.hash(password, 10)
      const user = {
        id: Date.now().toString(),
        email,
        password: hashedPassword,
        name,
        phone,
        role: 'STUDENT',
        createdAt: new Date(),
      }
      users.push(user)

      const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' })
      return NextResponse.json({ token, user: { id: user.id, email, name, role: user.role } }, { status: 201 })
    }

    if (action === 'login') {
      const user = users.find((u) => u.email === email)
      if (!user) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
      }

      const isValidPassword = await bcrypt.compare(password, user.password)
      if (!isValidPassword) {
        return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
      }

      const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' })
      return NextResponse.json({ token, user: { id: user.id, email, name: user.name, role: user.role } })
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
