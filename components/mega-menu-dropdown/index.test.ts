/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import { tripleColumnMultiBlock } from './mockData.js';

import './index.js';

describe('mega menu dropdown', () => {
  it('passes accessibility test', async () => {
    const el = await fixture(
      html`<qiskit-mega-menu-dropdown
        placeholder="Browse all content"
        .content="${tripleColumnMultiBlock}"
      ></qiskit-mega-menu-dropdown>`
    );
    await expect(el).to.be.accessible();
  });
});
