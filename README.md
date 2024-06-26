> [!IMPORTANT]
> This repository is unmaintained  and the content in qiskit.org has been superseded by the [IBM Quantum | Community page](https://ibm.com/quantum/community). These source files are no longer maintained and may contain omissions or outdated information. Contributions to this repo are no longer accepted.

# Qiskit Components

Qiskit Components is a future-looking project to develop Qiskit design system based around Web Components, ES Modules, and modern browser standards.

## Usage

### Prerequisites

- [Node.js](https://nodejs.org) v16 or later.

### Install

    npm install @qiskit/web-components

### Example

```javascript
import '@qiskit/web-components/banner';
```

```html
<qiskit-banner>We have an important announcement!</qiskit-banner>
```

## Contributing

### Prerequisites

- [Node.js](https://nodejs.org) v16 or later.

Furthermore, this project is built on [TypeScript](https://www.typescriptlang.org) with the intention of improving the developer experience.

### Install the dependencies

    npm install

### Start the development server (with Storybook)

This command serves the app at `http://localhost:8000`:

    npm start

### Running the tests

This command runs the tests:

    npm test
