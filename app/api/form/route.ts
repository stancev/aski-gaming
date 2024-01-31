import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.next();
  }
  //console.log(session);
  let data = await request.json();

  data = Object.entries(data).reduce(
    (acc, [key, value]) => {
      if (value !== '') {
        acc[key as string] = value;
      }
      return acc;
    },
    {} as Record<string, any>
  );

  try {
    const res = await fetch(`${process.env.API_URL}/users/1`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${session.jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ...data
      })
    });
    console.log({ ...data });
    console.log(res.json());
    return NextResponse.json(res);
  } catch (error) {
    console.log(error);
  }
}
