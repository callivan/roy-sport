import { fetcher } from '@api';

import { IResponseClothesProps } from './types';

export function fetchClothes() {
  const fetcherClothes = fetcher({ path: 'cloths' });

  return {
    fetch: (): Promise<IResponseClothesProps> => fetcherClothes.fetch(),
    abort: fetcherClothes.abort,
  };
}
