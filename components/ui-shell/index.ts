/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import 'carbon-web-components/es/components/ui-shell/index.js';
import './header/index.js';

import styles from './index.scss';

@customElement('qiskit-ui-shell')
export class QiskitUIShell extends LitElement {
  static styles = [styles];

  render() {
    return html`
      <bx-header aria-label="Qiskit" class="qiskit-header">
        <qiskit-header-name href="javascript:void 0">Qiskit</qiskit-header-name>
        <qiskit-header-nav menu-bar-label="Qikskit">
          <qiskit-header-nav-item href="https://qiskit.org/overview/">
            Overview
          </qiskit-header-nav-item>
          <qiskit-header-nav-item href="javascript:void 0">
            Learn
          </qiskit-header-nav-item>
          <qiskit-header-menu
            menu-label="Community"
            trigger-content="Community"
          >
            <qiskit-header-menu-item href="javascript:void 0">
              Events
            </qiskit-header-menu-item>
            <qiskit-header-menu-item href="javascript:void 0">
              Advocates
            </qiskit-header-menu-item>
          </qiskit-header-menu>
          <qiskit-header-nav-item href="javascript:void 0">
            Documentation
          </qiskit-header-nav-item>
        </qiskit-header-nav>

        <qiskit-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"
        ></qiskit-header-menu-button>
      </bx-header>

      <bx-side-nav
        aria-label="Main mobile navigation"
        usage-mode="header-nav"
        class="qiskit-side-nav"
      >
        <bx-side-nav-items>
          <bx-side-nav-menu title="L0 menu">
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
          </bx-side-nav-menu>
          <bx-side-nav-menu title="L0 menu">
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
            <bx-side-nav-menu-item
              active
              aria-current="page"
              href="www.ibm.com"
            >
              L0 menu item
            </bx-side-nav-menu-item>
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
          </bx-side-nav-menu>
          <bx-side-nav-menu title="L0 menu">
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
            <bx-side-nav-menu-item href="www.ibm.com">
              L0 menu item
            </bx-side-nav-menu-item>
          </bx-side-nav-menu>
          <bx-side-nav-divider></bx-side-nav-divider>
          <bx-side-nav-link href="javascript:void(0)">L0 link</bx-side-nav-link>
          <bx-side-nav-link href="javascript:void(0)">L0 link</bx-side-nav-link>
        </bx-side-nav-items>
      </bx-side-nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-ui-shell': QiskitUIShell;
  }
}
