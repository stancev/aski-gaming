import { signIn } from 'next-auth/react';

export async function POST(req: any, res: any) {
  if (req.method === 'POST') {
    try {
      const { username, email, password } = req.body;
      const check = await req.json();
      //console.log('req.body', check.body);
      // Call a function to handle registration with Strapi
      const strapiResponse = await registerUserWithStrapi(username, email, password);
      //console.log('strapiResponse', strapiResponse.error.details.errors);
      signIn('credentials', {
        identifier: email,
        password: password,
        callbackUrl: `http://localhost:3000/`
      });

      res.status(200).json({ message: 'User registered successfully', data: strapiResponse });
    } catch (error) {
      res.status(500).json({ message: 'Error registering user', error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
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
