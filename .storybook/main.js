/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const typescript = require('@rollup/plugin-typescript');
const litcss = require('rollup-plugin-lit-css');
const sass = require('sass');

module.exports = {
  stories: ['../components/**/*.stories.ts'],

  rollupConfig(config) {
    config.plugins.push(
      typescript({
        declaration: false,
        sourceMap: false,
        inlineSources: false,
      }),
      litcss({
        include: '**/*.scss',
        transform: (data, { filePath }) =>
          sass.renderSync({ data, file: filePath }).css.toString(),
      })
    );

    return config;
  },
};
