import { Products } from '@widgets';
import classNames from 'classnames';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Roy Sport | Кроссовки для баскетбола.',
  description: 'Большой выбор кроссовок для баскетбола. Доставка по всей России.',
  keywords: 'Кроссовки, Обувь, Спорт, Баскетбол, Nike, Adidas, Jordan, Новосибирск.',

  openGraph: {
    title: 'Roy Sport | Кроссовки для баскетбола.',
    description: 'Большой выбор кроссовок для баскетбола. Доставка по всей России.',
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
