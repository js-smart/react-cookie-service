# JS Cookie Service

Simple JS module based library to manage cookies in JavaScript (Angular, React, Vue etc..). Implementation is similar
to [Ngx Cookie Service](https://github.com/stevermeister/ngx-cookie-service)

<p >
   <a href="https://www.npmjs.com/js-cookie-service">
    <img src="https://img.shields.io/npm/v/js-cookie-service.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen" alt="Alert on npm" />
  </a>

[![Build Project](https://github.com/react-smart/js-cookie-service/actions/workflows/build.yml/badge.svg)](https://github.com/react-smart/js-cookie-service/actions/workflows/build.yml)
</p>



## Install

```bash
npm install --save js-cookie-service
```

## Usage

```tsx
import { getAllCookies } from 'js-cookie-service';

export default function Example() {
  return (
    <div>
      <h2>{JSON.stringify(getAllCookies())}</h2>
    </div>
  );
}
```


# API

### getAllCookies

`getAllCookies` hook returns all cookies of the website

```
import React, { Component } from 'react';
import { useCookies } from 'js-cookie-service';
export default function Example() {
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
import { useCookies } from 'js-cookie-service';
export default function Example() {
 return (
   <div>
     <h2>{JSON.stringify(getCookie('test'))}</h2>
   </div>
 );
}

```

### check

`check` hook returns `true` if the specified cookie exists otherwise returns `false`

```
import React, { Component } from 'react';
import { check } from 'js-cookie-service';
export default function Example() {
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
import { setCookie, deleteCookie, deleteAllCookies } from 'js-cookie-service';
export default function Example() {
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

Run `nx test js-cookie-service` to execute the unit tests via [Jest](https://jestjs.io).

## Build

Use the following command to build the library

```bash
nx build js-cookie-service

or

npm run  build  js-cookie-service
```

## Publish to NPM

Use the following command to publish the library to NPM

```bash
npm publish dist/libs/js-cookie-service/
```

## License

MIT © [pavankjadda](https://github.com/pavankjadda)
