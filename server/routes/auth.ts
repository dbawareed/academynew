import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key'

// Mock database - replace with Prisma in production
const users: any[] = []

router.post('/register', async (req, res) => {
  try {
    const { email, password, name, phone } = req.body

    const existingUser = users.find((u) => u.email === email)
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' })
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
    res.status(201).json({ token, user: { id: user.id, email, name, role: user.role } })
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' })
  }
})

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = users.find((u) => u.email === email)
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' })
    res.json({ token, user: { id: user.id, email, name: user.name, role: user.role } })
  } catch (error) {
    res.status(500).json({ error: 'Login failed' })
  }
})

router.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]
    if (!token) {
      return res.status(401).json({ error: 'No token provided' })
    }

    const decoded = jwt.verify(token, JWT_SECRET) as any
    const user = users.find((u) => u.id === decoded.userId)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json({ user: { id: user.id, email: user.email, name: user.name, role: user.role } })
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
})

export default router
