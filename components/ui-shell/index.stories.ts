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

export const Default = () =>
  html`<qiskit-ui-shell
    @on-click="${(e) => {
      alert(`label: ${e.detail?.label}, url: ${e.detail?.url}`);
    }}"
  ></qiskit-ui-shell>`;

export const HideAccount = () =>
  html`<qiskit-ui-shell variant="hide-account"></qiskit-ui-shell>`;
