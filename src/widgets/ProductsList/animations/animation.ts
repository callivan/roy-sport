import { config, useSpringRef, useTrail } from '@react-spring/web';

interface IUseShowProps {
  count: number;
}

export const useShowAnimation = ({ count }: IUseShowProps) => {
  const api = useSpringRef();
  const trails = useTrail(count, {
    ref: api,
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.stiff,
  });
  const start = () => api.start();
  const reverse = () => api.start({ reset: true });

  return { start, reverse, trails };
};
