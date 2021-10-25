/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './index.scss';

interface SegmentData {
  cta: string;
  location: string;
}

interface NavLink {
  label: string;
  url: string;
  segment: SegmentData;
}

@customElement('qiskit-navbar')
export class QiskitNavbar extends LitElement {
  static styles = [styles];

  /**
   * The main navigation links.
   */
  @property()
  navItems: NavLink[] = [
    {
      label: 'Overview',
      url: '/overview',
      segment: {
        cta: 'overview',
        location: 'menu',
      },
    },
    {
      label: 'Learn',
      url: '/learn',
      segment: {
        cta: 'learn',
        location: 'menu',
      },
    },
    {
      label: 'Documentation',
      url: '/documentation',
      segment: {
        cta: 'documentation',
        location: 'menu',
      },
    },
  ];

  render() {
    return html`<nav class="navbar">
      <div>Logo</div>
      <div>Toggler</div>
      <div class="navbar__collapse">
        <ul class="navbar__nav">
          ${this.navItems.map(
            (item) => html`<li class="navbar__nav-item">
              <a class="navbar__nav-link" href="${item.url}">${item.label}</a>
            </li>`
          )}
        </ul>
      </div>
    </nav>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-navbar': QiskitNavbar;
  }
}
