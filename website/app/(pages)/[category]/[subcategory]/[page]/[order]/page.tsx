import 'react-loading-skeleton/dist/skeleton.css';

import { LIMIT } from '@consts';
import { Empty } from '@entities';
import { generatePages } from '@shared/utils';
import { TCategory, TOrder, TSubcategory } from '@types';
import { Products } from '@widgets';
import classNames from 'classnames';
import { Metadata } from 'next/types';

import { generateError, generateOwnMetadata, getData } from './utils';

interface IParamsProps {
  params: { category: TCategory; subcategory: TSubcategory; page: string; order: TOrder };
}

export async function generateMetadata({ params }: IParamsProps): Promise<Metadata> {
  return generateOwnMetadata({ params });
}

export async function generateStaticParams() {
  const pages = await Promise.all([
    generatePages({ limit: LIMIT, category: ['basketball'], order: 'ASC' }),
    generatePages({ limit: LIMIT, category: ['volleyball'], order: 'ASC' }),
    generatePages({ limit: LIMIT, category: ['run'], order: 'ASC' }),

    generatePages({ limit: LIMIT, category: ['basketball'], order: 'DESC' }),
    generatePages({ limit: LIMIT, category: ['volleyball'], order: 'DESC' }),
    generatePages({ limit: LIMIT, category: ['run'], order: 'DESC' }),
  ]);

  return pages.flat(2);
}

export default async function Page({
  params: { category, subcategory, page, order },
}: IParamsProps) {
  const { data, pagination } = await getData({
    category,
    subcategory,
    order,
    limit: LIMIT,
    page: Number(page) - 1,
  });

  generateError({
    params: { category, subcategory, page: Number(page), order, pageCount: pagination.pageCount },
  });

  return (
    <main
      className={classNames(
        // Grid
        'col-span-1 row-span-2',
        // Mobile big
        's:col-span-full s:row-span-1',

        // Layer
        'z-[-1]',

        // Visibility
        'overflow-hidden',

        'relative',
      )}
    >
      {data.length ? (
        <Products
          className={classNames(
            // Size
            'w-full h-full',
          )}
          products={data}
          currentPage={Number(page)}
          pageCount={pagination.pageCount}
          pathname={`/${category}/${subcategory}/${page}/${order}`}
        />
      ) : (
        <Empty />
      )}
    </main>
  );
}
