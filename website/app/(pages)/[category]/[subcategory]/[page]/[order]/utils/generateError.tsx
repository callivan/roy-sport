import { TCategory, TOrder, TSubcategory } from '@types';
import { notFound } from 'next/navigation';

interface IParamsProps {
  params: {
    category: TCategory;
    subcategory: TSubcategory;
    page: number;
    order: TOrder;
    pageCount: number;
  };
}

export function generateError({
  params: { category, subcategory, page, order, pageCount },
}: IParamsProps) {
  const categories = ['basketball', 'volleyball', 'run'];
  const subcategories = ['sneakers', 'clothes', 'specials'];
  const orders = ['ASC', 'DESC'];

  if (
    !categories.includes(category) ||
    !subcategories.includes(subcategory) ||
    !orders.includes(order) ||
    page - 1 > pageCount
  ) {
    notFound();
  }
}
