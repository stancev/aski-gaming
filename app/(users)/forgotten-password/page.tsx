'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlarmCheck } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';

const ForgottenPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [alert, setAlert] = useState({ show: false, message: '' });

  const sendForgottenPasswordEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch('/api/auth/forgotten-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email
      })
    });

    const data = await response.json();
    if (data.ok) {
      setAlert({
        show: true,
        message: 'An email has been sent to you with a link to reset your password.'
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
          <div className="-mx-4 my-20 flex-auto bg-white px-4 py-2 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-3xl sm:p-12">
            <div className="my-6">
              <h1 className="text-center text-3xl font-medium tracking-tight text-heading">
                Forgotten Password
              </h1>
            </div>
            <form onSubmit={sendForgottenPasswordEmail}>
              {alert.show && (
                <Alert variant="default" className="my-3">
                  <AlarmCheck className="h-4 w-4" />
                  <AlertTitle>Email sent</AlertTitle>
                  <AlertDescription>{alert.message}</AlertDescription>
                </Alert>
              )}
              <div className="mx-auto mb-6 grid w-full items-center gap-1.5">
                <Label htmlFor="email">Enter your email to reset your password:</Label>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  name="email"
                  onChange={e => {
                    setEmail(e.target.value);
                    handleInputChange();
                  }}
                />
              </div>
              <div className="space-y-2"></div>
              <Button type="submit" className="mt-3 w-full">
                Send Reset Link
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgottenPasswordPage;
