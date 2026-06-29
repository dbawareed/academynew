# أكاديمية الإبداع - منصة التصوير وصناعة المحتوى

منصة تعليمية احترافية متخصصة في التصوير الفوتوغرافي وصناعة المحتوى الرقمي. بُنيت بأحدث التقنيات لتقدم تجربة مستخدم استثنائية.

## 🚀 المميزات

- ✅ تصميم عصري وفاخر (Modern Luxury Design)
- ✅ Glassmorphism + Neumorphism
- ✅ دعم Dark Mode / Light Mode
- ✅ تصميم Responsive بالكامل
- ✅ أداء عالي وسرعة تحميل ممتازة
- ✅ أنيميشن احترافية بـ Framer Motion + GSAP
- ✅ صفحة رئيسية تفاعلية مع Hero Section و Background Video
- ✅ نظام دورات متكامل مع فلترة وبحث
- ✅ معرض أعمال Masonry Gallery مع Lightbox
- ✅ ملفات تعريف المدربين الاحترافية
- ✅ نظام شهادات تفاعلية
- ✅ آراء الطلاب Slider تفاعلي
- ✅ مدونة مقالات احترافية
- ✅ أسئلة شائعة Accordion تفاعلي
- ✅ نموذج اتصال متقدم
- ✅ لوحة طالب متكاملة (تسجيل، متابعة، شهادات)
- ✅ لوحة إدارة كاملة (إدارة الدورات، الطلاب، المدربين، الإحصائيات)
- ✅ Custom Cursor Effects
- ✅ Loading Screen احترافية
- ✅ Scroll Progress + Parallax Effects

## 🛠️ التقنيات المستخدمة

### Frontend
- Next.js 15 + App Router
- TypeScript
- Tailwind CSS
- Framer Motion (Animations)
- GSAP (Scroll Animations)
- Three.js (3D Effects)
- next-themes (Dark Mode)
- Lucide React (Icons)

### Backend
- Node.js + Express.js
- Next.js API Routes
- JWT Authentication
- bcryptjs (Password hashing)
- Joi (Validation)

### Database
- PostgreSQL (Prisma ORM)

## 📁 هيكل المشروع

```
photo-academy-app/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes (Auth, Courses, Contact, etc.)
│   ├── components/               # React Components
│   │   ├── animations/           # LoadingScreen, CustomCursor, ScrollProgress, etc.
│   │   ├── layout/             # Navbar, Footer
│   │   └── sections/           # HeroSection, CoursesSection, etc.
│   ├── login/                  # Login Page
│   ├── register/               # Register Page
│   ├── dashboard/              # Student Dashboard
│   ├── admin/                  # Admin Dashboard
│   ├── globals.css             # Global Styles + Animations
│   ├── layout.tsx              # Root Layout with Providers
│   └── page.tsx                # Home Page (All Sections)
├── lib/                          # Utilities & Helpers
├── prisma/                       # Prisma Schema
├── public/                       # Static Assets
├── server/                       # Express Server (Backend)
│   ├── middleware/             # Auth Middleware
│   └── routes/                   # Express Routes
├── .env.example                  # Environment Variables Template
├── next.config.js                # Next.js Configuration
├── tailwind.config.ts            # Tailwind CSS Configuration
└── tsconfig.json                 # TypeScript Configuration
```

## 🚀 البدء

### 1. تثبيت التبعيات
```bash
npm install
```

### 2. إعداد متغيرات البيئة
```bash
cp .env.example .env
```

قم بتعديل ملف `.env` ببياناتك:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/photo_academy?schema=public"
JWT_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 3. إعداد قاعدة البيانات
```bash
npx prisma generate
npx prisma migrate dev
```

### 4. تشغيل التطبيق
```bash
# تشغيل Next.js (Frontend + API Routes)
npm run dev

# تشغيل Express Server (Backend)
node server/index.ts
```

## 📱 الصفحات المتاحة

| المسار | الوصف |
|--------|-------|
| `/` | الصفحة الرئيسية |
| `/login` | تسجيل الدخول |
| `/register` | إنشاء حساب جديد |
| `/dashboard` | لوحة الطالب |
| `/admin` | لوحة الإدارة |
| `/api/auth` | مصادقة API |
| `/api/courses` | الدورات API |
| `/api/contact` | التواصل API |

## 🎨 نظام الألوان

- **Primary**: Sky Blue (#0ea5e9)
- **Accent Gold**: #d4af37
- **Accent Rose**: #f43f5e
- **Accent Emerald**: #10b981
- **Accent Violet**: #8b5cf6
- **Dark Background**: #0a0a0f
- **Light Background**: #fafafa

## 📄 الترخيص

جميع الحقوق محفوظة © 2026 أكاديمية الإبداع.
