export interface NavItem {
  label: string;
  url?: string;
  children?: NavItem[];
  segment?: SegmentData;
}

export interface TopLevelNavItem extends NavItem {
  isMegaMenu?: boolean;
}

export interface SegmentData {
  cta: string;
  location: string;
}

export enum Variant {
  DEFAULT = '',
  WITH_ACCOUNT = 'with-account',
}

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
    ],
  },
  {
    label: 'Documentation',
    isMegaMenu: true,
    url: 'https://qiskit.org/documentation/',
    children: [
      {
        label: 'Get started',
        children: [
          {
            label: 'Overview',
            url: 'https://qiskit.org/documentation/getting_started.html',
          },
        ],
      },
      {
        label: 'Core',
        children: [
          {
            label: 'Qiskit Terra',
            url: 'https://qiskit.org/documentation/apidoc/terra.html',
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
            url: 'https://qiskit.org/documentation/apidoc/ibmq-provider.html',
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
            url: 'https://qiskit.slack.com/',
          },
          {
            label: 'Qiskit textboox',
            url: 'https://qiskit.org/learn/',
          },
        ],
      },
    ],
  },
];
