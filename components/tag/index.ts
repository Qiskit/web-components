/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('qiskit-tag')
export class QiskitTag extends LitElement {
  static styles = [
    // TODO: Update the styles to match the design system
    css`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 2rem;
        max-width: 100%;
        min-height: 1.5rem;
        margin: 0.25rem;
        padding: 0.25rem 0.5rem;
        color: #393939;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.34;
        letter-spacing: 0.32px;
        vertical-align: middle;
        word-break: break-word;
        background: 0 0;
        background-color: #e0e0e0;
        border: 0;
        border-radius: 0.9375rem;
        cursor: default;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
      }
    `,
  ];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-tag': QiskitTag;
  }
}
