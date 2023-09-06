import { fetcher } from '@api';
import { IProduct, IRequestProps } from '@types';
import { IResponseProductsProps } from '@types';

export function fetchClothes(props: IRequestProps) {
  const fetcherClothes = fetcher({ path: 'cloths', tag: 'clothes', ...props });

  return {
    fetch: (): Promise<IResponseProductsProps> => fetcherClothes.fetch(),
  };
}

export function fetchClothesOne(props: Omit<IRequestProps, 'pagination'> & { id: string }) {
  const fetcherClothes = fetcher({
    path: 'cloths',
    tag: 'clothes',
    ...props,
  });

  return {
    fetch: (): Promise<IProduct | { data: null }> => fetcherClothes.fetch(),
  };
}
