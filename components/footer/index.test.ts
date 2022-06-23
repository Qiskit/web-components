/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import './index.js';

describe('footer', () => {
  it('loads default content', async () => {
    const el = await fixture(html`<qiskit-footer></qiskit-footer>`);

    expect(el.shadowRoot?.hasChildNodes()).to.be.equal(true);
    expect(el.shadowRoot?.innerHTML).to.contains('<footer>');
  });
});
