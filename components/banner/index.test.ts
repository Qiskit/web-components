/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import './index.js';

describe('banner', () => {
  it('loads slot content', async () => {
    const el = await fixture(
      html`<qiskit-banner>Lorem, ipsum dolor sit amet</qiskit-banner>`
    );

    expect(el).shadowDom.to.equal('<slot></slot>');
    expect(el).lightDom.to.equal('Lorem, ipsum dolor sit amet');
  });
});
