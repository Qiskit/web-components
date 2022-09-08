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
import './side-nav/index.js';

import { qiskitLogoIcon } from '../icons/qiskit-logo.js';
import { userIcon } from '../icons/user.js';
import styles from './index.scss';
import { NavItem, TopLevelNavItem, Variant, NAV_ITEMS } from './settings.js';

@customElement('qiskit-ui-shell')
export class QiskitUIShell extends LitElement {
  static styles = [styles];

  @property({ type: String })
  variant: Variant = Variant.DEFAULT;

  private _NAV_ITEMS = NAV_ITEMS;

  render() {
    return html`
      <bx-header aria-label="Qiskit">
        <bx-header-name href="https://qiskit.org/">
          ${qiskitLogoIcon}
        </bx-header-name>
        <qiskit-header-nav menu-bar-label="Qiskit">
          ${this._getHeaderItems()}
          ${this.variant === Variant.HIDE_ACCOUNT
            ? null
            : this._getAccountHeaderNavItem()}
        </qiskit-header-nav>
        <qiskit-header-menu-button
          button-label-active="Close menu"
          button-label-inactive="Open menu"
        >
        </qiskit-header-menu-button>
      </bx-header>

      <bx-side-nav
        aria-label="Main mobile navigation"
        usage-mode="header-nav"
        class="qiskit-side-nav"
      >
        <bx-side-nav-items>
          ${this._getSideNavItems()}
          ${this.variant === Variant.HIDE_ACCOUNT
            ? null
            : this._getAccountSideNavLink()}
        </bx-side-nav-items>
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
      <qiskit-header-nav-item href="${ifDefined(item?.url)}">
        ${item?.label}
      </qiskit-header-nav-item>
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
      <qiskit-header-menu-item href="${ifDefined(item?.url)}">
        ${item?.label}
      </qiskit-header-menu-item>
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
      <qiskit-header-nav-item
        href="https://learn.qiskit.org/account/"
        class="qiskit-user-accout-icon"
      >
        ${userIcon}
      </qiskit-header-nav-item>
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
      <qiskit-side-nav-link href="${ifDefined(item?.url)}">
        ${item?.label}
      </qiskit-side-nav-link>
      <bx-side-nav-divider></bx-side-nav-divider>
    `;
  }

  private _getSideNavMenu(menu: TopLevelNavItem) {
    const isMegaMenu = !!menu?.isMegaMenu;
    if (isMegaMenu) {
      const submenu: NavItem[] = menu?.children || [];
      return html`
        <qiskit-side-nav-menu title="${menu?.label}">
          ${submenu?.map((submenuItem) => {
            return html`
              <qiskit-side-nav-menu
                title="${submenuItem?.label}"
                class="qiskit-side-nav-submenu"
              >
                ${submenuItem?.children?.map((child) =>
                  this._getSideNavMenuItem(child, true)
                )}
              </qiskit-side-nav-menu>
            `;
          })}
        </qiskit-side-nav-menu>
        <bx-side-nav-divider></bx-side-nav-divider>
      `;
    }
    return html`
      <qiskit-side-nav-menu title="${menu?.label}">
        ${menu?.children?.map((item) => this._getSideNavMenuItem(item))}
      </qiskit-side-nav-menu>
      <bx-side-nav-divider></bx-side-nav-divider>
    `;
  }

  private _getSideNavMenuItem(item: NavItem, isSubmenuItem = false) {
    const submenuClass = isSubmenuItem
      ? 'qiskit-nav-submenu-item'
      : 'qiskit-nav-menu-item';
    return html`
      <qiskit-side-nav-menu-item
        href="${ifDefined(item?.url)}"
        class="${submenuClass}"
      >
        ${item?.label}
      </qiskit-side-nav-menu-item>
    `;
  }

  private _getAccountSideNavLink() {
    return html`
      <qiskit-side-nav-link
        href="https://learn.qiskit.org/account/"
        class="qiskit-user-accout-icon"
      >
        ${userIcon} <span>Profile</span>
      </qiskit-side-nav-link>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'qiskit-ui-shell': QiskitUIShell;
  }
}
