import { toSVG } from '@carbon/icon-helpers';
import ChevronDown from '@carbon/icons/es/chevron--down/16.js';

export default (attrs?: { [attr: string]: unknown }) =>
  toSVG({
    ...ChevronDown,
    attrs: {
      ...ChevronDown.attrs,
      preserveAspectRatio: 'none',
      ...(attrs || {}),
    },
  });
