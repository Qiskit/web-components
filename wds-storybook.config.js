/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { esbuildPlugin } from '@web/dev-server-esbuild';
import { storybookPlugin } from '@web/dev-server-storybook';

export default {
  nodeResolve: true,
  watch: true,
  open: true,
  plugins: [
    esbuildPlugin({ ts: true }),
    storybookPlugin({ type: 'web-components' }),
  ],
};
