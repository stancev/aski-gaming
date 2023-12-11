import { Button } from '@/components/ui/button';
import Link from 'next/link';
import CounterCard from '@/components/CounterCard';

const CounterSection = () => {
  return (
    <section
      className="flex h-full w-full items-center justify-center overflow-hidden lg:p-8"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D%221920%22%20height%3D%221003%22%20viewBox%3D%220%200%201920%201003%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M-1%20274.333C-1%20274.333%2047.5%20200.333%20190%20200.333C385.305%20200.333%20569%20394.098%20991.5%20349.333C1414%20304.568%201593.5%20501.667%201732%20532C1870.5%20562.333%201920%20507.667%201920%20507.667V1003H-1V274.333Z%22%20fill%3D%22%2380287B%22%20fill-opacity%3D%220.5%22%2F%3E%3Cpath%20d%3D%22M-1%20728.842C-1%20728.842%2047.5%20701%20190%20701C385.305%20701%20569%20773.903%20991.5%20757.061C1414%20740.218%201593.5%20814.375%201732%20825.788C1870.5%20837.201%201920%20816.633%201920%20816.633V1003H-1V728.842Z%22%20fill%3D%22%233C2863%22%2F%3E%3Cpath%20d%3D%22M1779%2091.8239C1779%2091.8239%201730.5%200%201588%200C1392.69%200%201209%20240.436%20786.5%20184.889C364%20129.342%20184.5%20373.914%2045.9999%20411.553C-92.5003%20449.193%20-142%20381.359%20-142%20381.359V996H1779V91.8239Z%22%20fill%3D%22%233C2863%22%20fill-opacity%3D%220.15%22%2F%3E%3Cpath%20d%3D%22M1920%20233.667C1920%20233.667%201871.5%20315.667%201729%20315.667C1533.69%20315.667%201567%20519.848%20927.5%20443.257C288%20366.667%20325.5%20573.702%20187%20599.677C48.4998%20625.652%20-1%20578.84%20-1%20578.84V1003H1920V233.667Z%22%20fill%3D%22%233C2863%22%20fill-opacity%3D%220.35%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="flex max-w-[1420px] flex-col-reverse items-center justify-between lg:flex-row">
        <div className="w-full p-4 lg:mb-0 lg:w-[40%]">
          <h2 className="my-6 text-[20px] font-bold text-heading md:text-[48px]">
            Every Review Matters
          </h2>
          <p className="text-sm md:text-[16px]">
            Every review plays a crucial role in building a comprehensive and honest overview of the
            iGaming world, offering invaluable insights to both newcomers and seasoned players
            alike. <br></br>
            <br></br>
            These personal experiences and evaluations contribute to a trusted community, helping
            guide decisions in an ever-evolving industry.
          </p>
          <div className="flex w-full">
            <Link href="/companies" className="mx-auto mt-10 w-full sm:w-[187px] lg:mx-0">
              <Button className="mx-auto w-full bg-primary sm:w-[187px] lg:mx-0">
                View all reviews
              </Button>
            </Link>
          </div>
        </div>
        <div className="grid gap-1 overflow-hidden pl-4">
          <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:overflow-visible">
            <CounterCard
              bgColor="bg-[#FFD89E]"
              count="4,000+"
              label="Reviews"
              svg={`<svg width="93" height="97" viewBox="0 0 93 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.1643 38.8282C39.6466 38.8282 48.1441 30.2598 48.1441 19.6902C48.1441 9.12061 39.6466 0.552246 29.1643 0.552246C18.6821 0.552246 10.1846 9.12061 10.1846 19.6902C10.1846 30.2598 18.6821 38.8282 29.1643 38.8282Z" fill="#F3C175"/>
                        <path d="M37.5542 48.1384L20.7703 48.1384C9.66282 48.1384 0.65625 57.2178 0.65625 68.4218L0.65625 96.5363L57.6683 96.5363V68.4218C57.6683 57.2178 48.6617 48.1384 37.5542 48.1384Z" fill="#F3C175"/>
                        <path d="M63.9837 38.8287C74.4659 38.8287 82.9634 30.2603 82.9634 19.6907C82.9634 9.12109 74.4659 0.552734 63.9837 0.552734C53.5014 0.552734 45.0039 9.12109 45.0039 19.6907C45.0039 30.2603 53.5014 38.8287 63.9837 38.8287Z" fill="#FFE7C5"/>
                        <path d="M72.3731 48.1394L55.5892 48.1394C44.4817 48.1394 35.4751 57.2187 35.4751 68.4228L35.4751 96.5373H92.4872V68.4228C92.4872 57.2187 83.4806 48.1394 72.3731 48.1394Z" fill="#FFE7C5"/>
                        </svg>
                        `}
              className="lg:mt-20"
            />
            <CounterCard
              bgColor="bg-[#78A3B1]"
              count="300+"
              label="Reviews"
              svg={`<svg width="100" height="95" viewBox="0 0 100 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M80.8482 26.4021L64.5354 24.0241L57.2399 9.19522C54.4233 3.4689 46.2753 3.46677 43.4573 9.19503L36.1619 24.0241L19.8491 26.4021C13.5501 27.3201 11.0306 35.093 15.5901 39.552L27.3942 51.0949L24.6077 67.3934C23.5316 73.6866 30.1213 78.4927 35.7582 75.5207L50.3486 67.8251L64.9395 75.5207C70.5829 78.4966 77.1633 73.6724 76.0894 67.3934L73.3029 51.0949L85.1072 39.552C89.6649 35.0946 87.1497 27.3207 80.8482 26.4021Z" fill="white"/>
                        <path d="M27.6393 6.96478L23.6743 1.78264C22.5979 0.376233 20.5245 0.0642941 19.0435 1.08644C17.5623 2.10841 17.234 4.07726 18.3102 5.48385L22.2752 10.666C23.3522 12.0731 25.4257 12.384 26.906 11.3622C28.3872 10.3404 28.7155 8.37137 27.6393 6.96478Z" fill="white" fill-opacity="0.4"/>
                        <path d="M13.9808 55.7749C13.4121 54.0198 11.5326 53.0583 9.78202 53.6293L3.20317 55.7733C1.45297 56.3434 0.495285 58.2289 1.06384 59.9845C1.63358 61.7431 3.51693 62.6997 5.26264 62.1301L11.8417 59.986C13.5919 59.416 14.5496 57.5304 13.9808 55.7749Z" fill="white" fill-opacity="0.4"/>
                        <path d="M82.5353 1.0865C81.0543 0.0643459 78.981 0.376101 77.9046 1.78269L73.9396 6.96485C72.8633 8.37144 73.1918 10.3405 74.673 11.3623C76.1548 12.3846 78.2277 12.0721 79.3036 10.6661L83.2686 5.48391C84.345 4.07732 84.0165 2.10847 82.5353 1.0865Z" fill="white" fill-opacity="0.4"/>
                        <path d="M97.6464 55.7735L91.506 53.6295C89.8725 53.0581 88.118 54.0197 87.5872 55.775C87.0563 57.5303 87.9502 59.4157 89.5839 59.9861L95.7242 62.1301C97.3544 62.6999 99.1115 61.7422 99.643 59.9845C100.174 58.2292 99.2798 56.3439 97.6464 55.7735Z" fill="white" fill-opacity="0.4"/>
                        <path d="M50.3482 80.8374C48.8853 80.8374 47.6992 82.309 47.6992 84.1243V90.7955C47.6992 92.6107 48.8853 94.0824 50.3482 94.0824C51.8112 94.0824 52.9972 92.6107 52.9972 90.7955V84.1243C52.9974 82.309 51.8113 80.8374 50.3482 80.8374Z" fill="white" fill-opacity="0.4"/>
                        </svg>
                        `}
            />
            <CounterCard
              bgColor="bg-[#AB75AB]"
              count="1,000+"
              label="Listed Companies"
              svg={`<svg width="85" height="95" viewBox="0 0 85 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.596741" y="0.0112305" width="61.279" height="94.9825" fill="white" fill-opacity="0.5"/>
                        <rect x="38.3861" y="38.8213" width="45.9593" height="56.1724" fill="white"/>
                        <rect x="38.3861" y="38.8213" width="45.9593" height="56.1724" fill="white"/>
                        <rect x="38.3861" y="38.8213" width="45.9593" height="56.1724" fill="white"/>
                        <rect x="11.8315" y="14.3101" width="14.2984" height="17.3624" fill="white"/>
                        <rect x="11.8315" y="14.3101" width="14.2984" height="17.3624" fill="white"/>
                        <rect x="11.8315" y="14.3101" width="14.2984" height="17.3624" fill="white"/>
                        <rect x="36.343" y="14.3098" width="14.2984" height="17.3624" fill="white"/>
                        <rect x="36.343" y="14.3098" width="14.2984" height="17.3624" fill="white"/>
                        <rect x="36.343" y="14.3098" width="14.2984" height="17.3624" fill="white"/>
                        </svg>
                        `}
            />
            <CounterCard
              bgColor="bg-[#80B2FF]"
              count="10,000+"
              label="Unique Visitors"
              svg={`<svg width="108" height="98" viewBox="0 0 108 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.363892" y="46.2087" width="27.0452" height="51.1928" fill="#908EF8"/>
                        <rect x="0.363892" y="46.2087" width="27.0452" height="51.1928" fill="#908EF8"/>
                        <rect x="0.363892" y="46.2087" width="27.0452" height="51.1928" fill="#5C94EB"/>
                        <rect x="40.9316" y="26.8906" width="27.0452" height="70.5108" fill="#908EF8"/>
                        <rect x="40.9316" y="26.8906" width="27.0452" height="70.5108" fill="#908EF8"/>
                        <rect x="40.9316" y="26.8906" width="27.0452" height="70.5108" fill="#5C94EB"/>
                        <rect x="80.5338" y="0.811279" width="27.0452" height="96.5901" fill="#908EF8"/>
                        <rect x="80.5338" y="0.811279" width="27.0452" height="96.5901" fill="#908EF8"/>
                        <rect x="80.5338" y="0.811279" width="27.0452" height="96.5901" fill="#ABCCFF"/>
                        </svg>
                        `}
              className="lg:-mt-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default CounterSection;
