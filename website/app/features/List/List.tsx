import { Card } from '@entities';
import classNames from 'classnames';
import Link from 'next/link';

import { TListProps } from './types/components';

export function List({ list, className, pathname, ...props }: TListProps) {
  return (
    <ul
      className={classNames(
        // Custom class name
        className,

        // Grid
        'grid grid-cols-products auto-rows-products gap-5 justify-center',

        // Tablet big
        'lg:gap-2',
      )}
      {...props}
    >
      {list.map(({ id, name, price, thumbnail }) => (
        <li
          key={id}
          className={classNames(
            // Size
            'w-full h-full',
          )}
        >
          <Link href={`${pathname}/${id.toString()}`}>
            <Card
              src={thumbnail.url}
              preview={thumbnail.placeholder}
              alt={`Кроссовки ${name}`}
              name={name}
              price={price}
              isClientSide
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
