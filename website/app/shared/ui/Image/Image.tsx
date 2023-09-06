'use client';

import Image from 'next/image';

import { TImageProps } from './types/component';
import { imageLoader } from './utils/indext';

export function MyImage({ alt, ...props }: TImageProps) {
  return <Image loader={imageLoader} alt={alt} {...props} />;
}
