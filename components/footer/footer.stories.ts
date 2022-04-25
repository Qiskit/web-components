/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import './index.js';

export default {
  title: 'qiskit-footer',
};

const short_content = [
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
        label: 'Github',
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

export const ShortContent = () => html`
  <qiskit-footer .info=${short_content}></qiskit-footer>
`;

const long_content = [
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
      {
        label: 'foo',
        url: 'https://qiskit.org/textbook-beta',
      },
      {
        label: 'lorem ipsum',
        url: 'https://qiskit.org/textbook-beta',
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
        label: 'Github',
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
      {
        label: 'other',
        url: 'https://qiskit.org/textbook-beta',
      },
      {
        label: 'another one',
        url: 'https://qiskit.org/textbook-beta',
      },
    ],
  },
];

export const LongContent = () => html`
  <qiskit-footer .info=${long_content}></qiskit-footer>
`;
