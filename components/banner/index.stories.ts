/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

import './index.js';

export default {
  title: 'Banner',
};

export const ShortContent = () => html`
  <qiskit-banner>Lorem ipsum dolor sit amet</qiskit-banner>
`;

export const LongContent = () => html`
  <qiskit-banner>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </qiskit-banner>
`;

export const WithLink = () => html`
  <qiskit-banner>
    Lorem ipsum dolor sit amet. <a href="#">Click here!</a>
  </qiskit-banner>
`;
