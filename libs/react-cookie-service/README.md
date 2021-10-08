# React Cookie Service

Simple library to manage cookies in React. Implementation is similar
to [Ngx Cookie Service](https://github.com/stevermeister/ngx-cookie-service)

<p >
   <a href="https://www.npmjs.com/@react-smart/react-cookie-service">
    <img src="https://img.shields.io/npm/v/@react-smart/react-cookie-service.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="Alert on npm" />
  </a>
  </p>
  
  ![main](https://github.com/github/docs/actions/workflows/main.yml/badge.svg?branch=main)

## Install

```bash
npm install --save @react-smart/react-cookie-service
```

## Usage

```tsx
import React, { Component } from 'react';
import { useCookies } from '@react-smart/react-cookie-service';

export default function Example() {
  const {
    check,
    getCookie,
    getAllCookies,
    setCookie,
    deleteCookie,
    deleteAllCookies,
  } = useCookies();
  return (
    <div>
      <h2>{JSON.stringify(getAllCookies)}</h2>
    </div>
  );
}
```

## Supported Versions

See the table below for React compatability matrix

| Version | React Version |
| ------- | ------------- |
| 1.x.x   | 17.0.2        |

# API

### getAllCookies

`getAllCookies` hook returns all cookies of the website

```
import React, { Component } from 'react';
import { useCookies } from '@react-smart/react-cookie-service';
export default function Example() {
  const { getAllCookies } = useCookies();
  return (
    <div>
      <h2>{JSON.stringify(getAllCookies)}</h2>
    </div>
  );
}
```

### getCookie

`getCookie` hook returns cookie by name in string format

```
import React, { Component } from 'react';
import { useCookies } from '@react-smart/react-cookie-service';
export default function Example() {
 const { getAllCookie } = useCookies();
 return (
   <div>
     <h2>{JSON.stringify(getAllCookie('test'))}</h2>
   </div>
 );
}

```

### check

`check` hook returns `true` if the specified cookie exists otherwise returns `false`

```
import React, { Component } from 'react';
import { useCookies } from '@react-smart/react-cookie-service';
export default function Example() {
  const { check } = useCookies();
  return (
    <div>
      <h2>{JSON.stringify(check('test'))}</h2>
    </div>
  );
}
```

### setCookie

`setCookie` hook to sets cookie. It accepts the following arguments. Only the name and value are mandatory and rest of them are optional.

```
    name: string,
    value: string,
    expiresOrOptions?: number | Date | any,
    /* Number of days until the cookies expires or an actual `Date`  */
    path?: string,
    /* Cookie path. Defaults to '/' */
    domain?: string,
    /* Cookie domain. Defaults to website domain */
    secure?: boolean,
    /* defaults to false */
    sameSite?: 'Lax' | 'None' | 'Strict'
    /* Defaults to `Lax` */

```

#### Examples:

```
//Set cookie with default options
setCookie('token', response.data.token);
setCookie('isLoggedIn', 'true');

//Set a secure cookie that expires in 2 days
setCookie('token', response.data.token,{ expires: 2, domain: '/', secure: true, sameSite: 'Lax' } );
```

### deleteAllCookies

Delete cookies using `deleteAllCookies` hook and single cookie using `deleteCookie`

```
import React, { Component } from 'react';
import { useCookies } from '@react-smart/react-cookie-service';
export default function Example() {
  const { deleteCookie, deleteAllCookies } = useCookies();
useEffect(()=>
{
setCookie('token', response.data.token);
setCookie('isLoggedIn', 'true');
deleteCookie('token');
deleteAllCookies();
},[]);
  return (
    <div>
      <h2>Delete All Cookies</h2>
    </div>
  );
}
```

## Running unit tests

Run `nx test react-cookie-service` to execute the unit tests via [Jest](https://jestjs.io).

## Build

Use the following command to build the library

```bash
nx build react-cookie-service

or

npm run  build  react-cookie-service
```

## Publish to NPM

Use the following command to publish the library to NPM

```bash
npm publish dist/libs/react-cookie-service/
```

## License

MIT © [pavankjadda](https://github.com/pavankjadda)
