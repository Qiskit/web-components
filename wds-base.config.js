/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { esbuildPlugin } from '@web/dev-server-esbuild';
import { fromRollup } from '@web/dev-server-rollup';
import rollupLitcss from 'rollup-plugin-lit-css';
import sass from 'sass';

const transformSassToCss = (data, { filePath }) =>
  sass
    .renderSync({
      data,
      file: filePath,
      includePaths: [new URL('node_modules/', import.meta.url).pathname],
    })
    .css.toString();

const litcss = fromRollup(rollupLitcss);

export default {
  nodeResolve: true,
  mimeTypes: {
    '**/*.scss': 'js',
  },
  plugins: [
    esbuildPlugin({ ts: true }),
    litcss({
      include: '**/*.scss',
      transform: transformSassToCss,
    }),
  ],
};
