import { TCategory, TSubcategory } from '@types';
import { Metadata } from 'next/types';

interface IParamsProps {
  params: { category: TCategory; subcategory: TSubcategory; page: string };
}

export function generateOwnMetadata({ params }: IParamsProps): Metadata {
  const category = () => {
    switch (params.category) {
      case 'basketball':
        return {
          categoryTitle: 'баскетбола',
          categoryKeyword: 'Баскетбол',
        };
      case 'volleyball':
        return {
          categoryTitle: 'волейбола',
          categoryKeyword: 'Волейбол',
        };
      default:
        return {
          categoryTitle: 'бега',
          categoryKeyword: 'Бег',
        };
    }
  };

  const subcategory = () => {
    switch (params.subcategory) {
      case 'specials':
        return {
          subcategoryTitle: 'Спец.товары',
          subcategoryKeywords: 'Спец.товары, Бандажы, Бинты, Наколенники',
          subcategoryDescription: 'спец.товаров',
        };
      case 'sneakers':
        return {
          subcategoryTitle: 'Кроссовки',
          subcategoryDescription: 'кроссовок',
          subcategoryKeywords: 'Кроссовки, Обувь',
        };
      default:
        return {
          subcategoryTitle: 'Одежда',
          subcategoryKeywords: 'Одежда, Штаны, Шорты',
          subcategoryDescription: 'одежды',
        };
    }
  };

  const img = () => {
    switch (params.subcategory) {
      case 'specials':
        return {
          url: `${process.env.SITE_URL}/specialsImg.png`,
          alt: 'Спец.товары',
          width: 400,
          height: 266,
        };
      case 'sneakers':
        return {
          url: `${process.env.SITE_URL}/sneakersImg.png`,
          alt: 'Кроссовки',
          width: 400,
          height: 266,
        };
      default:
        return {
          url: `${process.env.SITE_URL}/clothesImg.png`,
          alt: 'Одежда',
          width: 400,
          height: 266,
        };
    }
  };

  const { categoryKeyword, categoryTitle } = category();
  const { subcategoryDescription, subcategoryKeywords, subcategoryTitle } = subcategory();
  const siteName =
    process.env.SITE_URL && typeof process.env.SITE_URL === 'string'
      ? process.env.SITE_URL.replace(/http(s)?:\/\//gi, '')
      : '';

  return {
    title: `Roy Sport | ${subcategoryTitle} для ${categoryTitle}. Страница №${params.page}`,
    description: `Большой выбор ${subcategoryDescription} для ${categoryTitle}. Доставка по всей России. Магазин в Новосибирске. Страница №${params.page}`,
    keywords: `${subcategoryKeywords} Спорт,${categoryKeyword},Nike,Adidas,Jordan,Новосибирск,Страница №${params.page}`,
    icons: `${process.env.SITE_URL}/logo.svg`,

    openGraph: {
      title: `Roy Sport | ${subcategoryTitle} для ${categoryTitle}. Страница №${params.page}`,
      description: `Большой выбор ${subcategoryDescription} для ${categoryTitle}. Доставка по всей России. Страница №${params.page}`,
      images: img(),
      url: process.env.SITE_URL,
      siteName,
    },

    twitter: {
      title: `Roy Sport | ${subcategoryTitle} для ${categoryTitle}. Страница №${params.page}`,
      description: `Большой выбор ${subcategoryDescription} для ${categoryTitle}. Доставка по всей России. Страница №${params.page}`,
      images: img(),
      card: 'summary_large_image',
      site: siteName,
    },

    appleWebApp: {
      title: `Roy Sport | ${subcategoryTitle} для ${categoryTitle}. Страница №${params.page}`,
      startupImage: {
        url: img().url,
      },
    },
  };
}
