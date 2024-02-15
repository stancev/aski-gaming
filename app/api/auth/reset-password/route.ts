import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('data', data);

  try {
    const { code, password, passwordConfirmation } = data;

    const strapiResponse = await resetPassword(code, password, passwordConfirmation);

    return NextResponse.json(strapiResponse);
  } catch (error) {
    console.log(error);
  }
}

async function resetPassword(code: any, password: any, passwordConfirmation: any) {
  const response = await fetch(`${process.env.API_URL}/auth/reset-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ code, password, passwordConfirmation })
  });
  const data = await response.json();
  return data;
}
