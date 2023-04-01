import { Products } from '@widgets';
import classNames from 'classnames';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roy Sport | Кроссовки для волейбола.',
  description: 'Большой выбор кроссовок для волейбола. Доставка по всей России.',
  keywords: 'Кроссовки, Обувь, Спорт, Волейбол, Nike, Adidas, Jordan, Новосибирск.',

  openGraph: {
    title: 'Roy Sport | Кроссовки для волейбола.',
    description: 'Большой выбор кроссовок для волейбола. Доставка по всей России.',
  },
};

export default function PageSneakers() {
  return (
    <main
      className={classNames(
        // Grid
        'col-span-1 row-span-2',
        // Mobile big
        's:col-span-full s:row-span-1',

        // Layer
        'z-[-1]',

        // Visibility
        'overflow-hidden',
      )}
    >
      <Products
        className={classNames(
          // Size
          'w-full h-full',
        )}
      />
    </main>
  );
}
