import Headings from '@/components/pagers/Headings';
import Image from 'next/image';

const RedirectPage = async ({ searchParams }: { searchParams: any }) => {
  console.log(searchParams);

  await fetch(
    `${process.env.API_URL}/auth/linkedin/callback?access_token=${searchParams.access_token}`,
    {
      headers: { 'Content-Type': 'application/json' }
    }
  )
    .then(response => response.json())
    .then(data => console.log(data));

  return (
    <main>
      <Image
        src="/background-companies.svg"
        quality={100}
        width={1920}
        height={600}
        alt="Background"
        className="absolute z-0 object-cover"
        draggable={false}
        style={{ width: '100%' }}
      />
      <div className="relative z-10 flex min-h-screen flex-col items-center p-2 xl:p-16">
        <Headings
          title="Connect With 800+ Industry Players"
          subtitle="Secondary line of text that goes here"
        />
      </div>
    </main>
  );
};

export default RedirectPage;
