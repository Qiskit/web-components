/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import styles from '../index.scss';
import { NavItem } from '../settings.js';

@customElement('qiskit-header-menu-item-mega')
export class QiskitHeaderMenuItemMega extends LitElement {
  static styles = [styles];

  @property({ type: Object })
  item = {} as NavItem;

  render() {
    return html`
      <div class="qiskit-header-menu-item-mega">
        <p class="qiskit-header-menu-item-mega-heading">${this.item?.label}</p>
        <ul class="qiskit-header-menu-item-mega-list">
          ${this.item?.children?.map((item) => {
            return html`<li>
              <a href="${ifDefined(item?.url)}"> ${item.label} </a>
            </li>`;
          })}
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-header-menu-item-mega': QiskitHeaderMenuItemMega;
  }
}
