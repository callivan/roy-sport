import { LIMIT } from '@consts';
import { Scroll } from '@shared/ui';
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

export default function Loading() {
  return (
    <div
      className={classNames(
        // Position
        'relative',

        // Flex
        'flex flex-col',

        // Grid
        'col-span-1 row-span-2',
        // Mobile big
        's:col-span-full s:row-span-1',

        // Size
        'w-full h-full',

        // Indent
        'pl-5 pr-1 pb-3',
        // Tablet big
        'lg:pl-4',
        // Mobile big
        's:pl-3',
        // Mobile small
        'xs:pl-2 pb-2',

        // Layers
        'z-[-1]',
      )}
    >
      <div
        className={classNames(
          // Position
          'absolute top-[0px] left-[0px]',

          // Layers
          'z-[1]',

          // Color
          'bg-white-50',

          // Effect
          'backdrop-blur-[5px]',

          // Size
          'w-full h-max',

          // Indent
          'px-5 py-[12px]',
          // Tablet big
          'lg:px-4',
          // Mobile big
          's:px-3',
          // Mobile small
          'xs:px-2',
        )}
      >
        <div className={classNames('flex items-center gap-3 flex-wrap')}>
          <Skeleton width={200} height={36} />
        </div>
      </div>

      <Scroll
        className={classNames(
          // Flex
          'flex-grow',

          // Indent
          'pr-[40px] py-[80px]',
          // Tablet big
          'lg:pr-3',
          // Mobile big
          's:pr-2 s:pt-[150px]',
          // Mobile small
          'xs:pr-1',
        )}
      >
        <div
          className={classNames(
            // Grid
            'grid grid-cols-products auto-rows-products gap-5 justify-center',

            // Tablet big
            'lg:gap-2',

            // Size
            'w-full h-full',

            // Indent
            'pr-[40px]',
            // Tablet big
            'lg:pr-3',
            // Mobile big
            's:pr-2',
            // Mobile small
            'xs:pr-1',
          )}
        >
          {Array.from({ length: LIMIT }, (_, i) => (
            <Skeleton key={i} width="100%" height="100%" />
          ))}
        </div>
      </Scroll>

      <div
        className={classNames(
          // Position
          'absolute bottom-[0px] left-[0px]',

          // Layers
          'z-[1]',

          // Color
          'bg-white-50',

          // Effect
          'backdrop-blur-[5px]',

          // Size
          'w-full h-max',

          // Indent
          'px-5 py-2',
          // Tablet big
          'lg:px-4',
          // Mobile big
          's:px-3',
          // Mobile small
          'xs:px-2',
        )}
      >
        <div className={classNames('flex items-center gap-3 justify-end')}>
          <Skeleton width={198} height={36} />
        </div>
      </div>
    </div>
  );
}
