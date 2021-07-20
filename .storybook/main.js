/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const typescript = require('@rollup/plugin-typescript');
const postcss = require('rollup-plugin-postcss');
const { default: postcssLit } = require('rollup-plugin-postcss-lit');

module.exports = {
  stories: ['../components/**/*.stories.ts'],

  rollupConfig(config) {
    config.plugins.push(
      typescript({
        declaration: false,
        sourceMap: false,
        inlineSources: false,
      }),
      postcss({ inject: false }),
      postcssLit({ importPackage: 'lit' })
    );

    return config;
  },
};
