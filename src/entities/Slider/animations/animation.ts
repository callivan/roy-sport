import { config, useSpring, useSpringRef, useTrail } from '@react-spring/web';

export const useRightAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: 'translateX(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    config: config.wobbly,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true, config: config.stiff });

  return { start, reverse, styles };
};

export const useLeftAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: 'translateX(-30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    config: config.wobbly,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true, config: config.stiff });

  return { start, reverse, styles };
};

export const useShowAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    config: config.stiff,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true });

  return { start, reverse, styles };
};

interface IUseShowProps {
  count: number;
}

export const useDotsAnimation = ({ count }: IUseShowProps) => {
  const api = useSpringRef();
  const trails = useTrail(count, {
    ref: api,
    from: { transform: 'translateY(50px)' },
    to: { transform: 'translateY(0px)' },
    config: { ...config.wobbly, friction: 9 },
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true, config: config.stiff });

  return { start, reverse, trails };
};
