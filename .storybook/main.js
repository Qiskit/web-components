/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const typescript = require('@rollup/plugin-typescript');

module.exports = {
  stories: ['../components/**/*.stories.ts'],

  rollupConfig(config) {
    config.plugins.unshift(
      typescript({
        declaration: false,
        sourceMap: false,
        inlineSources: false,
      })
    );

    return config;
  },
};
