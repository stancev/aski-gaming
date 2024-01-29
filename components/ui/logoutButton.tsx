'use client';
import { signOut } from 'next-auth/react';
import { Button } from '@/components/ui/button';

const LogoutButton = () => {
  const configuration = {
    callbackUrl: '/'
  };

  return (
    <Button
      variant="ghost"
      className="justify-start p-0 text-base font-normal hover:bg-transparent"
      onClick={() => signOut(configuration)}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
