'use client';

import { ButtonContained } from '@shared/ui';
import classNames from 'classnames';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useLayoutEffect } from 'react';

export function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams as any as URLSearchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  const handleFilter = (query: 'ASC' | 'DESC') => {
    router.push(pathname + '?' + createQueryString('order', query));
  };

  useLayoutEffect(() => {
    handleFilter('DESC');
  }, []);

  return (
    <div
      className={classNames(
        // Flex
        'flex items-center gap-3 flex-wrap',
      )}
    >
      <ButtonContained
        disabled={searchParams.get('order') === 'ASC'}
        onClick={() => handleFilter('ASC')}
      >
        По возрастанию цены
      </ButtonContained>
      <ButtonContained
        disabled={searchParams.get('order') === 'DESC'}
        onClick={() => handleFilter('DESC')}
      >
        По убыванию цены
      </ButtonContained>
    </div>
  );
}
