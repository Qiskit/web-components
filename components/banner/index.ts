/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('qiskit-banner')
export class QiskitBanner extends LitElement {
  static styles = [
    // TODO: Update the styles to match the design system
    css`
      :host {
        display: flex;
        align-items: center;
        padding: 0.75rem 1.5rem;
        color: #fff;
        font-weight: 400;
        font-size: 0.875rem;
        font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
        line-height: 1.43;
        letter-spacing: 0.16px;
        background: #491d8b;
      }

      ::slotted(a) {
        color: #fff;
        text-decoration: underline;
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-banner': QiskitBanner;
  }
}
