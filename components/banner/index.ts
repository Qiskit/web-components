/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './index.scss';

@customElement('qiskit-banner')
export class QiskitBanner extends LitElement {
  static styles = [styles];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-banner': QiskitBanner;
  }
}
