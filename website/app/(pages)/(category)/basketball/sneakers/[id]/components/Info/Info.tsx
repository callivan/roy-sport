import classNames from 'classnames';

import { TInfoProps } from './types/component';

export function Info({ title, text }: TInfoProps) {
  return (
    <div
      className={classNames(
        // Flex
        'flex gap-1',
      )}
    >
      <h3
        className={classNames(
          // Flex
          'flex-shrink-0',

          // Font
          'font-regular text-body1 whitespace-pre-wrap break-words',
        )}
      >
        {title}
      </h3>

      <span
        className={classNames(
          // Font
          'font-regular text-body1 whitespace-pre-wrap break-words',
        )}
      >
        {text}
      </span>
    </div>
  );
}
