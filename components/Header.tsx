import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import AskiLogo from '@/components/AskiLogo';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import MobMenu from '@/components/MobMenu';

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <nav className="h-22 mb-26 flex justify-center bg-white px-4 py-3">
      <section className="flex w-full max-w-[1424px] items-center">
        <AskiLogo />
        <div className="ml-auto flex items-center space-x-6">
          <div className="hidden items-center space-x-6 lg:flex">
            <Link href="/companies">Companies</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/reviews">Reviews</Link>
            <Separator className="h-[34px]" orientation="vertical" />
            {!session && <Link href="/reviews">Sign Up</Link>}
          </div>
          {!session ? (
            <Button asChild className="h-8 w-[90px] md:h-12 md:w-[157px]">
              <Link href="/signin">Login</Link>
            </Button>
          ) : (
            <p>{session?.user?.name}</p>
          )}
        </div>
        <div className="ml-2 flex justify-center lg:hidden">
          <MobMenu />
        </div>
      </section>
    </nav>
  );
};

export default Header;
