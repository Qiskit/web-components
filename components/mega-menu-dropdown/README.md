# Mega Menu Dropdown

## Example usage

```javascript
import '@qiskit/web-components/components/mega-menu-dropdown';
const content = [
  {
    title: 'Lorem Ipsum',
    content: [
      {
        title: { label: 'Integer vitae ornare ipsum', url: 'example.com' },
        content: [
          { label: 'Eget ullamcorper lorem', url: 'example.com' },
          { label: 'Sed et felis scelerisque, malesuada', url: 'example.com' },
        ],
      },
    ],
  },
];
```

```html
<qiskit-mega-menu-dropdown
  placeholder="Browse all content"
  .content="${content}"
></qiskit-mega-menu-dropdown>
```
