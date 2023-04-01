/**
 * sneaker controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::sneaker.sneaker', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const { filters, pagination } = query;

    const category = filters && filters.category || ['basketball', 'run', 'volleyball'];
    const order = filters && filters.order || 'DESC';
    const limit = pagination && pagination.limit || 25;
    const page = pagination && pagination.page;

    const [entries, count] = await strapi.db.query('api::sneaker.sneaker').findWithCount({
      where: {
        categories: {
          category: {
            $in: category
          }
        },
      },
      offset: page * limit,
      limit: limit,
      orderBy: { price: order },
      populate: ['img'],
    });

    const sanitizeEntries = await this.sanitizeOutput(entries, ctx);

    return {
      data: sanitizeEntries,
      pagination: {
        page,
        total: count,
        pageSize: limit,
        pageCount: Math.round(count / limit)
      }
    }
  }
}));
