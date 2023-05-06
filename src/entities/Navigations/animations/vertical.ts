import { config, useSpringRef, useTrail } from '@react-spring/web';

interface IUseShowProps {
  count: number;
}

export const useVerticalAnimation = ({ count }: IUseShowProps) => {
  const api = useSpringRef();
  const trails = useTrail(count, {
    ref: api,
    from: { transform: 'translateX(-200px)' },
    to: { transform: 'translateX(0px)' },
    config: { ...config.wobbly, friction: 13 },
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true, config: config.stiff });

  return { start, reverse, trails };
};
