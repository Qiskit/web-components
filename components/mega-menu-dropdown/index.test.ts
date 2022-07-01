/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fixture, expect, nextFrame, triggerFocusFor } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import { tripleColumnMultiBlock } from './mockData.test.js';

import './index.js';

async function mmdFixture() {
  return await fixture(
    html`<qiskit-mega-menu-dropdown
      placeholder="Browse all content"
      .content="${tripleColumnMultiBlock}"
    ></qiskit-mega-menu-dropdown>`
  );
}

describe('mega menu dropdown', () => {
  it('passes accessibility test', async () => {
    const el = await mmdFixture();
    await expect(el).to.be.accessible();
  });
  it('can be opened and closed', async () => {
    const el = await mmdFixture();

    if (!el.shadowRoot) {
      expect.fail('Cannot find shadow root');
    }

    const contentSelector = '.content';
    const filterButton: HTMLButtonElement | null =
      el.shadowRoot.querySelector('.filter__button');

    expect(el.shadowRoot?.querySelector(contentSelector)).to.not.exist;
    expect(filterButton).to.exist;

    filterButton?.click();
    await nextFrame();
    expect(filterButton).to.be.visible;
    expect(el.shadowRoot?.querySelector(contentSelector)).to.exist.and.be
      .visible;

    filterButton?.click();
    await nextFrame();
    expect(filterButton).to.be.visible;
    expect(el.shadowRoot?.querySelector(contentSelector)).to.not.exist;
  });

  it('should show empty view', async () => {
    const el = await mmdFixture();

    if (!el.shadowRoot) {
      expect.fail('Cannot find shadowRoot');
    }

    const filterInput: HTMLInputElement | null =
      el.shadowRoot.querySelector('.filter__input');
    if (!filterInput) {
      expect.fail("Cannot find '.filter__input'");
    }

    triggerFocusFor(filterInput);
    filterInput.value = 'ExpectEmptyContentForSure';
    filterInput.dispatchEvent(new Event('keyup'));
    await nextFrame();
    expect(filterInput).to.be.visible;
    expect(el.shadowRoot?.querySelector('.content-empty')).to.exist.and.be
      .visible;
  });
});
