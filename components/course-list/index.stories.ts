/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';

import type { CourseListContent } from './index.js';
import './index.js';
import {
  singleColumn,
  tripleColumn,
  tripleColumnMultiBlock,
} from './mockData.test.js';

export default {
  title: 'CourseList',
};

interface Args {
  content: CourseListContent;
}

const Template = ({ content }: Args) => {
  return html`<course-list .content="${content}"></course-list>`;
};

type Story = typeof Template & { args?: { [attr: string]: unknown } };

export const Default: Story = Template.bind({});
Default.args = {
  content: tripleColumnMultiBlock,
};

export const SingleColumn: Story = Template.bind({});
SingleColumn.args = {
  content: singleColumn,
};

export const TripleColumn: Story = Template.bind({});
TripleColumn.args = {
  content: tripleColumn,
};
