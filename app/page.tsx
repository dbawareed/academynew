import { HeroSection } from './components/sections/HeroSection'
import { AboutSection } from './components/sections/AboutSection'
import { CoursesSection } from './components/sections/CoursesSection'
import { InstructorsSection } from './components/sections/InstructorsSection'
import { PortfolioSection } from './components/sections/PortfolioSection'
import { StudentsSection } from './components/sections/StudentsSection'
import { CertificatesSection } from './components/sections/CertificatesSection'
import { TestimonialsSection } from './components/sections/TestimonialsSection'
import { BlogSection } from './components/sections/BlogSection'
import { FAQSection } from './components/sections/FAQSection'
import { ContactSection } from './components/sections/ContactSection'

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]" />
        <div className="relative z-10">
          <AboutSection />
          <CoursesSection />
          <InstructorsSection />
          <PortfolioSection />
          <StudentsSection />
          <CertificatesSection />
          <TestimonialsSection />
          <BlogSection />
          <FAQSection />
          <ContactSection />
        </div>
      </div>
    </div>
  )
}
