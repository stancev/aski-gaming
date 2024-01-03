import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getMe } from '@/lib/getData';

const UserProfile = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/signin?callbackUrl=/protected/server');
  }

  const data = await getMe(session.jwt);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-2xl font-bold">
          This is a <span className="text-emerald-500">server-side</span> protected User Account
          page
        </h1>
        <h2 className="mt-4 font-medium">You are logged in as:</h2>
        <p className="mt-4">{data.username}</p>
        <p className="mt-4">{data.email}</p>
      </div>
    </section>
  );
};
export default UserProfile;
