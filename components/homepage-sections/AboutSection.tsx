import { Button } from '@/components/ui/button';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className="flex h-full w-full items-center justify-center overflow-hidden p-4 md:p-8">
      <div className="flex min-h-[453px] max-w-[1420px] flex-col items-center rounded-xl bg-white p-8 px-4 drop-shadow md:flex-row md:justify-between md:pl-12 md:pr-12">
        <div className="mb-4 w-full max-w-xl md:mb-0 md:w-[40%]">
          <h2 className="text-[20px] font-bold leading-[190%] text-heading md:text-[32px]">
            Explore Our Growing Database Of 1000+ Companies In The iGaming Space
          </h2>
        </div>
        <div className="mx-4 hidden h-[315px] border-l border-[#E7E1EA;] md:block" />
        <div className="w-full md:w-2/3 md:pl-10">
          <p className="text-sm md:text-base">
            AskIGaming, a hub for iGaming enthusiasts, leverages over a decade of industry
            experience to offer a unique platform where users contribute reviews and insights. By
            empowering our community to share their experiences with various iGaming companies, we
            provide a rich, diverse perspective on the industry. Our commitment to fostering an
            informed user base is at the heart of our service, ensuring authenticity and depth in
            every review. Join the AskIGaming community to explore and contribute to the
            ever-evolving world of iGaming.
          </p>
          <div className="flex w-full">
            <Link href="/companies" className="mx-auto mt-10 w-full sm:w-[187px] lg:mx-0">
              <Button className="mx-auto w-full sm:w-[187px] lg:mx-0">View all companies</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
