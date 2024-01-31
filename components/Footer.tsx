import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center ">
      <div className="sm: mt-5 flex w-full max-w-[1420px] flex-col items-start justify-between gap-5 p-8 md:flex-row md:p-16">
        <div className="flex flex-col">
          <h3 className="text-lg font-medium capitalize text-heading md:text-xl">About</h3>
          <div className="mt-3 flex flex-col text-base leading-10 md:text-lg">
            <Link href="#">Contact us</Link>
            <Link href="#">About us</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-medium capitalize text-heading md:text-xl">Community</h3>
          <div className="mt-3 flex flex-col text-base leading-10 md:text-lg">
            <Link href="#">FAQ</Link>
            <Link href="#">Share feedback</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-medium capitalize text-heading md:text-xl">Legal</h3>
          <div className="mt-3 flex flex-col text-base leading-10 md:text-lg">
            <Link href="#">Cookie policy</Link>
            <Link href="#">Privacy policy</Link>
            <Link href="#">Terms of Use</Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col-reverse items-center justify-center bg-white p-5 sm:flex-row sm:justify-between">
        <p className="p-3 text-[11px] md:text-sm">
          Copyright © AskiGaming {currentYear} | All rights reserved
        </p>
        <div className="flex gap-3">
          <Link href="https://instagram.com" target="_blank" rel="noreferrer">
            <Image
              loading="lazy"
              src="/icons/instagram.svg"
              alt="AskiGaming Instagram"
              width={32}
              height={32}
              className="h-auto w-auto"
            />
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noreferrer">
            <Image
              loading="lazy"
              src="/icons/facebook.svg"
              alt="AskiGaming Facebook"
              width={32}
              height={32}
              className="h-auto w-auto"
            />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noreferrer">
            <Image
              loading="lazy"
              src="/icons/linkedin.svg"
              alt="AskiGaming LinkedIn"
              width={32}
              height={32}
              className="h-auto w-auto"
            />
          </Link>
          <Link href="https://x.com" target="_blank" rel="noreferrer">
            <Image
              loading="lazy"
              src="/icons/twitter.svg"
              alt="AskiGaming Twitter"
              width={32}
              height={32}
              className="h-auto w-auto"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
