import { fetchClothes, fetchSneakers, fetchSpecials } from '@api';
import { IRequestProps, TCategory, TOrder, TSubcategory } from '@types';

interface IGetDataProps {
  category: TCategory;
  subcategory: TSubcategory;
  page: number;
  limit: number;
  order: TOrder;
}

export function getData({ category, subcategory, page, limit, order }: IGetDataProps) {
  const query: IRequestProps = {
    isClientSide: false,
    pagination: { page, limit },
    filters: { category: [category], order },
  };

  switch (subcategory) {
    case 'sneakers':
      const sneakersFetch = fetchSneakers(query);
      return sneakersFetch.fetch();
    case 'specials':
      const specialsFetch = fetchSpecials(query);
      return specialsFetch.fetch();
    default:
      const clothesFetch = fetchClothes(query);
      return clothesFetch.fetch();
  }
}
