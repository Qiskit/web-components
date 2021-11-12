/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import litcss from 'rollup-plugin-lit-css';
import sass from 'sass';

const transformSassToCss = (data, { filePath }) =>
  sass
    .renderSync({
      data,
      file: filePath,
      includePaths: [new URL('node_modules/', import.meta.url).pathname],
    })
    .css.toString();

export default {
  input: 'index.js',
  plugins: [
    litcss({
      include: '**/*.scss',
      transform: transformSassToCss,
      uglify: true,
    }),
  ],
  output: {
    dir: './',
    format: 'esm',
    sourcemap: true,
  },
  external: ['tslib', 'lit', /^lit\/.*/, /^carbon-web-components\/.*/],
};
