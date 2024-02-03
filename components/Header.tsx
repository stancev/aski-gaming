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
    <nav className="h-22 mb-26 sticky top-0 z-50 flex justify-center border-b bg-white px-4 py-3 shadow-sm">
      <section className="flex w-full max-w-[1424px] items-center">
        <AskiLogo />
        <div className="ml-auto flex items-center space-x-6">
          <div className="hidden items-center space-x-6 lg:flex">
            <Link href="/companies" className="hover:text-primary">
              Companies
            </Link>
            <Link href="/categories" className="hover:text-primary">
              Categories
            </Link>
            <Link href="/reviews" className="hover:text-primary">
              Reviews
            </Link>
            <Separator className="h-[34px]" orientation="vertical" />
            {!session && (
              <Link href="/signup" className="hover:text-primary">
                Sign Up
              </Link>
            )}
          </div>
          {!session ? (
            <Button asChild className="h-8 w-[90px] md:h-12 md:w-[157px]">
              <Link href="/signin" className="hover:text-primary">
                Login
              </Link>
            </Button>
          ) : (
            <Link href="/account" className="hover:text-primary">
              {session?.user?.name}
            </Link>
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
