'use client';

import { Card } from '@entities';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function List() {
  const products = [
    {
      id: '1',
      name: 'Nike Air',
      price: 3000,
      src: '',
      preview: '',
    },
  ];

  const pathname = usePathname();

  return (
    <ul
      className={classNames(
        // Grid
        'grid grid-cols-products auto-rows-products gap-5 justify-center',

        // Tablet big
        'lg:gap-2',
      )}
    >
      {/* {products.map(({ id, ...props }) => (
        <li
          key={id}
          className={classNames(
            // Size
            'w-full h-full',
          )}
        >
          <Link href={`${pathname}/${id.toString()}`}>
            <Card alt={`Кроссовки ${props.name}`} {...props} />
          </Link>
        </li>
      ))} */}
    </ul>
  );
}
