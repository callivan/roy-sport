import { LIMIT } from '@consts';
import { generatePages } from '@shared/utils';
// @ts-ignore
import { getServerSideSitemap, ISitemapField } from 'next-sitemap';

export async function GET() {
  const pages = await Promise.all([
    generatePages({ limit: LIMIT, category: ['basketball'], order: 'ASC', withIds: true }),
    generatePages({ limit: LIMIT, category: ['volleyball'], order: 'ASC', withIds: true }),
    generatePages({ limit: LIMIT, category: ['run'], order: 'ASC', withIds: true }),
    generatePages({ limit: LIMIT, category: ['basketball'], order: 'DESC', withIds: true }),
    generatePages({ limit: LIMIT, category: ['volleyball'], order: 'DESC', withIds: true }),
    generatePages({ limit: LIMIT, category: ['run'], order: 'DESC', withIds: true }),
  ]).then((res) => res.flat(2));
  return getServerSideSitemap(
    pages.reduce((acc: ISitemapField[], { category, subcategory, page, order, ids }) => {
      const topLevel = {
        loc: `${process.env.SITE_URL}/${category}/${subcategory}/${page}/${order}`,
        lastmod: new Date().toISOString(),
        priority: 1,
      };
      const secondLevels = ids.map((id) => ({
        loc: `${process.env.SITE_URL}/${category}/${subcategory}/${page}/${order}/${id}`,
        lastmod: new Date().toISOString(),
        priority: 1,
      }));
      const concatPages = [topLevel, ...secondLevels];
      acc.push(...concatPages);
      return acc;
    }, []),
  );
}
