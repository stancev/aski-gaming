import AboutSection from '@/components/homepage-sections/AboutSection';
import HeroSection from '@/components/homepage-sections/HeroSection';
import CounterSection from '@/components/homepage-sections/CounterSection';
import MapSection from '@/components/homepage-sections/MapSection';
export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CounterSection />
      <MapSection />
    </main>
  );
}
