# @qiskit/web-components

## 0.11.2

### Patch Changes

- ebf1742: Update ui-shell Documentation dropdown menu "Qiskit IBM Provider" link and "Slack" invite link.

## 0.11.1

### Patch Changes

- 997b9b3: Update ui-shell Documentation dropdown with Documentation Home and Getting Started

## 0.11.0

### Minor Changes

- f144991: Update to Lit v2.5 and @carbon/web-components

## 0.10.3

### Patch Changes

- 46313f2: feature(ui-shell): use dynamic account base url

## 0.10.2

### Patch Changes

- 69fb75a: Fix the build step

## 0.10.1

### Patch Changes

- 4bfa3a2: Add experimental-bundled-ui-shell to the release

## 0.10.0

### Minor Changes

- d68ee4a: [ui-shell] Add space before the content

## 0.9.3

### Patch Changes

- 634ba8d: Update ui-shell Documentation dropdown Slack url to use bit.ly invitation link
- 634ba8d: Update ui-shell Documentation dropdown "Get started" section heading to "Getting Started"

## 0.9.2

### Patch Changes

- 4d779e0: Update ui-shell click event to include parent dropdown label
- ad69be2: Fixes 'Qiskit textboox' typo
- ad69be2: Address a11y landmark violation

## 0.9.1

### Patch Changes

- 027f0a0: Update the header content max-width value to use a CSS variables. This will allow greater flexibility when this header is consumed in different areas of qiskit. eg platypus vs qiskit.org

## 0.9.0

### Minor Changes

- fae9030: feat(ui-shell): mobile nav enhacements
  Adds social media icon links and copyright to sidenav at smallest breakpoint
  Adds the "Ecosystem" navigation item to the Community dropdown
- 1b4643a: Add missed interfaces
  Also add missed namespace to internal column-list component

### Patch Changes

- f42f8a5: Emit click event for ui-shell nav items, passing the nav item label and url within the event detail.

## 0.8.1

### Patch Changes

- 008c525: Add ui-shell component to package.json export list. Remove navbar export

## 0.8.0

### Minor Changes

- 3671dd9: New component `column-list` extracted from `mega-menu-dropdown`.
- 27cc6ee: Adds new UI Shell component that will replace the navbar component. The UI Shell extends the functionality of the carbon-web-components UI Shell with some css customizations.
  It includes an extended mega menu header dropdown and the nested sidenav menu option.
  The UI shell includes the option to show or hide the account option in the header and sidenav.

### Patch Changes

- 375bfa8: Update contact email

## 0.7.0

### Minor Changes

- 53e5328: Update Lit dependencies
  Important: Lit and its underlying libraries can now be imported directly from Node without crashing.

## 0.6.1

### Patch Changes

- f9aea3c: Prevent narrow columns

## 0.6.0

### Minor Changes

- 3e29a65: Adds ecosystem link to the top menu

### Patch Changes

- 2f25621: Added a11y and a11y-test to the mega menu dropdown
- 329d988: Added test to mmd component

## 0.5.0

### Minor Changes

- c9f64ed: Added the footer component

## 0.4.0

### Minor Changes

- eaeb083: Simplify the MegaMenuDropdown custom properties

### Patch Changes

- 70e3780: Use empty search image as svg

## 0.3.4

### Patch Changes

- 23f0842: Added a variable for the input filter background color

## 0.3.3

### Patch Changes

- bb03ada: Improved css adding vars to provide flexibility to mega-menu-dropdown

## 0.3.2

### Patch Changes

- 4c36e21: Updated css for mega-menu-dropdown

## 0.3.1

### Patch Changes

- 222e165: Fix assets path for npm

## 0.3.0

### Minor Changes

- 27ed9fe: Added a user account button for the navbar

### Patch Changes

- 77177e3: Fix MegaMenuDropdown empty image using import.meta.url
- 1b8b9a3: Fixed border top of navbar nav-sub-item component

## 0.2.3

### Patch Changes

- d08f7f0: Add components assets to npm

## 0.2.2

### Patch Changes

- fcbaf2f: Add missed exports

## 0.2.1

### Patch Changes

- 253c176: Fix the QiskitMegaMenuDropdown name

## 0.2.0

### Minor Changes

- 461e7fd: Added the MegaMenuDropdown web-component as a migration from qiskit-vue repository.

## 0.1.3

### Patch Changes

- 8fd2919: Remove the mandatory Node v16

## 0.1.2

### Patch Changes

- 227935f: Update the package exports

## 0.1.1

### Patch Changes

- cf64af3: Build the project before pack to fix the release

## 0.1.0

### Minor Changes

- 45797db: Initial release
