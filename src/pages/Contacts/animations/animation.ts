import { config, useSpring, useSpringRef } from '@react-spring/web';

export const useShowAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    to: { opacity: 0 },
    from: { opacity: 1 },
    config: config.stiff,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true });

  return { start, reverse, styles };
};
