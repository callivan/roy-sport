import { ButtonContained } from '@shared/ui';
import classNames from 'classnames';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className={classNames(
        // Position
        'relative',

        // Grid
        'col-span-2 row-start-2 row-end-4',

        // Color
        'bg-white-900',

        // Flex
        'flex flex-col gap-3 items-center justify-center',

        // Layer
        'z-[-1]',

        // Indent
        'px-2 py-3',
      )}
    >
      <h2
        className={classNames(
          // Font
          'font-medium text-h2 text-center break-words whitespace-pre-wrap',

          // Color
          'text-pink-450',
        )}
      >
        Упс! Ошибочка! 🤔
      </h2>

      <span
        className={classNames(
          // Font
          'font-regular text-body1 text-center break-words whitespace-pre-wrap',

          // Color
          'text-black-900',

          // Size
          'max-w-[700px]',
        )}
      >
        Страница с таким адресом не существует, жмите на кнопочку.
      </span>

      <Link href={'/run/sneakers'}>
        <ButtonContained>На главную</ButtonContained>
      </Link>
    </main>
  );
}
