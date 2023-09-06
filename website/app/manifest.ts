import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Roy Sport | Экипировочный центр',
    short_name: 'Roy Sport',
    description: 'Экипировочный центр Roy Sport, огромный выбор товаров для спорта и турима.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
  };
}
