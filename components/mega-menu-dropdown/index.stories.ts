/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

import './index.js';

export default {
  title: 'MegaMenuDropdown',
};

const menuColumn1 = [
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
];

const menuColumn2 = [
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

const menuColumn3 = [
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
    content: menuColumn1,
  },
];

const tripleColumn = [
  {
    title: 'Block 1',
    content: [...menuColumn1, ...menuColumn2, ...menuColumn3],
  },
];

const tripleColumnMultiBlock = [
  {
    title: 'Block 1',
    content: menuColumn1,
  },
  {
    title: 'Block 2',
    content: [...menuColumn1, ...menuColumn2],
  },
  {
    title: 'Block 3',
    content: [...menuColumn1, ...menuColumn2, ...menuColumn3],
  },
];

export const Default = () =>
  html`<mega-menu-dropdown
    .content="${tripleColumnMultiBlock}"
  ></mega-menu-dropdown>`;
export const SingleColumn = () =>
  html`<mega-menu-dropdown
    placeholder="Browse"
    .content="${singleColumn}"
  ></mega-menu-dropdown>`;
export const TripleColumn = () =>
  html`<mega-menu-dropdown
    placeholder="Search"
    .content="${tripleColumn}"
  ></mega-menu-dropdown>`;
