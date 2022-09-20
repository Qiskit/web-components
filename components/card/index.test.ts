/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit/static-html.js';

import './index.js';

describe('card', () => {
  it('loads content', async () => {
    const el = await fixture(
      html`<qiskit-card
        title="my title"
        primaryLinkLabel="primary link"
        primaryLinkHref="https://example.com"
        secondaryLinkLabel="secondary link"
        secondaryLinkHref="https://example-two.com"
      >
        Lorem, ipsum dolor sit amet
      </qiskit-card>`
    );
    const titleSelector = '.card__title';
    const primaryLinkSelector = '.card__footer__btn.primary';
    const secondaryLinkSelector = '.card__footer__btn.secondary';

    expect(el.shadowRoot?.querySelector(titleSelector)?.textContent).to.eq(
      'my title'
    );
    expect(
      el.shadowRoot?.querySelector(primaryLinkSelector)?.innerHTML
    ).to.include('primary link');
    expect(
      el.shadowRoot?.querySelector(primaryLinkSelector)?.getAttribute('href')
    ).to.include('https://example.com');
    expect(
      el.shadowRoot?.querySelector(secondaryLinkSelector)?.innerHTML
    ).to.include('secondary link');
    expect(
      el.shadowRoot?.querySelector(secondaryLinkSelector)?.getAttribute('href')
    ).to.include('https://example-two.com');
  });
});
