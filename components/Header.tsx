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
          <div className="space-x-6">
            <Link href="/companies">Companies</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/reviews">Reviews</Link>
          </div>
          <Separator className="h-[34px]" orientation="vertical" />
          <div className="space-x-6">
            {/* <Button className="w-[157px] mr-2" variant="ghost">
              Sign Up
            </Button> */}
            <Link href="/reviews">Sign Up</Link>
            <Button className="w-[157px]">Login</Button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Header;
