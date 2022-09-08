/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import CdsSideNavLink from 'carbon-web-components/es/components/ui-shell/side-nav-link.js';
import { customElement } from 'lit/decorators.js';

import styles from '../index.scss';

@customElement('qiskit-side-nav-link')
export class QiskitSideNavLink extends CdsSideNavLink {
  static styles = [styles];
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-side-nav-link': QiskitSideNavLink;
  }
}
