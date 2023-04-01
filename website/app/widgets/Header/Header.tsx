'use client';

import './header.css';

import { Navigation } from '@entities';
import { ButtonText, Popup } from '@shared/ui';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header({ className, ...props }: React.ComponentPropsWithRef<'header'>) {
  const pathname = usePathname();

  const getSubcategory = (pathname: string) => {
    return pathname.split('/')[2] || 'sneakers';
  };

  const isActive = (pathname: string, link: string) => {
    return pathname.split('/')[1] === link.split('/')[1];
  };

  const routes = [
    { id: '1', name: 'БЕГ', link: `/run/${getSubcategory(pathname)}` },
    {
      id: '2',
      name: 'ВОЛЕЙБОЛ',
      link: `/volleyball/${getSubcategory(pathname)}`,
    },
    {
      id: '3',
      name: 'БАСКЕТБОЛ',
      link: `/basketball/${getSubcategory(pathname)}`,
    },
    { id: '4', name: 'КОНТАКТЫ', link: '/contacts' },
  ];

  return (
    <header
      className={classNames(
        // Custom class name
        className,

        // Size
        'w-full h-max',

        // Flex
        'flex items-center gap-1',

        // Indent
        'px-3 py-2',
        // Mobile small
        'xs:px-2',

        // Effect
        'shadow-custom',
        // Mobile big
        's:border-b-[1px] s:border-b-gray-450',
      )}
      {...props}
    >
      <div
        className={classNames(
          // Custom class name
          'logo',

          // Flex
          'flex-shrink-0',

          // Indent
          'mr-auto',
        )}
      />

      <Navigation
        data={routes}
        elementItem={({ name, link }, index) =>
          index === routes.length - 1 ? (
            <></>
          ) : (
            <Link href={link}>
              <ButtonText isActive={isActive(pathname, link)}>{name}</ButtonText>
            </Link>
          )
        }
        className={classNames(
          // Indent
          'mr-auto',

          // Visibility
          //Mobile big
          's:hidden',
        )}
      />

      <Navigation
        data={[routes[routes.length - 1]]}
        elementItem={({ name, link }) => (
          <Link href={link}>
            <ButtonText isActive={isActive(pathname, link)}>{name}</ButtonText>
          </Link>
        )}
        className={classNames(
          // Visibility
          //Mobile big
          's:hidden',
        )}
      />

      <Popup
        className={classNames(
          // Visibility
          'hidden',
          // Mobile big
          's:flex',
        )}
        portalStyles="z-index: 1;"
      >
        <Navigation
          data={routes}
          elementItem={({ name, link }) => (
            <Link href={link}>
              <ButtonText isActive={isActive(pathname, link)}>{name}</ButtonText>
            </Link>
          )}
          isColumn
          className={classNames(
            // Flex
            'flex items-center justify-center gap-3',

            // Color
            'bg-white-900',

            // Indent
            'mt-[89px] p-2',
          )}
        />
      </Popup>
    </header>
  );
}
