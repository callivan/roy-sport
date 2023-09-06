export default ({ env }) => ({
  host: env("HOST"),
  url: env("STRAPI_URL"),
  port: env.int("PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
    defaultHeaders: {
      Authorization: env("STRAPI_TOKEN"),
    },
  },
});
