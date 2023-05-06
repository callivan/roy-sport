import { config, useSpring, useSpringRef } from '@react-spring/web';

export const useContentAnimation = () => {
  const api = useSpringRef();
  const styles = useSpring({
    ref: api,
    from: { size: 0 },
    to: { size: 50 },
    config: config.stiff,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true, config: config.default });

  return { start, reverse, styles };
};
