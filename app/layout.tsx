import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { LoadingScreen } from './components/animations/LoadingScreen'
import { CustomCursor } from './components/animations/CustomCursor'
import { ScrollProgress } from './components/animations/ScrollProgress'
import { BackToTop } from './components/animations/BackToTop'

export const metadata: Metadata = {
  title: 'أكاديمية الإبداع - التصوير الفوتوغرافي وصناعة المحتوى',
  description: 'أكاديمية متخصصة في التصوير الفوتوغرافي وصناعة المحتوى الرقمي. حوّل شغفك إلى مهنة احترافية مع أفضل المدربين والدورات التدريبية.',
  keywords: 'تصوير فوتوغرافي, صناعة محتوى, أكاديمية, دورات تدريبية, مونتاج, تصوير فيديو, سوشيال ميديا',
  authors: [{ name: 'أكاديمية الإبداع' }],
  openGraph: {
    title: 'أكاديمية الإبداع - التصوير الفوتوغرافي وصناعة المحتوى',
    description: 'أكاديمية متخصصة في التصوير الفوتوغرافي وصناعة المحتوى الرقمي',
    type: 'website',
    locale: 'ar_SA',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <LoadingScreen />
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
