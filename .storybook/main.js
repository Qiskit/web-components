/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const { join } = require('path');
const copy = require('rollup-plugin-copy');

const typescript = require('@rollup/plugin-typescript');
const { default: litcss } = require('rollup-plugin-lit-css');
const sass = require('sass');

const transformSassToCss = (data, { filePath }) =>
  sass
    .renderSync({
      data,
      file: filePath,
      includePaths: [join(__dirname, '../node_modules')],
    })
    .css.toString();

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
        transform: transformSassToCss,
      }),
      copy({
        targets: [{ src: 'assets', dest: 'storybook-static' }],
      })
    );

    return config;
  },
};
