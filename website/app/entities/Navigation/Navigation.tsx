import classNames from 'classnames';

import { TNavigationProps } from './types/component';

export function Navigation<D extends { id: string; name: string }>({
  data,
  elementItem,
  isColumn = false,
  className,
  ...props
}: TNavigationProps<D>) {
  return (
    <ul
      className={classNames(
        // Custom class name
        className,

        // Flex
        'flex gap-5 flex-wrap',
        isColumn && 'flex-col',
      )}
      {...props}
    >
      {data.map((item, index) => (
        <li key={item.id}>{elementItem(item, index)}</li>
      ))}
    </ul>
  );
}
