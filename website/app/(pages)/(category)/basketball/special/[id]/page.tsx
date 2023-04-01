import { IconChevron } from '@shared/icons';
import { ButtonContained } from '@shared/ui';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { Info } from './components';

export default function ClothProduct() {
  return (
    <main
      className={classNames(
        // Position
        'relative',

        // Size
        'w-full h-full',

        // Grid
        'grid grid-cols-2 grid-rows-rootLayout gap-x-2 gap-y-4 col-span-2 row-start-2 row-end-4',

        // Indent
        'px-3 py-3',
        // Mobile big
        's:px-2',

        // Color
        'bg-white-900',

        // Layer
        'isolate z-[-1]',

        // Visibility
        'overflow-hidden',
      )}
    >
      {/* <Image
        alt={'Фото'}
        src={img}
        fill
        placeholder="blur"
        sizes="100%"
        blurDataURL={blur.blurDataURL}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          flexShrink: 0,
          zIndex: -1,
        }}
      /> */}

      <Link href={'/basketball/special'}>
        <ButtonContained
          className={classNames(
            // Grid
            'col-span-1 row-start-1 row-end-2',
          )}
          icon={<IconChevron width={20} height={20} />}
        >
          Назад
        </ButtonContained>
      </Link>

      <h1
        className={classNames(
          // Font
          'font-medium text-h1 whitespace-pre-wrap break-words',

          // Grid
          'col-span-1  row-start-2 row-end-3',
        )}
      >
        Nike Air
      </h1>

      <div
        className={classNames(
          // Flex
          'flex flex-col gap-1',

          // Grid
          'col-span-1 row-start-3 row-end-4 self-end',
        )}
      >
        <Info title="Размеры:" text="42 / 43 / 44" />
        <Info title="Цена:" text="3 000 ₽" />
      </div>

      <ButtonContained
        className={classNames(
          // Grid
          'col-span-1 row-start-3 row-end-4 self-end justify-self-end',
        )}
      >
        Узнать детали
      </ButtonContained>
    </main>
  );
}
