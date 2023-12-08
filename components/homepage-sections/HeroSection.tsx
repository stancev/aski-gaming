import HomeSearch from '@/components/HomeSearch';

const HeroSection = () => {
  return (
    <section
      className="w-full h-full flex justify-center items-center overflow-hidden"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='1920' height='393' viewBox='0 0 1920 393' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_625_23475)'%3E%3Crect width='1920' height='393' fill='url(%23paint0_linear_625_23475)'/%3E%3Cpath d='M0 327.784C0 327.784 48.5 366.556 191 366.556C386.305 366.556 570 265.033 992.5 288.488C1415 311.942 1594.5 208.673 1733 192.78C1871.5 176.887 1921 205.529 1921 205.529V-54H0V327.784Z' fill='white' fill-opacity='0.05'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_625_23475' x1='654.5' y1='195.968' x2='1637.98' y2='351.465' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23006571'/%3E%3Cstop offset='1' stop-color='%23013038'/%3E%3C/linearGradient%3E%3CclipPath id='clip0_625_23475'%3E%3Crect width='1920' height='393' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A")`,
        backgroundSize: 'cover'
      }}
    >
      <div className="w-full xl:max-w-[1440px] flex flex-col xl:flex-row">
        <div className="flex flex-1 flex-col justify-center items-center xl:items-start text-center xl:text-left px-4 pt-11 lg:pt-14">
          <h1 className="font-semibold text-white text-[24px] md:text-[28px] lg:text-[46px] leading-normal md:leading-[57px] xl:leading-[77.8px]">
            Browse, Connect, Review
          </h1>
          <p className="font-medium text-white text-[14px] lg:text-[20px] xl:text-[24px] leading-normal xl:leading-[30.1px] mt-3 mb-3">
            Make an informed decision based on real opinions
          </p>

          <div className="mt-4 xl:mt-6 w-full xl:w-[636px]">
            <HomeSearch searchActive={true} />
          </div>
        </div>
        <div className="flex-1 xl:w-auto xl:flex xl:items-center xl:justify-center">
          <picture className="w-full flex justify-center">
            <source srcSet="/askigaming-hero-section-mob.webp" media="(max-width: 1279px)" />
            <img
              src="/askigaming-hero-section.webp"
              alt="Hero Section"
              className="xl:w-auto xl:h-full"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
