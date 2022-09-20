/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import 'carbon-web-components/es/components/button/index.js';
import arrowRight from '../icons/arrow-right.js';
import styles from './index.scss';

@customElement('qiskit-card')
export class QiskitCard extends LitElement {
  static styles = [styles];

  @property({ type: String })
  title = '';

  @property({ type: String })
  primaryLinkLabel = '';

  @property({ type: String })
  primaryLinkHref = '';

  @property({ type: String })
  secondaryLinkLabel = '';

  @property({ type: String })
  secondaryLinkHref = '';

  render() {
    return html`
      <div class="card">
        <div class="card__body">
          ${this.title !== '' ? this._getCardTitle() : null}
          <slot></slot>
        </div>
        <div class="card__footer">
          ${this.secondaryLinkLabel !== '' ? this._getSecondaryButton() : null}
          ${this.primaryLinkLabel !== '' ? this._getPrimaryButton() : null}
        </div>
      </div>
    `;
  }

  private _getPrimaryButton() {
    return html`
      <bx-btn class="card__footer__btn primary" href="${this.primaryLinkHref}">
        ${this.primaryLinkLabel}
        ${arrowRight({ class: 'card__footer__btn__icon' })}
      </bx-btn>
    `;
  }

  private _getSecondaryButton() {
    return html`
      <bx-btn
        class="card__footer__btn secondary"
        href="${this.secondaryLinkHref}"
      >
        ${this.secondaryLinkLabel}
        ${arrowRight({ class: 'card__footer__btn__icon' })}
      </bx-btn>
    `;
  }

  private _getCardTitle() {
    return html` <h4 class="card__title">${this.title}</h4> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-card': QiskitCard;
  }
}
