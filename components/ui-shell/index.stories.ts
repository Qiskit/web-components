/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

import './index.js';

export default {
  title: 'UI Shell',
};

export const Default = () => html`<qiskit-ui-shell></qiskit-ui-shell>`;

export const WithAccount = () =>
  html`<qiskit-ui-shell variant="with-account"></qiskit-ui-shell>`;
