'use client';

import { ButtonContained } from '@shared/ui';
import classNames from 'classnames';

export default function Error({ reset }: { reset: () => void }) {
  const errorText = [
    'Попробуйте нажать на кнопочку! 🤭',
    'Возможно нужно кликнуть на кнопочку! 😅',
    'Если пару раз кликнуть, то возможно починится! 😕',
    'Интересно, если кликнуть на кнопку, то все заработает!? 🥱',
  ];

  const getRandomString = (arrString: string[]) => {
    return arrString[Math.floor(Math.random() * arrString.length)];
  };

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
        Страница не работает. Можно попробовать исправить это или зайти позже.
      </span>

      <span
        className={classNames(
          // Font
          'font-medium text-body1 text-center break-words whitespace-pre-wrap',

          // Color
          'text-purple-450',

          // Size
          'max-w-[700px]',
        )}
      >
        {getRandomString(errorText)}
      </span>

      <ButtonContained
        onClick={() => {
          reset();
        }}
      >
        Исправить
      </ButtonContained>
    </main>
  );
}
