import { config, useSpring, useSpringRef } from '@react-spring/web';

export const useFilterAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: {
      opacity: 0,
      transform: 'translateY(-30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0px)',
    },
    config: config.wobbly,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true, config: config.stiff });

  return { start, reverse, styles };
};
