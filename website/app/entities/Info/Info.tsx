import classNames from 'classnames';

import { TInfoProps } from './types/component';

export function Info<D extends { id: string; name: string }>({
  title,
  data,
  element,
  className,
  ...props
}: TInfoProps<D>) {
  return (
    <div
      className={classNames(
        // Custom class name
        className,

        // Flex
        'flex flex-col gap-2',
      )}
      {...props}
    >
      <h3
        className={classNames(
          // Font
          'font-regular text-h2',

          // Color
          'text-black-900',
        )}
      >
        {title}
      </h3>

      <ul
        className={classNames(
          // Flex
          'flex flex-col gap-1',
        )}
      >
        {data.map((item) => (
          <li key={item.id}>{element(item)}</li>
        ))}
      </ul>
    </div>
  );
}
