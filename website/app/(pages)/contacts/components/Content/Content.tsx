'use client';

import './content.css';

import { Empty } from '@entities';
import { IconChevron } from '@shared/icons';
import { Drawer, Scroll } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import { IAddress, IPhone, ISocial } from '@types';
import classNames from 'classnames';
import { useLayoutEffect, useState } from 'react';

import { Address, MapComponent, Phone, Social } from './components';
import { IContentProps } from './types/component';

export function Content({ data }: IContentProps) {
  const { mobileBig } = useMatchMedia({
    sizeNames: ['mobileBig'],
    queries: ['(max-width: 595px)', '(hover:none)'],
  });

  const [socials, setSocials] = useState<ISocial[]>([]);
  const [phones, setPhones] = useState<IPhone[]>([]);
  const [addresses, setAddresses] = useState<IAddress[]>([]);
  const [coords, setCoords] = useState<[number, number]>([0, 0]);

  useLayoutEffect(() => {
    setSocials(data.socials);
    setPhones(data.phones);
    setAddresses(data.addresses);

    if (data.addresses.length) {
      setCoords([data.addresses[0].latitude, data.addresses[0].longitude]);
    }
  }, []);

  return (
    <>
      {addresses.length ? (
        <MapComponent coords={coords} />
      ) : (
        <Empty text="Тут должна быть карта. 😕" />
      )}

      <Drawer
        className={classNames(
          // Size
          'w-[60%]',
          // Mobile big
          's:w-full s:h-[70%]',
        )}
        icon={<IconChevron className="fill-black-900 rotate-180" width={32} height={32} />}
        position={mobileBig ? 'top' : 'left'}
        portalStyles="padding-top: 88px"
      >
        <Scroll
          className={classNames(
            // Indent
            'pl-3 pr-2 py-2 mr-1',
          )}
        >
          <div
            className={classNames(
              // Position
              'relative top-[50%]',

              // Flex
              'flex flex-wrap gap-x-2 gap-y-3',

              //Size
              'max-w-[500px] min-w-[250px] w-full h-max',

              // Transform
              'translate-y-[-60%]',

              // Indent
              'mx-auto',
            )}
          >
            {socials.length ? <Social socials={socials} /> : null}

            {phones.length ? <Phone phones={phones} /> : null}

            {addresses.length ? (
              <Address
                addresses={addresses}
                activeCoords={coords}
                onClick={(coord) => setCoords(coord)}
              />
            ) : null}
          </div>
        </Scroll>
      </Drawer>
    </>
  );
}
