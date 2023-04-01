'use client';

import './contacts.css';

import { Info } from '@entities';
import { Map, Placemark, YMaps } from '@pbe/react-yandex-maps';
import { IconChevron, IconInstagram, IconMarker, IconPhone, IconVK } from '@shared/icons';
import { ButtonText, Drawer, Scroll } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import classNames from 'classnames';

export default function Contacts() {
  const { mobileBig } = useMatchMedia({
    sizeNames: ['mobileBig'],
    queries: ['(max-width: 595px)', '(hover:none)'],
  });

  return (
    <>
      <main
        className={classNames(
          // Grid
          'col-span-2 row-span-2',

          // Layer
          'z-[-1]',

          // Visibility
          'overflow-hidden',

          // Size
          'w-full h-full',

          // Color
          'bg-purple-50',
        )}
      >
        <YMaps>
          <Map width="100%" height="100%" state={{ center: [55.030204, 82.92043], zoom: 17 }}>
            <Placemark geometry={[55.030204, 82.92043]} />
          </Map>
        </YMaps>

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
              <Info
                title="Социальные сети:"
                data={[
                  { id: '1', name: 'https://instagram.com', icon: <IconInstagram /> },
                  { id: '2', name: 'https://vk.com', icon: <IconVK /> },
                ]}
                element={({ name, icon }) => (
                  <a>
                    <ButtonText icon={icon}>{name}</ButtonText>
                  </a>
                )}
              />

              <Info
                title="Телефоны:"
                data={[{ id: '1', name: '+7 923 122-1212', icon: <IconPhone /> }]}
                element={({ name, icon }) => (
                  <a>
                    <ButtonText icon={icon}>{name}</ButtonText>
                  </a>
                )}
              />

              <Info
                className="w-full"
                title="Адреса:"
                data={[
                  { id: '1', name: 'Новосибирск, ул. Пермитина, д. 24', icon: <IconMarker /> },
                ]}
                element={({ name, icon }) => <ButtonText icon={icon}>{name}</ButtonText>}
              />
            </div>
          </Scroll>
        </Drawer>
      </main>
    </>
  );
}
