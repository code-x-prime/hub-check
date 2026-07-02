import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Industries from '@/components/Industries'
import Commodities from '@/components/Commodities'
import WhyChooseUs from '@/components/WhyChooseUs'
import Process from '@/components/Process'
import FAQ from '@/components/FAQ'
import CTABanner from '@/components/CTABanner'


export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <About />
      <Services />
      <Industries />
      <Commodities />
      <WhyChooseUs />
      <Process />
      <CTABanner />
      <FAQ />

    </main>
  )
}
