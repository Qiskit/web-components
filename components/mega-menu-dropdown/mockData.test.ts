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

export const singleColumn = [
  {
    title: 'Block 1',
    content: singleColumnGroups,
  },
];

export const tripleColumn = [
  {
    title: 'Block 1',
    content: threeColumnsGroups,
  },
];

export const tripleColumnMultiBlock = [
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
