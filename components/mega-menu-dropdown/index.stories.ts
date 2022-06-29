/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

import './index.js';
import type { QiskitMegaMenuDropdownContent } from './index.js';
import {
  singleColumn,
  tripleColumn,
  tripleColumnMultiBlock,
} from './mockData.js';

export default {
  title: 'MegaMenuDropdown',
};

interface Args {
  placeholder: string;
  content: QiskitMegaMenuDropdownContent;
}

const Template = ({ placeholder, content }: Args) => {
  return html`<qiskit-mega-menu-dropdown
    placeholder="${placeholder}"
    .content="${content}"
  ></qiskit-mega-menu-dropdown>`;
};

type Story = typeof Template & { args?: { [attr: string]: unknown } };

export const Default: Story = Template.bind({});
Default.args = {
  placeholder: 'Browse all content',
  content: tripleColumnMultiBlock,
};

export const SingleColumn: Story = Template.bind({});
SingleColumn.args = {
  placeholder: 'Browse',
  content: singleColumn,
};

export const TripleColumn: Story = Template.bind({});
TripleColumn.args = {
  placeholder: 'Search',
  content: tripleColumn,
};
