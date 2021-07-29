# React Cookie Service

Simple library to manage cookies in React. Implementation is similar
to [Ngx Cookie Service](https://github.com/stevermeister/ngx-cookie-service)

<p >
   <a href="https://www.npmjs.com/@ngxsmart/alert">
    <img src="https://img.shields.io/npm/v/@ngxsmart/react-cookie-service.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="Alert on npm" />
  </a>
  </p>
  
  ![main](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=main)


## Install

```bash
npm install --save @ngxsmart/react-cookie-service
```

## Usage

```tsx
import React, { Component } from 'react'
import { useCookies } from '@ngxsmart/react-cookie-service';


export default function Example() {
  const { getCookies } = useCookies();
  return (
    <div>
      <h2>{JSON.stringify(getCookies)}</h2>
    </div>
  )
}
```

## Running unit tests

Run `nx test react-cookie-service` to execute the unit tests via [Jest](https://jestjs.io).

## Build

Use the following command to build the library

```bash
nx build react-cookie-service
```

## Publish to NPM

Use the following command to publish the library to NPM

```bash
npm publish dist/libs/react-cookie-service/
```

## License

MIT © [pavankjadda](https://github.com/pavankjadda)
