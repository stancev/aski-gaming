'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';

const ResetPasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '' });
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const handleRegisterUser = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({
        show: true,
        message: 'Passwords do not match, please check the fields and try again.'
      });
      return;
    }
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        code: code,
        password: password,
        passwordConfirmation: confirmPassword
      })
    });

    const data = await response.json();
    if (data.error) {
      setAlert({ show: true, message: data.error.message });
    }
    if (data.user) {
      signIn('credentials', {
        identifier: data.user.email,
        password: password,
        callbackUrl: `/`
      });
    }
  };

  const handleInputChange = () => {
    setAlert({ show: false, message: '' });
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
                Reset your password
              </h1>
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
                <Label htmlFor="password">New password</Label>
                <Input
                  placeholder="Enter your new password"
                  type="password"
                  id="password"
                  name="password"
                  onChange={e => {
                    setPassword(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>
              <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
                <Label htmlFor="confirmPassword">Confirm new password</Label>
                <Input
                  placeholder="Enter your new password again"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={e => {
                    setConfirmPassword(e.target.value);
                    handleInputChange();
                  }}
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

export default ResetPasswordPage;
