/**
 * cloth controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::cloth.cloth",
  ({ strapi }) => ({
    async find(ctx) {
      const { query } = ctx;

      const {
        category = ["basketball", "vollyeball", "run"],
        order = "DESC",
        limit = 25,
        page = 0,
      } = query;

      const [entries, count] = await strapi.db
        .query("api::cloth.cloth")
        .findWithCount({
          where: {
            categories: {
              category: {
                $in: category,
              },
            },
          },
          offset: page * limit,
          limit: limit,
          orderBy: { price: order },
          populate: ["thumbnail"],
        });

      const sanitizeEntries = await this.sanitizeOutput(entries, ctx);

      return {
        data: sanitizeEntries,
        pagination: {
          page,
          total: count,
          pageSize: limit,
          pageCount: Math.round(count / limit),
        },
      };
    },

    async findOne(ctx) {
      const { id } = ctx.params;

      const entry = await strapi.db.query("api::cloth.cloth").findOne({
        where: {
          id: {
            $eqi: id,
          },
        },
        populate: ["img"],
      });

      const sanitizeEntry = await this.sanitizeOutput(entry, ctx);

      return sanitizeEntry;
    },
  })
);
