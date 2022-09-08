/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CdsSideNavMenuItem from 'carbon-web-components/es/components/ui-shell/side-nav-menu-item.js';
import { customElement } from 'lit/decorators.js';

import styles from '../index.scss';

@customElement('qiskit-side-nav-menu-item')
export class QiskitSideNavMenuItem extends CdsSideNavMenuItem {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-side-nav-menu-item': QiskitSideNavMenuItem;
  }
}
