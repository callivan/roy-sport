'use client';

import { Navigation } from '@entities';
import { IconBarbell, IconHoodie, IconSneaker } from '@shared/icons';
import { Badge, ButtonText } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

import { TAsideProps } from './types/component';

export function Aside({ counts, className, ...props }: TAsideProps) {
  const { tablet, mobileBig } = useMatchMedia({
    sizeNames: ['tablet', 'mobileBig'],
    queries: ['(max-width: 1024px)', '(max-width: 595px)'],
  });

  const pathname = usePathname();

  const { category, order } = useMemo(() => {
    const paths = pathname.split('/');
    const category = paths[1] || 'run';
    const order = paths[paths.length === 5 ? paths.length - 1 : paths.length - 2] || 'DESC';
    return { category, order };
  }, [pathname]);

  const isActive = (pathname: string, link: string) => {
    return pathname.split('/')[2] === link.split('/')[2];
  };

  return (
    <aside
      className={classNames(
        // Custom class name
        className,

        // Position
        'relative',

        // Flex
        'flex items-center justify-center flex-shrink-0',

        // Color
        'bg-white-900',

        // Size
        'w-max max-w-[240px] h-full',
        // Mobile big
        's:w-full s:max-w-full s:h-max',

        // Effect
        'shadow-custom',

        // Indent
        'px-3',
        // Mobile big
        's:py-2',
        // Mobile small
        'xs:px-2',

        // Layer
        'z-[1]',
      )}
      {...props}
    >
      <Navigation
        data={[
          {
            id: '1',
            name: 'КРОССОВКИ',
            icon: <IconSneaker />,
            link: `/${category}/sneakers/1/${order}`,
            count: counts[0] ?? 0,
          },
          {
            id: '2',
            name: 'ОДЕЖДА',
            icon: <IconHoodie />,
            link: `/${category}/clothes/1/${order}`,
            count: counts[1] ?? 0,
          },
          {
            id: '3',
            name: 'СПЕЦТОВАРЫ',
            icon: <IconBarbell />,
            link: `/${category}/specials/1/${order}`,
            count: counts[2] ?? 0,
          },
        ]}
        elementItem={({ name, icon, link, count }) => (
          <div className={classNames('flex gap-1 w-full')}>
            <Link href={link}>
              <ButtonText isActive={isActive(pathname, link)} icon={icon}>
                {tablet ? '' : name}
              </ButtonText>
            </Link>
            <Badge
              className="flex-shrink-0 translate-y-[-4px] max-w-[50px]"
              isActive={isActive(pathname, link)}
              content={count.toString()}
            />
          </div>
        )}
        isColumn={!mobileBig}
        className={classNames(
          // Flex
          'gap-4',

          // Indent
          'mb-5',
          // Mobile big
          's:mb-[0px]',
        )}
      />
    </aside>
  );
}
