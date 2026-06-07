import Header from '@/components/header'
import Footer from '@/components/footer'
import HeroSection from '@/components/home/hero-section'
import DisciplinesSection from '@/components/home/disciplines-section'
import TechniquesPreview from '@/components/home/techniques-preview'
import HistoryPreview from '@/components/home/history-preview'
import SafetySection from '@/components/home/safety-section'
import EquipmentSection from '@/components/home/equipment-section'
import FitnessSection from '@/components/home/fitness-section'
import FactsSection from '@/components/home/facts-section'
import BeginnerSection from '@/components/home/beginner-section'
import UrbanSection from '@/components/home/urban-section'
import BlogPreviewSection from '@/components/home/blog-preview-section'

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <DisciplinesSection />
      <TechniquesPreview />
      <HistoryPreview />
      <SafetySection />
      <EquipmentSection />
      <FitnessSection />
      <FactsSection />
      <BeginnerSection />
      <UrbanSection />
      <BlogPreviewSection />
      <Footer />
    </main>
  )
}
