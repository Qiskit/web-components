/**
 * Copyright (c) IBM, Corp. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { TemplateResult } from 'lit';

import { mediumIcon } from '../icons/medium.js';
import { slackIcon } from '../icons/slack.js';
import { twitterIcon } from '../icons/twitter.js';
import { youtubeIcon } from '../icons/youtube.js';

interface NavItem {
  label: string;
  url?: string;
  children?: NavItem[];
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
    label: 'Documentation',
    children: [
      {
        label: 'Home',
        url: 'https://qiskit.org/documentation/',
      },
      {
        label: 'Installation',
        url: 'https://qiskit.org/documentation/getting_started.html',
      },
      {
        label: 'Tutorials',
        url: 'https://qiskit.org/documentation/tutorials.html',
      },
      {
        label: 'API Reference',
        url: 'https://qiskit.org/documentation/apidoc/index.html',
      },
      {
        label: 'Contribute',
        url: 'https://qiskit.org/documentation/contributing_to_qiskit.html',
      },
    ],
  },
  {
    label: 'Providers',
    url: 'https://qiskit.org/providers/',
  },
  {
    label: 'Community',
    children: [
      {
        label: 'Events',
        url: 'https://qiskit.org/events/',
      },
      {
        label: 'Advocates',
        url: 'https://qiskit.org/advocates/',
      },
      {
        label: 'Ecosystem',
        url: 'https://qiskit.org/ecosystem/',
      },
    ],
  },
  {
    label: 'Learn',
    url: 'https://qiskit.org/learn/',
  },
];

export type { NavItem };
