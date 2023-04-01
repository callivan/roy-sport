export const imageLoader = ({ src, quality }: { src: string; quality?: number }) => {
  return `${src}?q=${quality}&f=webp`;
};
