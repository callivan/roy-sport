import { IRequestProps } from '@types';

interface IFetcherProps extends IRequestProps {
  path: 'sneakers' | 'cloths' | 'specials' | 'contact';
  tag?: 'clothes' | 'sneakers' | 'specials' | 'contacts';
  id?: string;
}

export function fetcher({
  path,
  isClientSide = false,
  tag,
  pagination,
  filters,
  id,
}: IFetcherProps) {
  const queryParams = {
    page: pagination && pagination.page ? String(pagination.page) : '0',
    limit: pagination && pagination.limit ? String(pagination.limit) : '25',
    category: (filters && filters.category
      ? filters.category
      : ['basketball', 'volleyball', 'run']
    ).map((c) => `category=${c}&`),
    order: filters && filters.order ? filters.order : 'DESC',
  };

  const query = `?page=${queryParams.page}&limit=${queryParams.limit}&${queryParams.category.join(
    '',
  )}order=${queryParams.order}`;

  const url =
    (isClientSide
      ? `${process.env.STRAPI_URL}/api/`
      : `http://${process.env.STRAPI_CONTAINER}:1337/api/`) +
    path +
    (id ? `/${id}` : '') +
    query;

  const headers = {
    Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
  };

  const revalidateByTag = tag ? { next: { tags: [tag] } } : {};

  return {
    fetch: () =>
      fetch(url, { headers, ...revalidateByTag })
        .then((res) => res.json())
        .catch((err) => err),
  };
}
