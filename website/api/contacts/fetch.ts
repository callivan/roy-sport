import { fetcher } from '@api';
import { IRequestProps } from '@types';
import { IResponseContactsProps } from '@types';

export function fetchContacts(props: IRequestProps) {
  const fetcherSneakers = fetcher({
    path: 'contact',
    tag: 'contacts',
    ...props,
  });

  return {
    fetch: (): Promise<IResponseContactsProps> => fetcherSneakers.fetch(),
  };
}
