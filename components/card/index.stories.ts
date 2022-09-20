/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

import './index.js';

export default {
  title: 'Card',
};

export const Default = () => html`
  <qiskit-card
    title="Default card title"
    primaryLinkLabel="Primary"
    primaryLinkHref="https://example.com"
    style="width: 500px"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation.
    </p>
  </qiskit-card>
`;

export const WithLinkSet = () => html`
  <qiskit-card
    style="width: 500px"
    title="Card with link set title"
    primaryLinkLabel="Primary"
    primaryLinkHref="https://example.com"
    secondaryLinkLabel="Secondary"
    secondaryLinkHref="https://example.com"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation.
    </p>
  </qiskit-card>
`;
