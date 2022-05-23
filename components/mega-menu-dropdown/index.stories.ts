/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

import './index.js';
import type { MegaMenuDropdownContent } from './index.js';

export default {
  title: 'Components/MegaMenuDropdown',
};

const singleColumnGroups = [
  {
    title: { label: 'Integer vitae ornare ipsum', url: 'example.com' },
    content: [
      { label: 'Eget ullamcorper lorem', url: 'example.com' },
      { label: 'Sed et felis scelerisque, malesuada', url: 'example.com' },
      { label: 'Ipsum ac', url: 'example.com' },
      { label: 'Eget ullamcorper lorem', url: 'example.com' },
      { label: 'Sed et felis scelerisque, malesuada', url: 'example.com' },
      { label: 'Ipsum ac', url: 'example.com' },
    ],
  },
];

const twoColumnsGroups = [
  {
    title: { label: 'Lorem ipsum dolor', url: 'example.com' },
    content: [
      { label: 'Sit amet', url: 'example.com' },
      { label: 'Consectetur adipiscing elit', url: 'example.com' },
      { label: 'Integer mattis nulla vitae nibh', url: 'example.com' },
      { label: 'Sit amet', url: 'example.com' },
      { label: 'Consectetur adipiscing elit', url: 'example.com' },
      { label: 'Integer mattis nulla vitae nibh', url: 'example.com' },
    ],
  },
  {
    title: { label: 'Pharetra pharetra', url: 'example.com' },
    content: [
      { label: 'Pellentesque interdum semper', url: 'example.com' },
      { label: 'Justo', url: 'example.com' },
      { label: 'Suspendisse ut finibus elit', url: 'example.com' },
      { label: 'Pulvinar sit amet iaculis id', url: 'example.com' },
      { label: 'Lacinia quis tortor', url: 'example.com' },
      { label: 'Praesent hendrerit vitae', url: 'example.com' },
      { label: 'Metus feugiat fringilla', url: 'example.com' },
    ],
  },
];

const threeColumnsGroups = [
  {
    title: { label: 'Lorem ipsum dolor', url: 'example.com' },
    content: [
      { label: 'Sit amet', url: 'example.com' },
      { label: 'Consectetur adipiscing elit', url: 'example.com' },
      { label: 'Integer mattis nulla vitae nibh', url: 'example.com' },
    ],
  },
  {
    title: { label: 'Pharetra pharetra', url: 'example.com' },
    content: [
      { label: 'Pellentesque interdum semper', url: 'example.com' },
      { label: 'Justo', url: 'example.com' },
      { label: 'Suspendisse ut finibus elit', url: 'example.com' },
      { label: 'Pulvinar sit amet iaculis id', url: 'example.com' },
      { label: 'Lacinia quis tortor', url: 'example.com' },
      { label: 'Praesent hendrerit vitae', url: 'example.com' },
      { label: 'Metus feugiat fringilla', url: 'example.com' },
    ],
  },
  {
    title: { label: 'Integer vitae ornare ipsum', url: 'example.com' },
    content: [
      { label: 'Eget ullamcorper lorem', url: 'example.com' },
      { label: 'Sed et felis scelerisque, malesuada', url: 'example.com' },
      { label: 'Ipsum ac', url: 'example.com' },
      { label: 'Eget ullamcorper lorem', url: 'example.com' },
      { label: 'Sed et felis scelerisque, malesuada', url: 'example.com' },
      { label: 'Ipsum ac', url: 'example.com' },
    ],
  },
  {
    title: { label: 'Semper est', url: 'example.com' },
    content: [
      { label: 'Etiam ligula sem, scelerisque sit', url: 'example.com' },
      { label: 'Amet pretium ac egestas', url: 'example.com' },
    ],
  },
  {
    title: { label: 'Pharetra metus ut diam sapien', url: 'example.com' },
    content: [
      { label: 'Pulvinar sit amet iaculis id', url: 'example.com' },
      { label: 'Lacinia quis tortor', url: 'example.com' },
      { label: 'Praesent hendrerit vitae', url: 'example.com' },
      { label: 'Metus feugiat fringilla', url: 'example.com' },
    ],
  },
];

const singleColumn = [
  {
    title: 'Block 1',
    content: singleColumnGroups,
  },
];

const tripleColumn = [
  {
    title: 'Block 1',
    content: threeColumnsGroups,
  },
];

const tripleColumnMultiBlock = [
  {
    title: 'Block 1',
    content: singleColumnGroups,
  },
  {
    title: 'Block 2',
    content: twoColumnsGroups,
  },
  {
    title: 'Block 3',
    content: threeColumnsGroups,
  },
];

interface Args {
  placeholder: string;
  content: MegaMenuDropdownContent;
}

const TemplateFn = ({ placeholder, content }: Args) => {
  return html`<mega-menu-dropdown
    placeholder="${placeholder}"
    .content="${content}"
  ></mega-menu-dropdown>`;
};

type Template = typeof TemplateFn & { args?: { [attr: string]: unknown } };

export const Default: Template = TemplateFn.bind({});
Default.args = {
  placeholder: 'lalala',
  content: tripleColumnMultiBlock,
};

export const SingleColumn: Template = TemplateFn.bind({});
SingleColumn.args = {
  placeholder: 'Browse',
  content: singleColumn,
};

export const TripleColumn: Template = TemplateFn.bind({});
TripleColumn.args = {
  placeholder: 'Search',
  content: tripleColumn,
};
