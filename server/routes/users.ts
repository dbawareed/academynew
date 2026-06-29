import express from 'express'

const router = express.Router()

const users = [
  { id: '1', name: 'محمد أحمد', email: 'mohammed@email.com', role: 'STUDENT', avatar: '', status: 'active' },
  { id: '2', name: 'سارة خالد', email: 'sara@email.com', role: 'STUDENT', avatar: '', status: 'active' },
  { id: '3', name: 'فاطمة علي', email: 'fatima@email.com', role: 'STUDENT', avatar: '', status: 'completed' },
  { id: '4', name: 'عبدالله سالم', email: 'abdullah@email.com', role: 'STUDENT', avatar: '', status: 'active' },
  { id: '5', name: 'نورة أحمد', email: 'noura@email.com', role: 'STUDENT', avatar: '', status: 'new' },
]

router.get('/', (req, res) => {
  res.json({ users })
})

router.get('/:id', (req, res) => {
  const user = users.find((u) => u.id === req.params.id)
  if (!user) {
    return res.status(404).json({ error: 'User not found' })
  }
  res.json({ user })
})

router.put('/:id', (req, res) => {
  // In production, update with Prisma
  res.json({ success: true, message: 'User updated' })
})

router.delete('/:id', (req, res) => {
  // In production, delete with Prisma
  res.json({ success: true, message: 'User deleted' })
})

export default router
