import { ButtonContained } from '@shared/ui';
import classNames from 'classnames';
import Link from 'next/link';

import { TFilterProps } from './types/component';

export function Filter({ pathname }: TFilterProps) {
  const paths = pathname.split('/');
  const order = paths[paths.length - 1];
  const pathChunk = paths.slice(0, paths.length - 1).join('/');

  return (
    <div
      className={classNames(
        // Flex
        'flex items-center gap-3 flex-wrap',
      )}
    >
      <Link href={pathChunk + '/ASC'}>
        <ButtonContained disabled={order === 'ASC'}>По возрастанию цены</ButtonContained>
      </Link>
      <Link href={pathChunk + '/DESC'}>
        <ButtonContained disabled={order === 'DESC'}>По убыванию цены</ButtonContained>
      </Link>
    </div>
  );
}
