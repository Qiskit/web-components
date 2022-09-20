import { toSVG } from '@carbon/icon-helpers';
import ArrowRight from '@carbon/icons/es/arrow--right/16.js';

export default (attrs?: { [attr: string]: unknown }) =>
  toSVG({
    ...ArrowRight,
    attrs: {
      ...ArrowRight.attrs,
      preserveAspectRatio: 'none',
      ...(attrs || {}),
    },
  });
