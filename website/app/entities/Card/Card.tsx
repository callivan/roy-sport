import { imageLoader } from '@shared/utils';
import classNames from 'classnames';
import Image from 'next/image';

import { TCardProps } from './types/component';

export function Card({ src, preview, alt, name, price, className, ...props }: TCardProps) {
  const formatter = new Intl.NumberFormat('ru', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <button
      className={classNames(
        // Custom class name
        className,

        // Visibility
        'cursor-pointer',

        // Flex
        'flex flex-col',

        // Position
        'relative',

        // Border
        'border-t border-l border-solid',

        // Color
        'border-gray-450',

        // Size
        // eslint-disable-next-line sonarjs/no-duplicate-string
        'w-full h-full',

        // Layer
        'isolate',

        // Transition
        'group transition-transform duration-200 ease-in-out',

        // Hover
        'hover:scale-[0.98]',

        // Active
        'active:scale-[0.96]',
      )}
      {...props}
    >
      <div
        className={classNames(
          // Position
          'relative',

          // Size
          'w-full h-full',
        )}
      >
        <Image
          loader={imageLoader}
          alt={alt}
          src={src}
          fill
          placeholder="blur"
          sizes="100%"
          blurDataURL={preview}
          quality={60}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            flexShrink: 0,
          }}
        />
      </div>

      <div
        className={classNames(
          // Color
          'bg-white-900 border-t-gray-450',

          // Size
          'w-full h-max',

          // Flex
          'flex justify-between gap-1',

          // Border
          'border-t-[1px] border-solid',

          // Indent
          'p-1',
        )}
      >
        <span
          className={classNames(
            // Flex
            'basis-[50%]',

            // Font
            'font-regular text-body2 whitespace-pre-wrap break-words text-left',

            // Color
            'text-black-900',
          )}
        >
          {name}
        </span>
        <span
          className={classNames(
            // Flex
            'basis-[50%]',

            // Font
            'font-regular text-body2 whitespace-pre-wrap break-words text-right',

            // Color
            'text-black-900',
          )}
        >
          {formatter.format(price)}
        </span>
      </div>

      <span
        className={classNames(
          // Position
          'absolute top-[0px] left-[0px]',

          // Size
          'w-full h-full',

          // Effect
          'blur-[2px]',

          // Color
          'bg-black-50',

          // Transform
          'translate-x-[6px] translate-y-[6px]',

          // Transition
          'transition-transform duration-200 ease-in-out',

          // Hover
          'group-hover:translate-x-[3px] group-hover:translate-y-[3px]',

          // Active
          'group-active:translate-x-[0px] group-active:translate-y-[0px]',

          // Layer
          'z-[-1]',
        )}
      />
    </button>
  );
}
