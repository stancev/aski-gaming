import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  console.log('data', data);

  try {
    const { username, email, password } = data;

    const strapiResponse = await registerUserWithStrapi(username, email, password);

    return NextResponse.json(strapiResponse);
  } catch (error) {
    console.log(error);
  }
}

async function registerUserWithStrapi(username: any, email: any, password: any) {
  const response = await fetch(`${process.env.API_URL}/auth/local/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password })
  });
  const data = await response.json();
  return data;
}
