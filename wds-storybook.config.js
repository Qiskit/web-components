/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { storybookPlugin } from '@web/dev-server-storybook';

import wdsBaseConfig from './wds-base.config.js';

export default {
  ...wdsBaseConfig,
  watch: true,
  plugins: [
    ...wdsBaseConfig.plugins,
    storybookPlugin({ type: 'web-components' }),
  ],
};
