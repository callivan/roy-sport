/**
 * contact controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::contact.contact",
  ({ strapi }) => ({
    async find(ctx) {
      const entries = await strapi.db
        .query("api::contact.contact")
        .findMany({ populate: ["addresses", "phones", "socials"] });

      const sanitizeEntries = await this.sanitizeOutput(entries, ctx);

      return sanitizeEntries.length ? sanitizeEntries[0] : {};
    },
  })
);
