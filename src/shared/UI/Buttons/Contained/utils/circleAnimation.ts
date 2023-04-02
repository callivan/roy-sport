import { theme } from '@shared';

interface CircleAnimationProps {
  button: HTMLButtonElement;
  circleElement: HTMLDivElement;
  clickPosition: { x: number; y: number };
}

export function circleAnimation({ button, circleElement, clickPosition }: CircleAnimationProps) {
  const rect = button.getBoundingClientRect();
  const buttonPosition = { x: rect.x, y: rect.y };

  const circleStartPosition = {
    x: Math.ceil(clickPosition.x - buttonPosition.x),
    y: Math.ceil(clickPosition.y - buttonPosition.y),
  };

  circleElement.animate(
    [
      {
        opacity: 1,
        clipPath: `circle(0% at ${circleStartPosition.x}px ${circleStartPosition.y}px)`,
        backgroundColor: theme.colors.gray_clear,
      },
      {
        opacity: 0,
        clipPath: `circle(150% at ${circleStartPosition.x}px ${circleStartPosition.y}px )`,
        backgroundColor: theme.colors.gray_clear,
      },
    ],
    {
      duration: 4000,
      easing: 'cubic-bezier(0.075, 0.820, 0.165, 1.000)',
      iterations: 1,
    },
  );
}
