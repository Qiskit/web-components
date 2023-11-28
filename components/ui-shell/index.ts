/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import '@carbon/web-components/es/components/ui-shell/index.js';
import './header/index.js';

import styles from './index.scss';
import { Variant, NAV_ITEMS, SOCIAL_LINKS } from './settings.js';
import type { NavItem } from './settings.js';
import { qiskitLogoIcon } from '../icons/qiskit-logo.js';
import { userIcon } from '../icons/user.js';

const LEARN_BASE_URL =
  window.origin === 'https://qiskit.org'
    ? 'https://learn.qiskit.org'
    : window.origin;

@customElement('qiskit-ui-shell')
export class QiskitUIShell extends LitElement {
  static styles = [styles];

  @property({ type: String })
  variant: Variant = Variant.DEFAULT;

  private _NAV_ITEMS = NAV_ITEMS;
  private _SOCIAL_LINKS = SOCIAL_LINKS;

  render() {
    return html`
      <bx-header aria-label="Qiskit">
        <div class="qiskit-header-content">
          <bx-header-name
            href="https://qiskit.org/"
            @click="${() => {
              this._handleClick({
                label: 'Home',
                url: 'https://qiskit.org',
              });
            }}"
          >
            ${qiskitLogoIcon}
            <div class="qiskit-header-brand">Community</div>
          </bx-header-name>
          <bx-header-nav menu-bar-label="Qiskit">
            ${this._getHeaderItems()}
            ${this.variant === Variant.HIDE_ACCOUNT
              ? this._getAccountHeaderNavItem()
              : null}
          </bx-header-nav>
          <qiskit-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          >
          </qiskit-header-menu-button>
        </div>
      </bx-header>

      <bx-side-nav
        aria-label="Main mobile navigation"
        usage-mode="header-nav"
        tabindex="-1"
      >
        <bx-side-nav-items>
          ${this._getSideNavItems()}
          ${this.variant === Variant.HIDE_ACCOUNT
            ? null
            : this._getAccountSideNavLink()}
        </bx-side-nav-items>
        <div class="qiskit-side-nav-footer">
          <div class="qiskit-side-nav-footer__social-container">
            <p class="qiskit-side-nav-footer__social-heading">Stay connected</p>
            <div class="qiskit-side-nav-footer__social-icons">
              ${this._getSocialLinks()}
            </div>
          </div>
          <div class="qiskit-side-nav-footer__copyright">
            © Qiskit | All Rights Reserved
          </div>
        </div>
      </bx-side-nav>
    `;
  }

  private _getHeaderItems() {
    return this._NAV_ITEMS.map((item) => {
      if (item.children) {
        return this._getHeaderMenu(item);
      } else {
        return this._getHeaderNavItem(item);
      }
    });
  }

  private _getHeaderNavItem(item: NavItem) {
    return html`
      <bx-header-nav-item
        href="${ifDefined(item?.url)}"
        @click="${() => {
          this._handleClick(item);
        }}"
        ><div class="grid-arrow-icon">
          ${item?.label}
          <div class="arrow-icon">${item?.arrowSvg}</div>
        </div>
      </bx-header-nav-item>
    `;
  }

  private _getHeaderMenu(menu: NavItem) {
    return html`
      <qiskit-header-menu
        menu-label="${menu?.label}"
        trigger-content="${menu?.label}"
      >
        ${menu?.children?.map((item) =>
          this._getHeaderMenuItem(item, menu?.label)
        )}
      </qiskit-header-menu>
    `;
  }

  private _getHeaderMenuItem(item: NavItem, parentLabel: string) {
    return html`
      <bx-header-menu-item
        href="${ifDefined(item?.url)}"
        @click="${() => {
          this._handleClick(item, parentLabel);
        }}"
      >
        ${item?.label}
      </bx-header-menu-item>
    `;
  }

  private _getAccountHeaderNavItem() {
    return html`
      <bx-header-nav-item
        href="${LEARN_BASE_URL}/account/"
        class="qiskit-user-account-icon"
        @click="${() => {
          this._handleClick({
            label: 'Account',
            url: `${LEARN_BASE_URL}/account/`,
          });
        }}"
      >
        ${userIcon}
      </bx-header-nav-item>
    `;
  }

  private _getSideNavItems() {
    return this._NAV_ITEMS.map((item) => {
      if (item?.children) {
        return this._getSideNavMenu(item);
      } else {
        return this._getSideNavLink(item);
      }
    });
  }

  private _getSideNavLink(item: NavItem) {
    return html`
      <bx-side-nav-link
        href="${ifDefined(item?.url)}"
        @click="${() => {
          this._handleClick(item);
        }}"
      >
        ${item?.label}
      </bx-side-nav-link>
      <bx-side-nav-divider></bx-side-nav-divider>
    `;
  }

  private _getSideNavMenu(menu: NavItem) {
    return html`
      <bx-side-nav-menu title="${menu?.label}">
        ${menu?.children?.map((item) =>
          this._getSideNavMenuItem(item, menu?.label)
        )}
      </bx-side-nav-menu>
      <bx-side-nav-divider></bx-side-nav-divider>
    `;
  }

  private _getSideNavMenuItem(
    item: NavItem,
    parentLabel: string,
    isSubmenuItem = false
  ) {
    const submenuClass = isSubmenuItem
      ? 'qiskit-nav-submenu-item'
      : 'qiskit-nav-menu-item';
    return html`
      <bx-side-nav-menu-item
        href="${ifDefined(item?.url)}"
        class="${submenuClass}"
        @click="${() => {
          this._handleClick(item, parentLabel);
        }}"
      >
        ${item?.label} ${item?.arrowSvg}
      </bx-side-nav-menu-item>
    `;
  }

  private _getAccountSideNavLink() {
    return html`
      <bx-side-nav-link
        href="${LEARN_BASE_URL}/account/"
        class="qiskit-user-account-icon"
        @click="${() => {
          this._handleClick({
            label: 'Account',
            url: `${LEARN_BASE_URL}/account/`,
          });
        }}"
      >
        ${userIcon} <span>Profile</span>
      </bx-side-nav-link>
    `;
  }

  private _getSocialLinks() {
    return this._SOCIAL_LINKS.map(
      (link) =>
        html`
          <a
            class="qiskit-side-nav-footer__social-icons__icon"
            href="${ifDefined(link.url)}"
            rel="noopener"
            target="_blank"
            title="${link.label}"
          >
            ${link.icon}
          </a>
        `
    );
  }

  _handleClick = (item: NavItem, parentLabel?: string) => {
    const label = parentLabel ? `${parentLabel}-${item.label}` : item.label;

    this.dispatchEvent(
      new CustomEvent('on-click', {
        detail: {
          label,
          url: item.url,
        },
        bubbles: true,
        composed: true,
      })
    );
  };
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-ui-shell': QiskitUIShell;
  }
}
