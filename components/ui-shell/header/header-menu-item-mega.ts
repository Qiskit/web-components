/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from '../index.scss';
import type { NavItem } from '../settings.js';

@customElement('qiskit-header-menu-item-mega')
export class QiskitHeaderMenuItemMega extends LitElement {
  static styles = [styles];

  @property({ type: Object })
  item = {} as NavItem;

  @property({ type: String })
  parentLabel = '';

  render() {
    return html`
      <div class="qiskit-header-menu-item-mega">
        <p class="qiskit-header-menu-item-mega-heading">${this.item?.label}</p>
      </div>
    `;
  }

  _handleClick = (item: NavItem) => {
    this.dispatchEvent(
      new CustomEvent('on-click', {
        detail: {
          label: `${this.parentLabel}-${item.label}`,
          url: item.url,
        },
        bubbles: true,
        composed: true,
      })
    );
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-header-menu-item-mega': QiskitHeaderMenuItemMega;
  }
}
