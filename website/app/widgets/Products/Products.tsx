import { Filter, List } from '@features';
import { Scroll } from '@shared/ui';
import classNames from 'classnames';

export function Products({ className, ...props }: React.ComponentPropsWithRef<'div'>) {
  return (
    <div
      className={classNames(
        // Custom class name
        className,

        // Position
        'relative',

        // Indent
        'pl-5 pr-1 pb-3',
        // Tablet big
        'lg:pl-4',
        // Mobile big
        's:pl-3',
        // Mobile small
        'xs:pl-2 pb-2',
      )}
      {...props}
    >
      <div
        className={classNames(
          // Position
          'absolute top-[0px] left-[0px]',

          // Layer
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
        <Filter />
      </div>

      <Scroll
        className={classNames(
          // Flex
          'flex-grow',

          // Indent
          'pr-[40px] pt-[80px]',
          // Tablet big
          'lg:pr-3',
          // Mobile big
          's:pr-2 s:pt-[150px]',
          // Mobile small
          'xs:pr-1',
        )}
      >
        <List />
      </Scroll>
    </div>
  );
}
