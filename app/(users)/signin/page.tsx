'use client';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import LinkedinSignInButton from '@/components/LinkedinSignInButton';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { useEffect } from 'react';
import { ToastAction } from '@/components/ui/toast';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailVerification, setEmailVerification] = useState<string | null>(null);

  const searchParams = useSearchParams();
  useEffect(() => {
    setEmailVerification(searchParams.get('emailVerification'));
  }, [searchParams]);
  const { toast } = useToast();

  useEffect(() => {
    if (emailVerification === 'completed') {
      toast({
        title: 'Email confirmed!',
        description: 'You can now sign in to your account.',
        action: <ToastAction altText="Dismiss">Dismiss</ToastAction>
      });
    }
  }, [emailVerification, toast]);

  const handleSignIn = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    signIn('credentials', {
      identifier: email,
      password: password,
      callbackUrl: `/`
    });
  };

  return (
    <main>
      <Image
        src="/background-default.svg"
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
                Sign in to your account
              </h1>
            </div>
            <LinkedinSignInButton />
            <div className="mx-auto my-10 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
              or
            </div>
            <form onSubmit={handleSignIn}>
              <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
                <Label htmlFor="email">Your email address</Label>
                <Input
                  placeholder="Sign in with your email"
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
                <p className="text-sm text-black">
                  Forgot your password?{' '}
                  <a href="/forgotten-password" className="text-sm text-primary hover:underline">
                    Reset here
                  </a>
                </p>
              </div>
              <div className="space-y-2"></div>
              <Button type="submit" variant="outline" color="gray" className="mt-3 w-full">
                Sign in with email
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
