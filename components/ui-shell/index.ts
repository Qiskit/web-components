/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import 'carbon-web-components/es/components/ui-shell/index.js';
import './header/index.js';

import { qiskitLogoIcon } from '../icons/qiskit-logo.js';
import { userIcon } from '../icons/user.js';
import styles from './index.scss';
import { Variant, NAV_ITEMS, SOCIAL_LINKS } from './settings.js';
import type { NavItem, TopLevelNavItem } from './settings.js';

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
          </bx-header-name>
          <bx-header-nav menu-bar-label="Qiskit">
            ${this._getHeaderItems()}
            ${this.variant === Variant.HIDE_ACCOUNT
              ? null
              : this._getAccountHeaderNavItem()}
          </bx-header-nav>
          <qiskit-header-menu-button
            button-label-active="Close menu"
            button-label-inactive="Open menu"
          >
          </qiskit-header-menu-button>
        </div>
      </bx-header>

      <bx-side-nav aria-label="Main mobile navigation" usage-mode="header-nav">
        <bx-side-nav-items>
          ${this._getSideNavItems()}
          ${this.variant === Variant.HIDE_ACCOUNT
            ? null
            : this._getAccountSideNavLink()}
        </bx-side-nav-items>
        <footer class="qiskit-side-nav-footer">
          <div class="qiskit-side-nav-footer__social-container">
            <p class="qiskit-side-nav-footer__social-heading">Stay connected</p>
            <div class="qiskit-side-nav-footer__social-icons">
              ${this._getSocialLinks()}
            </div>
          </div>
          <div class="qiskit-side-nav-footer__copyright">
            © Qiskit | All Rights Reserved
          </div>
        </footer>
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
      >
        ${item?.label}
      </bx-header-nav-item>
    `;
  }

  private _getHeaderMenu(menu: TopLevelNavItem) {
    const isMegaMenu = !!menu?.isMegaMenu;
    if (isMegaMenu) {
      return html`
        <qiskit-header-menu-mega
          menu-label="${menu?.label}"
          trigger-content="${menu?.label}"
        >
          ${menu?.children?.map((item) => this._getHeaderMenuItemMega(item))}
        </qiskit-header-menu-mega>
      `;
    }
    return html`
      <qiskit-header-menu
        menu-label="${menu?.label}"
        trigger-content="${menu?.label}"
      >
        ${menu?.children?.map((item) => this._getHeaderMenuItem(item))}
      </qiskit-header-menu>
    `;
  }

  private _getHeaderMenuItem(item: NavItem) {
    return html`
      <bx-header-menu-item
        href="${ifDefined(item?.url)}"
        @click="${() => {
          this._handleClick(item);
        }}"
      >
        ${item?.label}
      </bx-header-menu-item>
    `;
  }

  private _getHeaderMenuItemMega(item: NavItem) {
    return html`
      <qiskit-header-menu-item-mega .item="${item}">
      </qiskit-header-menu-item-mega>
    `;
  }

  private _getAccountHeaderNavItem() {
    return html`
      <bx-header-nav-item
        href="https://learn.qiskit.org/account/"
        class="qiskit-user-account-icon"
        @click="${() => {
          this._handleClick({
            label: 'Account',
            url: 'https://learn.qiskit.org/account/',
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

  private _getSideNavMenu(menu: TopLevelNavItem) {
    const isMegaMenu = !!menu?.isMegaMenu;
    if (isMegaMenu) {
      const submenu: NavItem[] = menu?.children || [];
      return html`
        <bx-side-nav-menu title="${menu?.label}">
          ${submenu?.map((submenuItem) => {
            return html`
              <bx-side-nav-menu
                title="${submenuItem?.label}"
                class="qiskit-side-nav-submenu"
              >
                ${submenuItem?.children?.map((child) =>
                  this._getSideNavMenuItem(child, true)
                )}
              </bx-side-nav-menu>
            `;
          })}
        </bx-side-nav-menu>
        <bx-side-nav-divider></bx-side-nav-divider>
      `;
    }
    return html`
      <bx-side-nav-menu title="${menu?.label}">
        ${menu?.children?.map((item) => this._getSideNavMenuItem(item))}
      </bx-side-nav-menu>
      <bx-side-nav-divider></bx-side-nav-divider>
    `;
  }

  private _getSideNavMenuItem(item: NavItem, isSubmenuItem = false) {
    const submenuClass = isSubmenuItem
      ? 'qiskit-nav-submenu-item'
      : 'qiskit-nav-menu-item';
    return html`
      <bx-side-nav-menu-item
        href="${ifDefined(item?.url)}"
        class="${submenuClass}"
        @click="${() => {
          this._handleClick(item);
        }}"
      >
        ${item?.label}
      </bx-side-nav-menu-item>
    `;
  }

  private _getAccountSideNavLink() {
    return html`
      <bx-side-nav-link
        href="https://learn.qiskit.org/account/"
        class="qiskit-user-account-icon"
        @click="${() => {
          this._handleClick({
            label: 'Account',
            url: 'https://learn.qiskit.org/account/',
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

  _handleClick = (item: NavItem) => {
    this.dispatchEvent(
      new CustomEvent('on-click', {
        detail: {
          label: item.label,
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
