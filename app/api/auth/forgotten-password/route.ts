import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('data', data);

  try {
    const { email } = data;

    const strapiResponse = await forgotPasswordEmail(email);

    return NextResponse.json(strapiResponse);
  } catch (error) {
    console.log(error);
  }
}

async function forgotPasswordEmail(email: any) {
  const response = await fetch(`${process.env.API_URL}/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
  const data = await response.json();
  return data;
}
