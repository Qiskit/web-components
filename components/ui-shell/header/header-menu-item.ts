/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CdsHeaderMenuItem from 'carbon-web-components/es/components/ui-shell/header-menu-item.js';
import { customElement } from 'lit/decorators.js';

import styles from '../index.scss';

@customElement('qiskit-header-menu-item')
export class QiskitHeaderMenuItem extends CdsHeaderMenuItem {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-header-menu-item': QiskitHeaderMenuItem;
  }
}
