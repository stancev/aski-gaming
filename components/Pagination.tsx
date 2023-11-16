import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Pagination = ({ search }: any) => {
  return (
    <section className="mt-6">
      <Button asChild className="mx-3" variant="outline">
        <Link
          href={{
            pathname: '/companies',
            query: {
              page: 1,
              search
            }
          }}
        >
          1
        </Link>
      </Button>
      <Button asChild className="mx-3" variant="outline">
        <Link
          href={{
            pathname: '/companies',
            query: {
              page: 2,
              search
            }
          }}
        >
          2
        </Link>
      </Button>
      <Button asChild className="mx-3" variant="outline">
        <Link
          href={{
            pathname: '/companies',
            query: {
              page: 3,
              search
            }
          }}
        >
          3
        </Link>
      </Button>
      <Button>Hello</Button>
    </section>
  );
};
export default Pagination;
