/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import { mediumIcon } from '../icons/medium.js';
import { qiskitLogoIcon } from '../icons/qiskit-logo.js';
import { slackIcon } from '../icons/slack.js';
import { twitterIcon } from '../icons/twitter.js';
import { youtubeIcon } from '../icons/youtube.js';
import styles from './index.scss';

interface Link {
  label: string;
  url: string;
}

interface Column {
  title: string;
  items: Link[];
}

@customElement('qiskit-footer')
export class QiskitFooter extends LitElement {
  static styles = [styles];

  @state()
  info = [
    {
      title: 'Learn',
      items: [
        {
          label: 'Textbook',
          url: 'https://qiskit.org/textbook-beta',
        },
        {
          label: 'Tutorials',
          url: 'https://github.com/Qiskit/qiskit-tutorials',
        },
        {
          label: 'Videos',
          url: 'https://www.youtube.com/qiskit',
        },
      ],
    },
    {
      title: 'Community',
      items: [
        {
          label: 'Events',
          url: 'https://qiskit.org/events',
        },
        {
          label: 'Advocates',
          url: 'https://qiskit.org/advocates#become-an-advocate',
        },
        {
          label: 'Code of conduct',
          url: 'https://github.com/Qiskit/qiskit/blob/master/CODE_OF_CONDUCT.md',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          label: 'GitHub',
          url: 'https://github.com/Qiskit',
        },
        {
          label: 'Stack Exchange',
          url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit',
        },
        {
          label: 'Documentation',
          url: 'https://qiskit.org/documentation/',
        },
      ],
    },
  ];

  renderFooterSection(info: Column[]) {
    return info.map(
      (column: Column) => html`
        <div class="section">
          <h2 class="footer-section-title">${column.title}</h2>
          <ul>
            ${column.items.map(
              (link) => html`
                <li>
                  <a class="link" href="${link.url}">
                    <span>${link.label}</span>
                  </a>
                </li>
              `
            )}
          </ul>
        </div>
      `
    );
  }

  render() {
    return html`
      <footer>
        <section>
          <div class="main-footer">
            <div class="app-logo">${qiskitLogoIcon}</div>

            ${this.renderFooterSection(this.info)}

            <div class="section">
              <h2 class="footer-section-title">Stay Connected</h2>
              <nav class="social-media">
                <a
                  href="https://twitter.com/Qiskit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${twitterIcon}
                </a>
                <a
                  href="https://ibm.co/joinqiskitslack"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${slackIcon}
                </a>
                <a
                  href="https://www.youtube.com/Qiskit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ${youtubeIcon}
                </a>
                <a
                  href="https://medium.com/Qiskit"
                  target="_blank"
                  rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
                class="caption"
              >
                Terms of use
              </a>
              <a
                href="https://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen"
                target="_blank"
                rel="noopener noreferrer"
                class="caption"
              >
                Accessibility
              </a>
              <a href="mailto:hello@qiskit.camp" class="caption">Contact</a>
              <a
                href="https://quantum-computing.ibm.com/terms/privacy"
                target="_blank"
                rel="noopener noreferrer"
                class="caption"
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
