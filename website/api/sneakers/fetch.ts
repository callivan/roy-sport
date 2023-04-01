import { fetcher } from '@api';

import { IResponseSneakersProps } from './types';

interface IFetchSneakersProps {
  isClientSide?: boolean;
}

export function fetchSneakers({ isClientSide = false }: IFetchSneakersProps) {
  const fetcherSneakers = fetcher({ path: 'sneakers', isClientSide });

  return {
    fetch: (): Promise<IResponseSneakersProps> => fetcherSneakers.fetch(),
    abort: fetcherSneakers.abort,
  };
}
