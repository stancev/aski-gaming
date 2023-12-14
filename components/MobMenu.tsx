import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogClose,
  DialogHeader,
  DialogTrigger
} from '@/components/ui/dialog';
import Link from 'next/link';
import AskiLogo from '@/components/AskiLogo';
import Image from 'next/image';

export default function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image src="/icons/dots-ico.svg" alt="Menu" width={25} height={25} />
      </DialogTrigger>
      <DialogContent className="h-screen min-w-full">
        <DialogHeader>
          <AskiLogo />
          <DialogDescription>
            <div className="flex flex-col items-start lg:hidden">
              <DialogClose asChild>
                <Link href="/companies" className="py-2 text-base leading-10">
                  Companies
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/categories" className="py-2 text-base leading-10">
                  Categories
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/reviews" className="py-2 text-base leading-10">
                  Reviews
                </Link>
              </DialogClose>
              <DialogClose asChild>
                <Link href="/reviews" className="py-2 text-base leading-10">
                  Sign Up
                </Link>
              </DialogClose>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
