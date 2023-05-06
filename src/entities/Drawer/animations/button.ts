import { config, useSpring, useSpringRef } from '@react-spring/web';

export const useButtonAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(180deg)' },
    config: config.wobbly,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true });

  return { start, reverse, styles };
};
