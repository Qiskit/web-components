/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CdsHeaderNav from 'carbon-web-components/es/components/ui-shell/header-nav.js';
import { customElement } from 'lit/decorators.js';


import styles from '../index.scss';

@customElement('qiskit-header-nav')
export class QiskitHeaderNav extends CdsHeaderNav {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-header-nav': QiskitHeaderNav;
  }
}
