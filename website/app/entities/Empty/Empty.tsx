import classNames from 'classnames';

export function Empty({ text }: { text?: string }) {
  return (
    <div
      className={classNames(
        // Size
        'w-full h-full',

        // Flex
        'flex items-center justify-center',

        // Indent
        'px-5',
        // Tablet big
        'lg:px-4',
        // Mobile big
        's:px-3',
        // Mobile small
        'xs:px-2',
      )}
    >
      <h3
        className={classNames(
          // Font
          'font-medium text-h2 text-center break-words whitespace-pre-wrap',

          // Color
          'text-pink-450',
        )}
      >
        {text ? text : 'Тут пока ничего нет. 😕'}
      </h3>
    </div>
  );
}
