import AboutSection from '@/components/homepage-sections/AboutSection';
import HeroSection from '@/components/homepage-sections/HeroSection';
import CounterSection from '@/components/homepage-sections/CounterSection';
import MapSection from '@/components/homepage-sections/MapSection';
import CompaniesSection from '@/components/homepage-sections/CompaniesSection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <CompaniesSection />
      <AboutSection />
      <CounterSection />
      <MapSection />
    </main>
  );
}
