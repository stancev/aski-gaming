import Link from 'next/link';
import Image from 'next/image';
import { cn, generatePages } from '@/lib/utils';
import { Pagination } from '@/types/companies';
import { Button } from '@/components/ui/button';

type SearchParams = { [key: string]: string };
interface Props {
  pathname: string;
  pagination: Pagination;
  searchParams: SearchParams;
}

const Pagination: React.FC<Props> = ({ pathname, pagination, searchParams }) => {
  const { page, pageCount } = pagination;
  const pageNumbers = generatePages(page, pageCount);

  return (
    <section className="w-full max-w-[1424px] mt-10 flex justify-end items-center space-x-3">
      <Button asChild variant="outline" size="square">
        {page === 1 ? (
          <div className={cn(page === 1 && 'opacity-30')}>
            <Image
              alt="left-chevron-double"
              src="/left-chevron-double.svg"
              width={24}
              height={24}
            />
          </div>
        ) : (
          <Link
            href={{
              pathname: pathname,
              query: {
                ...searchParams,
                page: 1
              }
            }}
          >
            <Image
              alt="left-chevron-double"
              src="/left-chevron-double.svg"
              width={24}
              height={24}
            />
          </Link>
        )}
      </Button>
      <Button asChild variant="outline" size="square">
        {page === 1 ? (
          <div className={cn(page === 1 && 'opacity-30')}>
            <Image alt="left-chevron" src="/left-chevron.svg" width={24} height={24} />
          </div>
        ) : (
          <Link
            href={{
              pathname: pathname,
              query: {
                ...searchParams,
                page: page - 1
              }
            }}
          >
            <Image alt="left-chevron" src="/left-chevron.svg" width={24} height={24} />
          </Link>
        )}
      </Button>

      {pageNumbers.map((pageNumber: number) => (
        <Button
          key={pageNumber}
          asChild
          variant={pageNumber === page ? 'default' : 'outline'}
          disabled={pageNumber === page}
          size="square"
        >
          {pageNumber === page ? (
            <span>{pageNumber}</span>
          ) : (
            <Link
              href={{
                pathname: pathname,
                query: {
                  ...searchParams,
                  page: pageNumber
                }
              }}
            >
              {pageNumber}
            </Link>
          )}
        </Button>
      ))}

      <Button asChild variant="outline" size="square">
        {page === pageCount ? (
          <div className={cn(page === pageCount && 'opacity-30')}>
            <Image alt="right-chevron-disabled" src="/right-chevron.svg" width={24} height={24} />
          </div>
        ) : (
          <Link
            href={{
              pathname: pathname,
              query: {
                ...searchParams,
                page: page + 1
              }
            }}
          >
            <Image alt="right-chevron" src="/right-chevron.svg" width={24} height={24} />
          </Link>
        )}
      </Button>
      <Button asChild variant="outline" size="square" disabled={page === pageCount}>
        {page === pageCount ? (
          <div className={cn(page === pageCount && 'opacity-30')}>
            <Image
              alt="right-chevron-double-disabled"
              src="/right-chevron-double.svg"
              width={24}
              height={24}
            />
          </div>
        ) : (
          <Link
            href={{
              pathname: pathname,
              query: {
                ...searchParams,
                page: pageCount
              }
            }}
          >
            <Image
              alt="right-chevron-double"
              src="/right-chevron-double.svg"
              width={24}
              height={24}
            />
          </Link>
        )}
      </Button>
    </section>
  );
};
export default Pagination;
