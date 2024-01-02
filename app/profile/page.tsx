import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { cookies } from 'next/headers';
import { getMe } from '@/lib/getData';

const UserProfile = async () => {
  const kok = cookies().get('next-auth.session-token');
  console.log('cookies', kok?.value);
  const session = await getServerSession(authOptions);
  console.log('session', session);
  if (!session) {
    redirect('/signin?callbackUrl=/protected/server');
  }

  if (kok?.value) {
    const data = await getMe(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzAzNDI2NDk3LCJleHAiOjE3MDYwMTg0OTd9.5VE_eh5KntnDkq6FprAkjpAkNfT9L5jS5drN1Bw4mTM'
    );
  }

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">
          This is a <span className="text-emerald-500">server-side</span> protected page
        </h1>
        <h2 className="mt-4 font-medium">You are logged in as:</h2>
        <p className="mt-4">{session?.user?.name}</p>
        <p className="mt-4">{session?.user?.email}</p>
      </div>
    </section>
  );
};
export default UserProfile;
