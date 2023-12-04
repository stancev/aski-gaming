import Link from 'next/link';
import AskiLogo from '@/components/AskiLogo';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <nav className="h-22 px-4 py-3 mb-26 flex justify-center bg-white">
      <section className="w-full max-w-[1424px] flex items-center">
        <AskiLogo />
        <div className="ml-auto flex items-center space-x-6">
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/companies">Companies</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/reviews">Reviews</Link>
            <Separator className="h-[34px]" orientation="vertical" />
            <Link href="/reviews">Sign Up</Link>
          </div>
          <Button className="w-[157px]">Login</Button>
        </div>
      </section>
    </nav>
  );
};

export default Header;
