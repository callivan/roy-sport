import React from 'react';
import { DefaultTheme } from 'styled-components';

import { theme } from '../Theme';

type TIconChevroneProps = Omit<React.SVGProps<SVGSVGElement>, 'color'> & {
  color?: keyof DefaultTheme['colors'];
};

export function IconChevron(props: TIconChevroneProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.125 21.0999L6.7 12.6999C6.6 12.5999 6.529 12.4916 6.487 12.3749C6.445 12.2582 6.42434 12.1332 6.425 11.9999C6.425 11.8666 6.44567 11.7416 6.487 11.6249C6.52834 11.5082 6.59934 11.3999 6.7 11.2999L15.125 2.8749C15.3583 2.64157 15.65 2.5249 16 2.5249C16.35 2.5249 16.65 2.6499 16.9 2.8999C17.15 3.1499 17.275 3.44157 17.275 3.7749C17.275 4.10824 17.15 4.3999 16.9 4.6499L9.55 11.9999L16.9 19.3499C17.1333 19.5832 17.25 19.8709 17.25 20.2129C17.25 20.5549 17.125 20.8506 16.875 21.0999C16.625 21.3499 16.3333 21.4749 16 21.4749C15.6667 21.4749 15.375 21.3499 15.125 21.0999Z"
        fill={props.color ? theme.colors[props.color] : 'currentColor'}
      />
    </svg>
  );
}
