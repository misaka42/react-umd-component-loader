# react-umd-component-loader

## Install

```bash
npm i -S react-umd-component-loader
```

## Example

```tsx
import React from 'react';
import RC from 'react-umd-component-loader'

const Foo: React.FC = () => {
  return <RC loader={["https://unpkg.com/some-react-ui-component.umd.js", "yourModuleName"]} args={{ foo:"foo" }}>
};
```
