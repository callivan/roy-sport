import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  return (
    <div
      className={classNames(
        // Position
        'relative',

        // Size
        'w-full h-full',

        // Grid
        'grid grid-cols-2 grid-rows-rootLayout gap-x-2 gap-y-4 col-span-1 row-span-2',
        // Mobile big
        's:col-span-full s:row-span-1',

        // Indent
        'px-3 py-3',
        // Mobile big
        's:px-2',

        // Color
        'bg-white-900',

        // Layer
        'isolate z-[-1]',

        // Visibility
        'overflow-hidden',
      )}
    >
      <div
        className={classNames(
          // Grid
          'col-span-full row-start-1 row-end-2',
        )}
      >
        <Skeleton width="100%" height="100%" />
      </div>

      <div
        className={classNames(
          // Font
          'font-medium text-h1 whitespace-pre-wrap break-words',

          // Grid
          'col-span-full  row-start-2 row-end-3',
        )}
      >
        <Skeleton width="100%" height="100%" />
      </div>

      <div
        className={classNames(
          // Flex
          'flex flex-col gap-1',

          // Grid
          'col-span-full row-start-3 row-end-4 self-end',
        )}
      >
        <Skeleton width="100%" height="100%" />
        <Skeleton width="100%" height="100%" />
      </div>
    </div>
  );
}
