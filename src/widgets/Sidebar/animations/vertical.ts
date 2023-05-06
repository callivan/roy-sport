import { config, useSpring, useSpringRef } from '@react-spring/web';

export const useVerticalAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: 'translateX(-250px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0px)',
    },
    config: config.slow,
  });
  const start = () => api.start();
  const reverse = () =>
    api.start({
      reverse: true,
      config: config.stiff,
    });

  return { start, reverse, styles };
};
