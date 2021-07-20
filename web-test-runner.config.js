/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { playwrightLauncher } from '@web/test-runner-playwright';

import wdsBaseConfig from './wds-base.config.js';

export default {
  ...wdsBaseConfig,
  files: 'components/**/*.test.ts',
  browsers: [
    playwrightLauncher({ product: 'chromium' }),
    playwrightLauncher({ product: 'webkit' }),
    playwrightLauncher({ product: 'firefox' }),
  ],
};
