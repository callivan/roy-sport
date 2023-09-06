<div style="display: flex; justify-content: center;"><img src="assets/Logo.png" width="300" height="225" /></div>

## 🧰 `Технологии`

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://docs.docker.com/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/docs)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![Strapi](https://img.shields.io/badge/strapi-%232E7EEA.svg?style=for-the-badge&logo=strapi&logoColor=white)](https://strapi.io/)
[![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)](https://nginx.org/ru/)

Запуск и работа с проектом осуществляется при помощи Docker.

Убедитесь что на вашем устройстве установлена данная программа.

[Дополнительная информация (Docker)](https://docs.docker.com/)

## 📢 `Основные команды`

Все команды необходимо выполнять из папки `docker`.

Для запуска приложения в режиме разработки.

```js
🚀 docker compose up --build
```

Для запуска приложения в продакшен режиме.

```js
🚀 MODE=prod docker compose up --build
```

## 🛠 `Инициализация CMS Strapi`

Инициализация нового приложения `CMS Strapi`, следуйте инстукции по [ссылке (`Strapi`)](https://docs.strapi.io/dev-docs/installation/cli)

Необходимо установить `CMS Strapi` в папку `cms` рядом с остальными частями приложения.

Для этого выполните команду из корня.

```js
🚀 npx create-strapi-app@latest cms
```

Затем переместите все переменные окружения в файл .env в папке docker.

Так же, после инициализации нового `Strapi` приложения, необходимо внести некторые изменения в файлы.

```ts
// ./config/admin.ts

export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
  host: env("STRAPI_URL"),
});

// ./config/server.ts

export default ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  url: env("STRAPI_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
});
```

Если возникли проблемы с запуском приложения [telegram](https://t.me/maslinok)
