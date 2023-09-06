import { fetchClothes, fetchSneakers, fetchSpecials } from '@api';
import { IPagination, IProduct, IRequestProps, TCategory, TOrder } from '@types';

interface IGenaratePagesProps {
  limit: number;
  category: TCategory[];
  order: TOrder;
  withIds?: boolean;
}

export async function generatePages({
  limit,
  category,
  order,
  withIds = false,
}: IGenaratePagesProps) {
  const query: IRequestProps = {
    pagination: { limit },
    filters: { category, order },
  };

  const sneakersFetch = fetchSneakers(query);
  const clothesFetch = fetchClothes(query);
  const specialsFetch = fetchSpecials(query);

  const data = await Promise.all([
    sneakersFetch.fetch(),
    clothesFetch.fetch(),
    specialsFetch.fetch(),
  ]);

  return data.map(({ data, pagination }, index) => {
    return generate({
      data,
      pagination,
      order,
      category: category[0],
      subcategory: index === 0 ? 'sneakers' : index === 1 ? 'clothes' : 'specials',
      withIds,
    });
  });
}

interface IGenerateProps {
  data: IProduct[];
  pagination: IPagination;
  category: 'basketball' | 'volleyball' | 'run';
  subcategory: 'sneakers' | 'clothes' | 'specials';
  order: TOrder;
  withIds?: boolean;
}

function generate({ withIds, pagination, category, subcategory, order, data }: IGenerateProps) {
  return Array.from({ length: pagination.pageCount > 0 ? pagination.pageCount : 1 }, (_, i) => ({
    category,
    subcategory,
    order,
    page: String(i + 1),
    ids: withIds ? data.map((d) => d.id) : [],
  }));
}
