import { config, useSpring, useSpringRef } from '@react-spring/web';

export const useContainerAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: 'translateY(-80px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.slow,
  });
  const start = () => api.start();

  return { start, styles };
};
