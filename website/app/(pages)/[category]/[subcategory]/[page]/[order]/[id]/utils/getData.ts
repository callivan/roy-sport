import { fetchClothesOne, fetchSneakersOne, fetchSpecialsOne } from '@api';
import { TSubcategory } from '@types';

interface IGetDataProps {
  id: string;
  subcategory: TSubcategory;
}

export function getData({ subcategory, id }: IGetDataProps) {
  switch (subcategory) {
    case 'clothes':
      const clothesFetch = fetchClothesOne({ id });
      return clothesFetch.fetch();
    case 'sneakers':
      const sneakersFetch = fetchSneakersOne({ id });
      return sneakersFetch.fetch();
    default:
      const specialsFetch = fetchSpecialsOne({ id });
      return specialsFetch.fetch();
  }
}
