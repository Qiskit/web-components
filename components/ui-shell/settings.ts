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

interface TopLevelNavItem extends NavItem {
  isMegaMenu?: boolean;
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

export const NAV_ITEMS: TopLevelNavItem[] = [
  {
    label: 'Overview',
    url: 'https://qiskit.org/overview/',
  },
  {
    label: 'Learn',
    url: 'https://qiskit.org/learn/',
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
    label: 'Documentation',
    isMegaMenu: true,
    children: [
      {
        label: 'Start Here',
        children: [
          {
            label: 'Documentation Home',
            url: 'https://qiskit.org/documentation/',
          },
          {
            label: 'Getting Started',
            url: 'https://qiskit.org/documentation/getting_started.html',
          },
        ],
      },
      {
        label: 'Core',
        children: [
          {
            label: 'Qiskit Terra',
            url: 'https://qiskit.org/documentation/',
          },
        ],
      },
      {
        label: 'Providers',
        children: [
          {
            label: 'Qiskit Aer',
            url: 'https://qiskit.org/documentation/apidoc/aer.html',
          },
          {
            label: 'Qiskit IBM Runtime',
            url: 'https://qiskit.org/documentation/partners/qiskit_ibm_runtime/',
          },
          {
            label: 'Qiskit IBM Provider',
            url: 'https://qiskit.org/documentation/partners/qiskit_ibm_provider/',
          },
          {
            label: 'Partners',
            url: 'https://qiskit.org/documentation/partners/',
          },
        ],
      },
      {
        label: 'Applications',
        children: [
          {
            label: 'Qiskit Nature',
            url: 'https://qiskit.org/documentation/nature/',
          },
          {
            label: 'Qiskit Finance',
            url: 'https://qiskit.org/documentation/finance/',
          },
          {
            label: 'Qiskit Optimization',
            url: 'https://qiskit.org/documentation/optimization/',
          },
          {
            label: 'Qiskit Machine learning',
            url: 'https://qiskit.org/documentation/machine-learning/',
          },
        ],
      },
      {
        label: 'Extensions',
        children: [
          {
            label: 'Qiskit Experiments',
            url: 'https://qiskit.org/documentation/experiments/',
          },
          {
            label: 'Qiskit Dynamics',
            url: 'https://qiskit.org/documentation/dynamics/',
          },
          {
            label: 'Qiskit Metal',
            url: 'https://qiskit.org/documentation/metal/',
          },
        ],
      },
      {
        label: 'Contributing',
        children: [
          {
            label: 'Contributor Guide',
            url: 'https://qiskit.org/documentation/contributing_to_qiskit.html',
          },
          {
            label: 'Deprecation Policy',
            url: 'https://qiskit.org/documentation/deprecation_policy.html',
          },
          {
            label: 'Maintainer Guide',
            url: 'https://qiskit.org/documentation/maintainers_guide.html',
          },
        ],
      },
      {
        label: 'Help and Learning',
        children: [
          {
            label: 'Stack Exchange',
            url: 'https://quantumcomputing.stackexchange.com/questions/tagged/qiskit',
          },
          {
            label: 'Qiskit Feedback',
            url: 'https://github.com/Qiskit/feedback',
          },
          {
            label: 'Slack',
            url: 'https://qisk.it/join-slack',
          },
          {
            label: 'Qiskit Textbook',
            url: 'https://qiskit.org/learn/',
          },
        ],
      },
    ],
  },
];

export type { NavItem, TopLevelNavItem };
