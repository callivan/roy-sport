import classNames from 'classnames';

export function Ellipsis() {
  return (
    <span
      className={classNames(
        // Color
        'text-black-900',

        // Size
        'w-max h-max',

        // Fonts
        'font-regular text-body2 break-words whitespace-pre-wrap text-center tracking-wide',

        // Indent
        'px-1 py-1',
      )}
    >
      ...
    </span>
  );
}
