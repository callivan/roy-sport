import { fetchContacts } from '@api';
import { IconChevron } from '@shared/icons';
import { ButtonContained, MyImage } from '@shared/ui';
import { TCategory, TOrder, TSubcategory } from '@types';
import classNames from 'classnames';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next/types';

import { Info } from './components';
import { getData } from './utils';

interface IParamsProps {
  params: {
    category: TCategory;
    subcategory: TSubcategory;
    page: string;
    order: TOrder;
    id: string;
  };
}

export async function generateMetadata({
  params: { id, subcategory },
}: IParamsProps): Promise<Metadata> {
  const product = await getData({ subcategory, id });

  if ('data' in product) {
    notFound();
  }

  const siteName =
    process.env.STRAPI_URL && typeof process.env.STRAPI_URL === 'string'
      ? process.env.STRAPI_URL.replace(/http(s)?:\/\//gi, '')
      : '';

  return {
    title: `Roy Sport | ${product.name}`,
    description: `В магазине спортивной экипировки Roy Sport представлены кроссовки ${product.name} по отличной цене (${product.price}). Размеры в наличии ${product.sizes}`,
    keywords: `${product.name},Цена ${product.price},Спорт,Nike,Adidas,Jordan,Новосибирск`,
    icons: `${process.env.SITE_URL}/logo.svg`,

    openGraph: {
      title: `Roy Sport | ${product.name}`,
      description: `В магазине спортивной экипировки Roy Sport представлены кроссовки ${product.name} по отличной цене (${product.price}). Размеры в наличии ${product.sizes}`,
      images: {
        url: `http://${process.env.STRAPI_CONTAINER}:1337 + ${product.img.url}`,
        width: 400,
        height: 266,
      },
      url: process.env.STRAPI_URL,
      siteName,
    },

    twitter: {
      title: `Roy Sport | ${product.name}`,
      description: `В магазине спортивной экипировки Roy Sport представлены кроссовки ${product.name} по отличной цене (${product.price}). Размеры в наличии ${product.sizes}`,
      images: {
        url: `http://${process.env.STRAPI_CONTAINER}:1337 + ${product.img.url}`,
        alt: product.name,
        width: 400,
        height: 266,
      },
      card: 'summary_large_image',
      site: siteName,
    },

    appleWebApp: {
      title: `Roy Sport | ${product.name}`,
      startupImage: {
        url: `http://${process.env.STRAPI_CONTAINER}:1337 + ${product.img.url}`,
      },
    },
  };
}

export default async function Page({
  params: { category, subcategory, page, order, id },
}: IParamsProps) {
  const formatter = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const contactsFetch = fetchContacts({});

  const product = await getData({ subcategory, id });
  const contacts = await contactsFetch.fetch();

  const activePhone =
    contacts && contacts.phones ? contacts.phones.find((phone) => phone.active) : null;

  if ('data' in product) {
    notFound();
  }

  return (
    <main
      className={classNames(
        // Position
        'relative',

        // Size
        'w-full h-full',

        // Grid
        'grid grid-cols-2 grid-rows-rootLayout gap-x-2 gap-y-4 col-span-1 row-span-2',
        // Mobile big
        's:col-span-full s:row-span-1',

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
      <MyImage
        alt={product.name}
        src={process.env.STRAPI_URL + product.img.url}
        fill
        placeholder="blur"
        sizes="100%"
        blurDataURL={product.img.placeholder}
        quality={80}
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
          flexShrink: 0,
          zIndex: -1,
        }}
      />

      <Link href={`/${category}/${subcategory}/${page}/${order}`}>
        <ButtonContained
          className={classNames(
            // Grid
            'col-span-1 row-start-1 row-end-2',
            // Mobile big
            's:col-span-2',
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
          // Mobile big
          's:col-span-2',
        )}
      >
        {product.name}
      </h1>

      <div
        className={classNames(
          // Flex
          'flex flex-col gap-1',

          // Grid
          'col-span-1 row-start-3 row-end-4 self-end',
        )}
      >
        {product.sizes ? <Info title="Размеры:" text={product.sizes} /> : null}
        <Info title="Цена:" text={formatter.format(product.price)} />
      </div>

      {activePhone ? (
        <a
          href={`https://wa.me/${activePhone?.phone.replace(/[^0-9]/gi, '')}`}
          target="_blank"
          className={classNames(
            // Grid
            'col-span-1 row-start-3 row-end-4 self-end justify-self-end',
          )}
        >
          <ButtonContained>Узнать детали</ButtonContained>
        </a>
      ) : null}
    </main>
  );
}
