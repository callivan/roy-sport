import { ButtonContained } from '@shared/ui';
import classNames from 'classnames';
import Link from 'next/link';

import { Ellipsis } from './components';
import { TPaginationProps } from './types';

export function Pagination({
  className,
  currentPage,
  pageCount,
  pathname,
  order,
  step = 2,
  ...props
}: TPaginationProps) {
  let neighbors = pageCount < step ? pageCount : step;
  let left = currentPage - neighbors;
  let right = currentPage + neighbors;

  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  const chunk = () => {
    const result = [...pages].slice(
      left < 1 || left === 2 ? 0 : left - 1,
      pageCount - right === 1 ? right + 1 : right,
    );

    if (pageCount - right >= 2) {
      result.push(...[0, pageCount]);
    }

    if (left >= 3) {
      result.unshift(...[1, 0]);
    }

    return result;
  };

  return pageCount <= 1 ? null : (
    <div
      className={classNames(
        // Custom class name
        className,

        // Position
        'absolute bottom-[0px] left-[0px]',

        // Layer
        'z-[1]',

        // Color
        'bg-white-50 outline-1',

        // Effect
        'backdrop-blur-[5px]',

        // Size
        'w-full h-max',

        // Indent
        'px-5 py-2',
        // Tablet big
        'lg:px-4',
        // Mobile big
        's:px-3',
        // Mobile small
        'xs:px-2',
      )}
      {...props}
    >
      <div
        className={classNames(
          // Flex
          'flex items-center justify-end gap-1 flex-wrap',

          // Size
          'max-w-max w-full h-max',

          // Indent
          'ml-auto',
        )}
      >
        {chunk().map((i, index) =>
          i === 0 ? (
            <Ellipsis key={index} />
          ) : (
            <Link
              key={index}
              href={pathname + `/${i}` + `/${order}`}
              className={classNames(
                //Visibility
                currentPage === i && 'pointer-events-none',
              )}
            >
              <ButtonContained disabled={currentPage === i}>{String(i)}</ButtonContained>
            </Link>
          ),
        )}
      </div>
    </div>
  );
}
