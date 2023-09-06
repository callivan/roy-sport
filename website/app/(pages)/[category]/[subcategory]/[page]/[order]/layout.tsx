import { fetchClothes, fetchSneakers, fetchSpecials } from '@api';
import { Aside } from '@widgets';
import classNames from 'classnames';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const sneakers = fetchSneakers({});
  const clothes = fetchClothes({});
  const specials = fetchSpecials({});

  const data = await Promise.all([sneakers.fetch(), clothes.fetch(), specials.fetch()]);
  const counts = data.map((entity) => entity.pagination.total);
  return (
    <>
      <Aside
        counts={counts}
        className={classNames(
          // Grid
          'col-span-1 row-span-2',
          // Mobile big
          's:col-span-full s:row-span-1',
        )}
      />
      {children}
    </>
  );
}
