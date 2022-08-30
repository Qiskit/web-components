/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CdsHeaderNavItem from 'carbon-web-components/es/components/ui-shell/header-nav-item.js';
import { customElement } from 'lit/decorators.js';


import styles from '../index.scss';

@customElement('qiskit-header-nav-item')
export class QiskitHeaderNavItem extends CdsHeaderNavItem {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-header-nav-item': QiskitHeaderNavItem;
  }
}
