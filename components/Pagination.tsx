import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Pagination = ({ search, pagination }: any) => {
  return (
    <section className="w-full max-w-[1424px] mt-10 flex justify-end items-center space-x-3">
      <Button asChild variant="outline" size="square">
        <Link
          href={{
            pathname: '/companies',
            query: {
              page: 1,
              search
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g opacity="0.3">
              <path
                d="M11 6L5 12L11 18"
                stroke="#80287B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M19 6L13 12L19 18"
                stroke="#80287B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </Link>
      </Button>
      <Button asChild variant="outline" size="square">
        <Link
          href={{
            pathname: '/companies',
            query: {
              page: 1,
              search
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M15 6L9 12L15 18"
              stroke="#80287B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </Button>
      <Button asChild variant="default" size="square">
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
      <Button asChild variant="outline" size="square" disabled={true}>
        {true ? (
          <div>2</div>
        ) : (
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
        )}
      </Button>
      <Button asChild variant="outline" size="square">
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
      <Button asChild variant="outline" size="square">
        <Link
          href={{
            pathname: '/companies',
            query: {
              page: 3,
              search
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9 17.9998L15 11.9998L9 5.99976"
              stroke="#80287B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </Button>
      <Button asChild variant="outline" size="square">
        <Link
          href={{
            pathname: '/companies',
            query: {
              page: 3,
              search
            }
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M13 18L19 12L13 6"
              stroke="#80287B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 18L11 12L5 6"
              stroke="#80287B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </Button>
    </section>
  );
};
export default Pagination;
