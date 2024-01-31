import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getMe } from '@/lib/getData';
import Image from 'next/image';
import Link from 'next/link';
import LogoutButton from '@/components/ui/logoutButton';

const UserProfile = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?callbackUrl=/protected/server');
  }

  const data = await getMe(session.jwt);

  return (
    <main>
      <div className="absolute top-[58px] z-[-1] h-[185px] w-full bg-primary"></div>
      <div className="mx-auto grid max-w-[1424px] grid-cols-1 gap-4 p-2 xl:grid-cols-8 xl:px-2 xl:py-4 2xl:px-0">
        <div className="hidden h-full xl:col-span-2 xl:block">
          <h1 className="mb-2 text-2xl text-white">User Account</h1>
          <div className="mb-4 flex h-full flex-col rounded-xl bg-white p-4">
            <section className="mb-5 flex items-start">
              <Image
                alt="User avatar"
                src="/reviewer.svg"
                width={111}
                height={111}
                className="rounded-full"
              />
              <div className="ms-2 flex h-[111px] flex-col justify-center">
                <div className="flex">
                  <h2>{data.username}</h2>
                  <Image src="/icons/dots-ico.svg" alt="Menu" width={25} height={25} />
                </div>
                <p>Affiliated</p>
              </div>
            </section>
            <nav className="flex flex-col space-y-5">
              <Link href="profile-settings">Profile Settings</Link>
              <Link href="my-companies">My Companies</Link>
              <Link href="my-reviews">My Reviews</Link>
            </nav>
            <LogoutButton />
          </div>
        </div>
        <div className="h-[1100px] xl:col-span-6">
          <div className="relative top-[193px] mb-4 flex h-full rounded-xl bg-white p-4">
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};
export default UserProfile;
