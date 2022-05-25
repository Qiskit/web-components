# Mega Menu Dropdown

## Example usage

```javascript
import '@qiskit/web-components/mega-menu-dropdown';
const content = [
  {
    title: 'Lorem Ipsum',
    content: [
      {
        title: { label: 'Integer vitae ornare ipsum', url: 'example.com' },
        content: [
          { label: 'Eget ullamcorper lorem', url: 'example.com' },
          { label: 'Sed et felis scelerisque, malesuada', url: 'example.com' },
          { label: 'Ipsum ac', url: 'example.com' },
        ],
      },
    ],
    [
      {
        title: { label: 'Lorem ipsum dolor', url: 'example.com' },
        content: [
          { label: 'Sit amet', url: 'example.com' },
          { label: 'Consectetur adipiscing elit', url: 'example.com' },
          { label: 'Integer mattis nulla vitae nibh', url: 'example.com' },
        ],
      },
    ]
  },
  {
    title: 'Dolor Sit',
    content: [
      {
        title: { label: 'Integer vitae ornare ipsum', url: 'example.com' },
        content: [
          { label: 'Eget ullamcorper lorem', url: 'example.com' },
          { label: 'Sed et felis scelerisque, malesuada', url: 'example.com' },
          { label: 'Ipsum ac', url: 'example.com' },
        ],
      },
    ],
    [
      {
        title: { label: 'Lorem ipsum dolor', url: 'example.com' },
        content: [
          { label: 'Sit amet', url: 'example.com' },
          { label: 'Consectetur adipiscing elit', url: 'example.com' },
          { label: 'Integer mattis nulla vitae nibh', url: 'example.com' },
        ],
      },
    ]
  },
];
```

```html
<qiskit-mega-menu-dropdown
  placeholder="Browse all content"
  .content="${content}"
></qiskit-mega-menu-dropdown>
```
