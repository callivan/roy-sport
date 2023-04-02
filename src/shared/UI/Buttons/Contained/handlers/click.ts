import { circleAnimation } from '../utils/circleAnimation';

interface IClickProps {
  e: React.MouseEvent<HTMLButtonElement>;
  circleRef: React.MutableRefObject<HTMLDivElement | null>;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const handleClick = ({ e, circleRef, onClick }: IClickProps) => {
  const target = e.currentTarget;
  const circle = circleRef.current;

  if (!(target instanceof HTMLButtonElement) || !circle) return;

  circleAnimation({
    button: target,
    circleElement: circle,
    clickPosition: { x: e.clientX, y: e.clientY },
  });

  onClick && onClick(e);
};
