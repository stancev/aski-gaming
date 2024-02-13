'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LinkedinSignInButton from '@/components/LinkedinSignInButton';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

const SignInPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '' });

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({
        show: true,
        message: 'Passwords do not match, please check the fields and try again.'
      });
      return;
    }
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

    const data = await response.json();
    if (data.error) {
      let errorMessage = '';
      if (data.error.details && Array.isArray(data.error.details.errors)) {
        const errorMessages = data.error.details.errors
          .map((error: { path: any[]; message: any }) => `${error.message}`)
          .join(', ');
        errorMessage = `${errorMessages}`;
      } else {
        errorMessage = data.error.message;
      }
      setAlert({ show: true, message: errorMessage });
    }
    if (data.user) {
      signIn('credentials', {
        identifier: email,
        password: password,
        callbackUrl: `http://localhost:3000/`
      });
    }
  };

  return (
    <main>
      <Image
        src="/background-companies.svg"
        quality={100}
        width={1920}
        height={600}
        alt="Background"
        className="absolute z-0 object-cover"
        draggable={false}
        style={{ width: '100%' }}
      />
      <section className="relative z-10 flex min-h-full overflow-hidden pt-2 sm:py-12">
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6">
          <div className="-mx-4 mt-2 flex-auto bg-white px-4 py-2 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-3xl sm:p-12">
            <div className="my-6">
              <h1 className="text-center text-3xl font-medium tracking-tight text-heading">
                Create a new account
              </h1>
            </div>
            <LinkedinSignInButton />
            <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <form onSubmit={handleRegisterUser}>
              {alert.show && (
                <Alert variant="destructive" className="my-3">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{alert.message}</AlertDescription>
                </Alert>
              )}
              <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
                <Label htmlFor="username">Your public name or username</Label>
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
                <Label htmlFor="password">Password</Label>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  id="password"
                  name="password"
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
              <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
                <Label htmlFor="confirmPassword">Confirm password</Label>
                <Input
                  placeholder="Enter your password again"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="space-y-2"></div>
              <Button type="submit" className="mt-3 w-full">
                Register
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
