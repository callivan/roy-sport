'use client';

import { fetchClothes, fetchSneakers, fetchSpecials } from '@api';
import { Navigation } from '@entities';
import { IconBarbell, IconHoodie, IconSneaker } from '@shared/icons';
import { Badge, ButtonText } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLayoutEffect, useMemo } from 'react';

export function Aside({ className, ...props }: React.ComponentPropsWithRef<'aside'>) {
  const { tablet, mobileBig } = useMatchMedia({
    sizeNames: ['tablet', 'mobileBig'],
    queries: ['(max-width: 1024px)', '(max-width: 595px)'],
  });

  const pathname = usePathname();

  const category = useMemo(() => {
    return pathname.split('/')[1] || 'run';
  }, [pathname]);

  const isActive = (pathname: string, link: string) => {
    return pathname.split('/')[2] === link.split('/')[2];
  };

  useLayoutEffect(() => {
    const fetch = async () => {
      const sneakersFetcher = fetchSneakers({ isClientSide: true });
      // const clothesFetcher = fetchClothes();
      // const specialsFetcher = fetchSpecials();
      // const data = await Promise.all([
      //   sneakersFetcher.fetch(),
      //   clothesFetcher.fetch(),
      //   specialsFetcher.fetch(),
      // ]);

      const data = await sneakersFetcher.fetch();

      console.log(data);
    };

    fetch();
  }, [category]);

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
            link: `/${category}/sneakers`,
            count: 0,
          },
          {
            id: '2',
            name: 'ОДЕЖДА',
            icon: <IconHoodie />,
            link: `/${category}/cloth`,
            count: 0,
          },
          {
            id: '3',
            name: 'СПЕЦТОВАРЫ',
            icon: <IconBarbell />,
            link: `/${category}/special`,
            count: 0,
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
