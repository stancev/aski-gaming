/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <section>
      <h1 className="mb-4 text-2xl font-medium text-heading">
        It looks like you don't have any <br /> companies listed.
      </h1>
      <Button asChild>
        <Link href="/account/my-companies/add-new">Register new company</Link>
      </Button>
    </section>
  );
};
export default page;
