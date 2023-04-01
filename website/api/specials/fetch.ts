import { fetcher } from '@api';

import { IResponseSpecialsProps } from './types';

export function fetchSpecials() {
  const fetcherSpecials = fetcher({ path: 'specials' });

  return {
    fetch: (): Promise<IResponseSpecialsProps> => fetcherSpecials.fetch(),
    abort: fetcherSpecials.abort,
  };
}
