import { fetchContacts } from '@api';
import { Empty } from '@entities';
import classNames from 'classnames';
import { Metadata } from 'next/types';

import { Content } from './components';

const siteName =
  process.env.STRAPI_URL && typeof process.env.STRAPI_URL === 'string'
    ? process.env.STRAPI_URL.replace(/http(s)?:\/\//gi, '')
    : '';

export const metadata: Metadata = {
  // eslint-disable-next-line sonarjs/no-duplicate-string
  title: 'Roy Sport | Контакты',
  // eslint-disable-next-line sonarjs/no-duplicate-string
  description: 'Вся необходима информация для связи с нами. Новосибирск',
  keywords: 'Новосибирск,Контакты,Адрес,Социальная сеть,Телефон',

  openGraph: {
    title: 'Roy Sport | Контакты',
    description: 'Вся необходима информация для связи с нами.',
    // eslint-disable-next-line sonarjs/no-duplicate-string
    images: { url: '/mapImg.png', alt: 'Карта', width: 400, height: 266 },
    url: process.env.STRAPI_URL,
    siteName,
  },

  twitter: {
    title: 'Roy Sport | Контакты',
    description: 'Вся необходима информация для связи с нами.',
    images: { url: '/mapImg.png', alt: 'Карта', width: 400, height: 266 },
    card: 'summary_large_image',
    site: siteName,
  },

  appleWebApp: {
    title: 'Roy Sport | Контакты',
    startupImage: {
      url: '/mapImg.png',
    },
  },
};

export default async function Contacts() {
  const contactsFetch = fetchContacts({});
  const contacts = await contactsFetch.fetch();

  const isEmpty =
    !contacts ||
    (!contacts.socials && !contacts.phones && !contacts.addresses) ||
    (!contacts.addresses.length && !contacts.phones.length && !contacts.socials.length);

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
          'bg-gray-50',
        )}
      >
        {isEmpty ? <Empty /> : <Content data={contacts} />}
      </main>
    </>
  );
}
