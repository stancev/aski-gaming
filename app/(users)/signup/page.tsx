'use client';
import { useState } from 'react';
//import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
//import GoogleSignInButton from '@/components/GoogleSignInButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      })
    });

    //const data = await response.json();
  };

  return (
    <section className="flex min-h-full overflow-hidden pt-10 sm:py-12">
      <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
        <div className="relative mt-12 sm:mt-16">
          <h1 className="text-center text-2xl tracking-tight text-heading">Create new account</h1>
        </div>
        <div className="sm:rounded-5xl -mx-4 mt-10 flex-auto bg-white px-4 py-10 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:p-24">
          <form onSubmit={handleRegisterUser}>
            <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
              <Label htmlFor="username">Your username</Label>
              <Input
                placeholder="Enter your username"
                type="text"
                id="username"
                name="username"
                onChange={e => setUsername(e.target.value)}
              />
            </div>
            <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
              <Label htmlFor="email">Your email address</Label>
              <Input
                placeholder="Enter your email"
                type="email"
                id="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
              <Label htmlFor="password">Your password</Label>
              <Input
                placeholder="Enter your password"
                type="password"
                id="password"
                name="password"
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="space-y-2"></div>
            <Button type="submit" className="mt-3 w-full">
              Register
            </Button>
          </form>
          <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          {/* <GoogleSignInButton /> */}
        </div>
      </div>
    </section>
  );
};

export default SignInPage;
