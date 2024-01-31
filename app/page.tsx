import AboutSection from '@/components/homepage-sections/AboutSection';
import HeroSection from '@/components/homepage-sections/HeroSection';
import CompaniesSection from '@/components/homepage-sections/CompaniesSection';
import ReviewsSection from '@/components/homepage-sections/ReviewsSection';
import CounterSection from '@/components/homepage-sections/CounterSection';
import MapSection from '@/components/homepage-sections/MapSection';

export default function Home() {
  return (
    <main>
      <HeroSection searchParams={{}} />
      <CompaniesSection />
      <ReviewsSection />
      <AboutSection />
      <CounterSection />
      <MapSection />
    </main>
  );
}
