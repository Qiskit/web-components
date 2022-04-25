/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';

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
    items.forEach((link: Link) => {
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

  render() {
    const itemTemplates: Array<TemplateResult> = [];
    this.info.forEach((column: Column) => {
      itemTemplates.push(html`
        <div class="section">
          <h2 class="footer-section-title">${column.title}</h2>
          <ul>
            ${this.create_list_sections(column.items)}
          </ul>
        </div>
      `);
    });

    return html`
      <footer>
        <section>
          <div class="main-footer">
            <div class="app-logo">
              <svg
                version="1.2"
                xmlns="http://www.w3.org/2000/svg"
                x="0"
                y="0"
                viewBox="0 0 451.7 140.8"
                xml:space="preserve"
                class="app-logo"
              >
                <defs>
                  <radialGradient
                    id="gradient-1_49"
                    cx="63.5"
                    cy="71.1"
                    r="65"
                    gradientTransform="matrix(.96 .21 -.14 .63 43 13.8)"
                    gradientUnits="userSpaceOnUse"
                    class="app-logo-gradient"
                  >
                    <stop
                      offset=".2"
                      stop-opacity="0"
                      class="app-logo-gradient"
                    ></stop>
                    <stop offset="1" class="app-logo-gradient"></stop>
                  </radialGradient>
                  <radialGradient
                    id="gradient-2_49"
                    cx="40"
                    cy="162.1"
                    r="35"
                    gradientTransform="matrix(.98 0 0 .6 31.7 16.5)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0"
                      stop-opacity="0"
                      class="app-logo-gradient"
                    ></stop>
                    <stop offset="1" class="app-logo-gradient"></stop>
                  </radialGradient>
                  <radialGradient
                    id="gradient-3_49"
                    cx="40.5"
                    cy="29.8"
                    r="60.3"
                    gradientTransform="matrix(.98 0 0 .75 31.6 9.5)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset=".2"
                      stop-opacity="0"
                      class="app-logo-gradient"
                    ></stop>
                    <stop offset="1" class="app-logo-gradient"></stop>
                  </radialGradient>
                  <radialGradient
                    id="gradient-4_49"
                    cx="3.1"
                    cy="-.4"
                    r="40.7"
                    gradientTransform="matrix(.4 .89 -1.26 .57 33 -.4)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset=".4"
                      stop-opacity="0"
                      class="app-logo-gradient"
                    ></stop>
                    <stop offset="1" class="app-logo-gradient"></stop>
                  </radialGradient>
                  <radialGradient
                    id="gradient-5_49"
                    cx="-412.4"
                    cy="-1203.4"
                    r="1068.9"
                    gradientTransform="matrix(.98 0 0 .98 31.7 2.6)"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0"
                      stop-opacity="0"
                      class="app-logo-gradient"
                    ></stop>
                    <stop offset=".4" class="app-logo-gradient"></stop>
                  </radialGradient>
                </defs>
                <path
                  class="app-logo-gradient"
                  d="M221.3 126.4h-11.6c-9.1 0-13.3-5-13.3-13v-6.2c-18.3-2.3-29.8-16.8-29.8-41.8 0-27.5 13.9-42.2 35.1-42.2S237 37.9 237 65.4c0 24.3-10.8 38.7-28.1 41.6v8.4H221zm1.5-54.6V59c0-14.8-8.4-24-21-24s-21 9.1-21 24v12.8c0 14.9 8.4 24 21 24s21-9.1 21-24zM246.3 30.3v-2c0-3.9 2.3-6.7 7.6-6.7s7.5 2.8 7.5 6.7v2c0 3.8-2.2 6.6-7.5 6.6s-7.6-2.8-7.6-6.6zM247.5 45.4h12.7v60.8h-12.7zM270.9 96.1l8.1-7.4c4.4 5.3 10 8.6 17.2 8.6s11-3 11-8.2c0-3.8-2.3-6.7-8.6-7.6l-5.6-.7c-12.4-1.5-20-6.9-20-18 0-11.9 9.3-18.8 22.6-18.8 11 0 17.2 3.6 22.7 9.7l-7.9 7.5a19.4 19.4 0 00-14.8-6.9c-7 0-10.3 3-10.3 7.6s3 6.8 9.3 7.8l5.7.7c13.3 2 19.2 7.9 19.2 17.7 0 11.7-9.4 19.5-24 19.5A29.3 29.3 0 01270.9 96zM328.2 19.7H341v53h.6L350 62l14.6-16.5h14.8L358.1 69l23.9 37.3h-15.2l-17.4-29-8.4 9.1v19.9h-12.8zM390.8 30.3v-2c0-3.9 2.4-6.7 7.6-6.7s7.5 2.8 7.5 6.7v2c0 3.8-2.2 6.6-7.5 6.6s-7.6-2.8-7.6-6.6zM392 45.4h12.7v60.8H392zM438.3 106.2c-8.8 0-13.5-5-13.5-13.2V55.8h-9.4V45.4h5.1c4.2 0 5.6-1.7 5.6-6V28.8h11.5v16.6h12.7v10.4h-12.7v40h11.8v10.4z"
                ></path>
                <path
                  class="app-logo-gradient"
                  d="M131.1 103.1C131 90.1 100.6 83 72 82.6c-30.4 0-61.8 7.6-61.9 20.5.2 13 30.6 20.3 59.2 20.6 30.3 0 61.7-7.7 61.8-20.5zM69.3 119c-32-.4-54.3-8.6-54.4-15.8.1-7.5 24.5-16 57.1-16 32 .5 54.3 8.7 54.4 16 0 7.4-24.5 15.8-57.1 15.8z"
                ></path>
                <path
                  class="app-logo-gradient"
                  d="M70.8 140.3a70 70 0 1161.5-103 70 70 0 01-61.5 103zM70.5 5.2a65.2 65.2 0 1057.6 34.3A65.3 65.3 0 0070.7 5.2z"
                ></path>
                <path
                  class="app-logo-gradient"
                  d="M88.7 131c0-5.4-7.8-9.5-18-9.5s-18 4-18 9.4v.1c0 5.3 7.8 9.4 18 9.4s18-4 18-9.4zm-18 5c-8.1 0-13.3-3-13.3-5s5.2-5 13.3-5 13.2 2.9 13.3 5-5.3 4.9-13.3 4.9z"
                ></path>
                <path
                  class="app-logo-gradient"
                  d="M140.6 70.4c-.2-13.8-35.3-21.7-68.3-22-35 0-71.4 8.2-71.6 22C.9 84.5 36 92.3 69 92.7c35 0 71.4-8.3 71.6-22.1zM69.1 87.8c-37.4-.4-63.5-9.5-63.7-17.4C5.5 62.2 34.1 53 72.2 53c37.5.4 63.6 9.5 63.7 17.4-.1 8.2-28.7 17.4-66.8 17.4z"
                ></path>
                <path
                  class="app-logo-gradient"
                  d="M72 16.9c-30.4 0-61.8 7.7-61.8 20.6s30.4 20.3 59 20.6c30.4 0 61.8-7.7 61.8-20.6s-30.3-20.3-59-20.6zm-2.7 36.4C37.3 53 15 44.7 15 37.5c0-7.5 24.4-15.9 57-15.9 32 .4 54.3 8.7 54.3 15.9 0 7.5-24.4 15.8-57 15.8z"
                ></path>
                <path
                  class="app-logo-gradient"
                  d="M70.4.4c-5 0-16.9.7-16.9 7.9s11.8 7.8 17 7.8 16.8-.7 16.8-7.8-11.8-8-16.9-8zm0 4.8c7.2 0 12.1 1.6 12.1 3s-5 3.2-12 3.2-12.2-1.7-12.2-3.1 5-3.1 12.1-3.1z"
                ></path>
                <path
                  class="app-logo-gradient"
                  d="M100 112.8a6.1 6.1 0 00-.9 0L72.8 67.6 48.8 26a6 6 0 10-4.5 2.2 6.6 6.6 0 00.8 0l24 41.3 10.8 18.7L95.3 115a6 6 0 104.7-2.2z"
                ></path>
              </svg>
            </div>

            ${itemTemplates}

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
                  <svg
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#697077"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    class="footer-section__icon-link footer-section__icon-link_theme_light"
                  >
                    <path
                      d="M11.92,24.94A12.76,12.76,0,0,0,24.76,12.1c0-.2,0-.39,0-.59A9.4,9.4,0,0,0,27,9.18a9.31,9.31,0,0,1-2.59.71,4.56,4.56,0,0,0,2-2.5,8.89,8.89,0,0,1-2.86,1.1,4.52,4.52,0,0,0-7.7,4.11,12.79,12.79,0,0,1-9.3-4.71,4.51,4.51,0,0,0,1.4,6,4.47,4.47,0,0,1-2-.56v.05A4.53,4.53,0,0,0,9.5,17.83a4.53,4.53,0,0,1-2,.08A4.51,4.51,0,0,0,11.68,21,9.05,9.05,0,0,1,6.07,23,9.77,9.77,0,0,1,5,22.91a12.77,12.77,0,0,0,6.92,2"
                    ></path>
                  </svg>
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
                  <svg
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#697077"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    class="footer-section__icon-link footer-section__icon-link_theme_light"
                  >
                    <path
                      data-v-5e3b563e=""
                      d="M9.0423 19.1661A2.5212 2.5212 0 116.5212 16.645H9.0423zM10.3127 19.1661a2.5212 2.5212 0 015.0423 0v6.3127a2.5212 2.5212 0 11-5.0423 0zM12.8339 9.0423A2.5212 2.5212 0 1115.355 6.5212V9.0423zM12.8339 10.3127a2.5212 2.5212 0 010 5.0423H6.5212a2.5212 2.5212 0 110-5.0423zM22.9577 12.8339a2.5212 2.5212 0 112.5211 2.5211H22.9577zM21.6873 12.8339a2.5212 2.5212 0 01-5.0423 0V6.5212a2.5212 2.5212 0 115.0423 0zM19.1661 22.9577a2.5212 2.5212 0 11-2.5211 2.5211V22.9577zM19.1661 21.6873a2.5212 2.5212 0 010-5.0423h6.3127a2.5212 2.5212 0 110 5.0423z"
                    ></path>
                  </svg>
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
                  <svg
                    data-v-5e3b563e=""
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#697077"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    class="footer-section__icon-link footer-section__icon-link_theme_light"
                  >
                    <path
                      data-v-5e3b563e=""
                      d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z"
                    ></path>
                  </svg>
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
                  <svg
                    data-v-5e3b563e=""
                    focusable="false"
                    preserveAspectRatio="xMidYMid meet"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#697077"
                    width="20"
                    height="20"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    class="footer-section__icon-link footer-section__icon-link_theme_light"
                  >
                    <path
                      data-v-5e3b563e=""
                      d="M4,4V28H28V4ZM23.9385,9.6865,22.6514,10.92a.3766.3766,0,0,0-.1431.3613v9.0674a.3765.3765,0,0,0,.1431.3613l1.257,1.2339v.271h-6.323v-.271L18.8877,20.68c.1279-.128.1279-.1656.1279-.3609V12.99l-3.62,9.1958H14.906L10.6907,12.99v6.1631a.8505.8505,0,0,0,.2334.7071l1.6936,2.0547v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7071V12.0264A.6231.6231,0,0,0,9.5239,11.5L8.0186,9.6865v-.271h4.6743l3.613,7.9239,3.1765-7.9239h4.4561Z"
                    ></path>
                    <path
                      data-v-5e3b563e=""
                      fill="none"
                      d="M9.7273,12.0266A.6246.6246,0,0,0,9.524,11.5L8.0186,9.6863V9.4154H12.693l3.613,7.9238,3.1764-7.9238h4.4561v.2709L22.6513,10.92a.3763.3763,0,0,0-.143.3612v9.0676a.3763.3763,0,0,0,.143.3612l1.2571,1.2341v.2709H17.5856v-.2709L18.8878,20.68c.1279-.1279.1279-.1656.1279-.3612V12.99l-3.62,9.1955h-.4893L10.6907,12.99v6.1629a.8506.8506,0,0,0,.2334.7074l1.6936,2.0543v.2709H7.8154v-.2709L9.509,19.86a.82.82,0,0,0,.2183-.7074Z"
                      data-icon-path="inner-path"
                    ></path>
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </section>
        <div class="secondary-footer">
          <section class="page-footer-secondary" data-v-a0480b7a="">
            <div class="caption" data-v-a0480b7a="">
              ©Qiskit | All Rights Reserved
            </div>
            <div class="page-footer-secondary-links" data-v-a0480b7a="">
              <a
                data-v-a0480b7a=""
                href="https://www.ibm.com/legal?lnk=flg-tous-usen"
                rel="noopener"
                target="_blank"
                style="cursor: pointer;"
                label="Terms of use"
                class="caption page-footer-secondary-link page-footer-secondary-link_theme_light"
              >
                Terms of use </a
              ><a
                data-v-a0480b7a=""
                href="https://www.ibm.com/accessibility/us/en/?lnk=flg-acce-usen"
                rel="noopener"
                target="_blank"
                style="cursor: pointer;"
                label="Accessibility"
                class="caption page-footer-secondary-link page-footer-secondary-link_theme_light"
              >
                Accessibility </a
              ><a
                data-v-a0480b7a=""
                href="mailto:hello@qiskit.camp"
                style="cursor: pointer;"
                label="Contact"
                class="caption page-footer-secondary-link page-footer-secondary-link_theme_light"
              >
                Contact </a
              ><a
                data-v-a0480b7a=""
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
