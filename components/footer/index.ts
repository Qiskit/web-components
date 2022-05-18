/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, type TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { mediumIcon } from './icons/medium.js';
import { qiskitLogoIcon } from './icons/qiskit-logo.js';
import { slackIcon } from './icons/slack.js';
import { twitterIcon } from './icons/twitter.js';
import { youtubeIcon } from './icons/youtube.js';
import styles from './index.scss';

interface Link {
  label: string;
  url: string;
}

interface Column {
  title: string;
  items: Array<Link>;
}

@customElement('qiskit-footer')
export class QiskitFooter extends LitElement {
  static styles = [styles];

  @property({ attribute: false })
  info = [{ title: '', items: [{ label: '', url: '' }] }];

  create_list_sections(items: Array<Link>) {
    const aux: Array<TemplateResult> = [];
    items.map((link: Link) => {
      aux.push(html` <li>
        <a
          class="link"
          style="cursor: pointer;"
          label="${link.label}"
          href="${link.url}"
        >
          <span>${link.label}</span>
        </a>
      </li>`);
    });
    return aux;
  }

  create_footer_section(info: Array<Column>) {
    const itemTemplates: Array<TemplateResult> = [];
    info.map((column: Column) => {
      itemTemplates.push(html`
        <div class="section">
          <h2 class="footer-section-title">${column.title}</h2>
          <ul>
            ${this.create_list_sections(column.items)}
          </ul>
        </div>
      `);
    });
    return itemTemplates;
  }

  render() {
    return html`
      <footer>
        <section>
          <div class="main-footer">
            <div class="app-logo">${qiskitLogoIcon}</div>

            ${this.create_footer_section(this.info)}

            <div class="section">
              <h2 class="footer-section-title">Stay Connected</h2>
              <nav class="social-media">
                <a
                  href="https://twitter.com/Qiskit"
                  rel="noopener"
                  target="_blank"
                  style="cursor: pointer;"
                  label="Twitter"
                  icon="LogoTwitter20"
                  class="app-link caption footer-section__link app-link_secondary footer-section__link_theme_light"
                  url="https://twitter.com/Qiskit"
                >
                  ${twitterIcon}
                </a>
                <a
                  href="https://ibm.co/joinqiskitslack"
                  rel="noopener"
                  target="_blank"
                  style="cursor: pointer;"
                  label="Slack"
                  icon="LogoSlack20"
                  class="app-link caption footer-section__link app-link_secondary footer-section__link_theme_light"
                  url="https://ibm.co/joinqiskitslack"
                >
                  ${slackIcon}
                </a>
                <a
                  href="https://www.youtube.com/Qiskit"
                  rel="noopener"
                  target="_blank"
                  style="cursor: pointer;"
                  label="Youtube"
                  icon="LogoYouTube20"
                  class="app-link caption footer-section__link app-link_secondary footer-section__link_theme_light"
                  url="https://www.youtube.com/Qiskit"
                >
                  ${youtubeIcon}
                </a>
                <a
                  href="https://medium.com/Qiskit"
                  rel="noopener"
                  target="_blank"
                  style="cursor: pointer;"
                  label="Medium"
                  icon="LogoMedium20"
                  class="app-link caption footer-section__link app-link_secondary footer-section__link_theme_light"
                  url="https://medium.com/Qiskit"
                >
                  ${mediumIcon}
                </a>
              </nav>
            </div>
          </div>
        </section>
        <div class="secondary-footer">
          <section class="page-footer-secondary">
            <div class="caption">©Qiskit | All Rights Reserved</div>
            <div class="page-footer-secondary-links">
              <a
                href="https://www.ibm.com/legal?lnk=flg-tous-usen"
                rel="noopener"
                target="_blank"
                style="cursor: pointer;"
                label="Terms of use"
                class="caption page-footer-secondary-link page-footer-secondary-link_theme_light"
              >
                Terms of use </a
              ><a
                href="https://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen"
                rel="noopener"
                target="_blank"
                style="cursor: pointer;"
                label="Accessibility"
                class="caption page-footer-secondary-link page-footer-secondary-link_theme_light"
              >
                Accessibility </a
              ><a
                href="mailto:hello@qiskit.camp"
                style="cursor: pointer;"
                label="Contact"
                class="caption page-footer-secondary-link page-footer-secondary-link_theme_light"
              >
                Contact </a
              ><a
                href="https://quantum-computing.ibm.com/terms/privacy"
                rel="noopener"
                target="_blank"
                style="cursor: pointer;"
                label="Privacy"
                class="caption page-footer-secondary-link page-footer-secondary-link_theme_light"
              >
                Privacy
              </a>
            </div>
          </section>
        </div>
      </footer>
    `;
  }
}
