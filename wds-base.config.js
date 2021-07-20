/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import rollupPostcss from 'rollup-plugin-postcss';
import rollupPostcssLit from 'rollup-plugin-postcss-lit';

const postcss = fromRollup(rollupPostcss);
const postcssLit = fromRollup(rollupPostcssLit.default);

export default {
  nodeResolve: true,
  mimeTypes: {
    '**/*.scss': 'js',
  },
  plugins: [
    esbuildPlugin({ ts: true }),
    postcss({ inject: false }),
    postcssLit({ importPackage: 'lit' }),
  ],
};
