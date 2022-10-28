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

const content = [...Array(30).keys()].map(
  () => html`
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam hic quia
      culpa, cum excepturi, qui adipisci, asperiores nesciunt quaerat impedit
      optio eos magni officiis iure tenetur maxime quidem saepe inventore.
    </p>
  `
);

export const Default = () =>
  html`
    <qiskit-ui-shell
      @on-click="${(e: CustomEvent) => {
        alert(`label: ${e.detail?.label}, url: ${e.detail?.url}`);
      }}"
    ></qiskit-ui-shell>
    <div class="content">${content}</div>
  `;

export const HideAccount = () =>
  html`
    <qiskit-ui-shell
      variant="hide-account"
      @on-click="${(e: CustomEvent) => {
        alert(`label: ${e.detail?.label}, url: ${e.detail?.url}`);
      }}"
    ></qiskit-ui-shell>
    <div class="content">${content}</div>
  `;
