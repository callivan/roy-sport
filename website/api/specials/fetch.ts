import { fetcher } from '@api';
import { IProduct, IRequestProps } from '@types';
import { IResponseProductsProps } from '@types';

export function fetchSpecials(props: IRequestProps) {
  const fetcherSpecials = fetcher({ path: 'specials', tag: 'specials', ...props });

  return {
    fetch: (): Promise<IResponseProductsProps> => fetcherSpecials.fetch(),
  };
}

export function fetchSpecialsOne(props: Omit<IRequestProps, 'pagination'> & { id: string }) {
  const fetcherSpecials = fetcher({
    path: 'specials',
    tag: 'specials',
    ...props,
  });

  return {
    fetch: (): Promise<IProduct | { data: null }> => fetcherSpecials.fetch(),
  };
}
