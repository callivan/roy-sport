import { config, useSpringRef, useTrail } from '@react-spring/web';

interface IUseShowProps {
  count: number;
}

export const useHorizontalAnimation = ({ count }: IUseShowProps) => {
  const api = useSpringRef();
  const trails = useTrail(count, {
    ref: api,
    from: { transform: 'translateY(-88px)' },
    to: { transform: 'translateY(0px)' },
    config: { ...config.wobbly, friction: 9 },
  });
  const start = () => api.start();
  const reverse = () => api.start({ reverse: true, config: config.stiff });

  return { start, reverse, trails };
};
