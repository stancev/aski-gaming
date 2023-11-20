import Link from 'next/link';

const Header = () => {
  return (
    <nav className="px-4 py-3 bg-slate-300">
      <Link href="/" className="mr-2">
        Home
      </Link>
      <Link href="/companies" className="mr-2">
        Companies
      </Link>
      <Link href="/protected/client">Protected (client)</Link>
    </nav>
  );
};

export default Header;
