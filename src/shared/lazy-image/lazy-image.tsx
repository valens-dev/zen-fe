import {
  LazyLoadImage,
  type LazyLoadImageProps,
} from 'react-lazy-load-image-component';

import 'react-lazy-load-image-component/src/effects/blur.css';

export function LazyImage({
  effect = 'blur',
  ...props
}: LazyLoadImageProps): React.ReactNode {
  return <LazyLoadImage {...props} effect={effect} />;
}
