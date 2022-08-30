/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CdsHeaderName from 'carbon-web-components/es/components/ui-shell/header-name.js';
import { customElement } from 'lit/decorators.js';


import styles from '../index.scss';

@customElement('qiskit-header-name')
export class QiskitHeaderName extends CdsHeaderName {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-header-name': QiskitHeaderName;
  }
}
