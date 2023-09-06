import { fetcher } from '@api';
import { IProduct, IRequestProps } from '@types';
import { IResponseProductsProps } from '@types';

export function fetchSneakers(props: IRequestProps) {
  const fetcherSneakers = fetcher({
    path: 'sneakers',
    tag: 'sneakers',
    ...props,
  });

  return {
    fetch: (): Promise<IResponseProductsProps> => fetcherSneakers.fetch(),
  };
}

export function fetchSneakersOne(props: Omit<IRequestProps, 'pagination'> & { id: string }) {
  const fetcherSneakers = fetcher({
    path: 'sneakers',
    tag: 'sneakers',
    ...props,
  });

  return {
    fetch: (): Promise<IProduct | { data: null }> => fetcherSneakers.fetch(),
  };
}
