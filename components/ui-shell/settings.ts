/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { TemplateResult } from 'lit';

import { arrowUpRightIcon } from '../icons/arrow-up-right.js';
import { mediumIcon } from '../icons/medium.js';
import { slackIcon } from '../icons/slack.js';
import { twitterIcon } from '../icons/twitter.js';
import { youtubeIcon } from '../icons/youtube.js';

interface NavItem {
  label: string;
  url?: string;
  icon?: TemplateResult | undefined;
}

interface SocialLinks extends NavItem {
  icon: TemplateResult;
}

export enum Variant {
  DEFAULT = '',
  HIDE_ACCOUNT = 'hide-account',
}

export const SOCIAL_LINKS: SocialLinks[] = [
  {
    icon: twitterIcon,
    label: 'Twitter',
    url: 'https://twitter.com/Qiskit',
  },
  {
    icon: slackIcon,
    label: 'Slack',
    url: 'https://qisk.it/join-slack',
  },
  {
    icon: youtubeIcon,
    label: 'YouTube',
    url: 'https://youtube.com/Qiskit',
  },
  {
    icon: mediumIcon,
    label: 'Medium',
    url: 'https://medium.com/Qiskit',
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Events',
    url: 'https://qiskit.org/events',
  },
  {
    label: 'Advocates',
    url: 'https://qiskit.org/advocates',
  },
  {
    label: 'Ecosystem',
    url: 'https://qiskit.github.io/ecosystem',
    icon: arrowUpRightIcon,
  },
  {
    label: 'Documentation',
    url: 'https://docs.quantum-computing.ibm.com',
    icon: arrowUpRightIcon,
  },
  {
    label: 'Learning',
    url: 'https://learning.quantum-computing.ibm.com',
    icon: arrowUpRightIcon,
  },
];

export type { NavItem };
