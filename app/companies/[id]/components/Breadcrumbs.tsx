import Link from 'next/link';
import Image from 'next/image';

const Breadcrumbs = ({ name }: { name: string }) => {
  return (
    <nav className="my-3 flex space-x-1 font-semibold text-primary sm:my-0">
      <Link href="/companies">Companies</Link>
      <Image alt="right-chevron" src="/right-chevron.svg" width={24} height={24} />
      <p>{name}</p>
    </nav>
  );
};
export default Breadcrumbs;
