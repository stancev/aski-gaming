import Link from 'next/link';
import Image from 'next/image';

const Breadcrumbs = ({ username }: { username: string }) => {
  return (
    <nav className="my-3 flex space-x-1 font-semibold text-white sm:my-0">
      <Link href="/reviews">Reviews</Link>
      <Image alt="right-chevron" src="/right-chevron.svg" width={24} height={24} />
      <p>{username}</p>
    </nav>
  );
};
export default Breadcrumbs;
