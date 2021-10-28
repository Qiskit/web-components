/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import postcss from 'rollup-plugin-postcss';
import postcssLit from 'rollup-plugin-postcss-lit';

export default {
  input: 'index.js',
  plugins: [postcss({ inject: false, minimize: true }), postcssLit()],
  output: {
    dir: './',
    format: 'esm',
    sourcemap: true,
  },
  external: ['tslib', 'lit', /^lit\/.*/, /^carbon-web-components\/.*/],
};
