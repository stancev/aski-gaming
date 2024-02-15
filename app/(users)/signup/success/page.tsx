'use client';
import Image from 'next/image';
import AskiLogo from '@/components/AskiLogo';
import Confetti from 'react-confetti';

const SuccessPage = () => {
  return (
    <main>
      <Image
        src="/background-default.svg"
        quality={100}
        width={1920}
        height={600}
        alt="Background"
        className="absolute z-0 object-cover"
        draggable={false}
        style={{ width: '100%' }}
      />
      <section className="relative z-10 flex min-h-full overflow-hidden pt-2 sm:py-12">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <div className="mx-0 my-32 flex-none rounded-3xl bg-white p-12 px-4 py-2 shadow-2xl shadow-gray-900/10">
            <Confetti
              width={2720}
              height={800}
              numberOfPieces={300}
              recycle={false}
              gravity={0.4}
            />
            <div className="my-6 flex flex-col items-center justify-center sm:flex-row">
              <h1 className="flex items-center pr-2 text-3xl font-bold tracking-tight text-heading">
                Welcome to
              </h1>{' '}
              <AskiLogo />
            </div>
            <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              <p className="text-center">
                To activate your account, please click on the link in the email we just sent you.
              </p>
            </div>
            <p className="text-center text-sm text-primary">
              Did not receive the email?{' '}
              <a href="#" className="text-primary hover:underline">
                Resend
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SuccessPage;
