import { Loader } from '@entities';
import classNames from 'classnames';

export default function Loading() {
  return (
    <div
      className={classNames(
        // Position
        'relative',

        // Grid
        'col-span-2 row-span-2',

        // Flex
        'flex items-center justify-center',

        // Layer
        'z-[-1]',

        // Visibility
        'overflow-hidden',

        // Size
        'w-full h-full',
      )}
    >
      <Loader />
    </div>
  );
}
