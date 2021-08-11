/**
 * A hook to get, save, update and delete browser cookies through JavaScript
 *
 * @author Pavan Kumar Jadda
 * @since 1.0.0
 */
export default function useCookies() {
  /**
   * Get cookie Regular Expression
   *
   * @param name Cookie name
   * @returns property RegExp
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function getCookieRegExp(name: string): RegExp {
    return new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
  }

  /**
   * Return `true` if {@link Document} is accessible, otherwise return `false`
   *
   * @param name Cookie name
   * @returns boolean - whether cookie with specified name exists
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function check(name: string): boolean {
    name = encodeURIComponent(name);
    const regExp: RegExp = getCookieRegExp(name);
    return regExp.test(document.cookie);
  }

  /**
   * Decodes a Uniform Resource Identifier (URI) component
   * @param encodedURIComponent
   *
   * @returns string - decoded URI component
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function safeDecodeURIComponent(encodedURIComponent: string): string {
    try {
      return decodeURIComponent(encodedURIComponent);
    } catch {
      // probably it is not uri encoded. return as is
      return encodedURIComponent;
    }
  }

  /**
   * Get cookies by name
   *
   * @param name Cookie name
   * @returns property value
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function getCookie(name: string): string {
    if (check(name)) {
      name = encodeURIComponent(name);
      const result: RegExpExecArray | null = getCookieRegExp(name).exec(
        document.cookie
      );
      return result !== null && result[1]
        ? safeDecodeURIComponent(result[1])
        : '';
    } else {
      return '';
    }
  }

  /**
   * Get all cookies in JSON format
   *
   * @returns all the cookies in json
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function getAllCookies(): { [key: string]: string } {
    const cookies: { [key: string]: string } = {};
    if (document.cookie && document.cookie !== '') {
      document.cookie.split(';').forEach((currentCookie) => {
        const [cookieName, cookieValue] = currentCookie.split('=');
        cookies[safeDecodeURIComponent(cookieName.replace(/^ /, ''))] =
          safeDecodeURIComponent(cookieValue);
      });
    }
    return cookies;
  }

  /**
   * Set cookie based on provided information
   *
   * @param name     Cookie name
   * @param value    Cookie value
   * @param expiresOrOptions  Number of days until the cookies expires or an actual `Date`
   * @param path  Cookie path. Defaults to '/'
   * @param domain  Cookie domain
   * @param secure  Secure flag
   * @param sameSite  OWASP same site token `Lax`, `None`, or `Strict`. Defaults to `Lax`
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function setCookie(
    name: string,
    value: string,
    expires?: number | Date,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite?: 'Lax' | 'None' | 'Strict'
  ): void {
    let cookieString: string =
      encodeURIComponent(name) + '=' + encodeURIComponent(value) + ';';

    // Set cookie expiration
    if (typeof expires === 'number') {
      const dateExpires: Date = new Date(
        new Date().getTime() + expires * 1000 * 60 * 60 * 24
      );
      cookieString += 'expires=' + dateExpires.toUTCString() + ';';
    } else if (expires instanceof Date) {
      cookieString += 'expires=' + expires.toUTCString() + ';';
    }

    // Set cookie path
    if (path) {
      cookieString += 'path=' + path + ';';
    }

    // Set cookie domain
    if (domain) {
      cookieString += 'domain=' + domain + ';';
    }

    // When sameSite is `None` and secure flag should be `true`
    if (secure === false && sameSite === 'None') {
      secure = true;
      console.warn(
        `[react-cookie-service] Cookie ${name} was forced with secure flag because sameSite=None.`
      );
    }

    // If `secure` flag is `true`, then set cookie secure flag
    if (secure) {
      cookieString += 'secure;';
    }

    // Set cookie sameSite attribute
    cookieString += 'sameSite=' + (sameSite ?? 'Lax') + ';';
    document.cookie = cookieString;
  }

  /**
   * Delete cookie by name
   *
   * @param name   Cookie name
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Cookie secure flag
   * @param sameSite Cookie sameSite flag
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function deleteCookie(
    name: string,
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite: 'Lax' | 'None' | 'Strict' = 'Lax'
  ): void {
    const cookies = document.cookie.split('; ');
    for (let c = 0; c < cookies.length; c++) {
      const d = window.location.hostname.split('.');
      while (d.length > 0) {
        const cookieBase =
          encodeURIComponent(cookies[c].split(';')[0].split('=')[0]) +
          '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=' +
          d.join('.') +
          ' ;path=';
        const p = window.location.pathname.split('/');
        document.cookie = cookieBase + '/';
        while (p.length > 0) {
          document.cookie = cookieBase + p.join('/');
          p.pop();
        }
        d.shift();
      }
    }
    const expiresDate = new Date('Thu, 01 Jan 1970 00:00:01 GMT');
    setCookie(name, '', expiresDate, path, domain, secure, sameSite);
  }

  /**
   * Delete all cookies
   *
   * @param path   Cookie path
   * @param domain Cookie domain
   * @param secure Is the Cookie secure
   * @param sameSite Is the cookie same site
   *
   * @author Pavan Kumar Jadda
   * @since 1.0.0
   */
  function deleteAllCookies(
    path?: string,
    domain?: string,
    secure?: boolean,
    sameSite: 'Lax' | 'None' | 'Strict' = 'Lax'
  ): void {
    const cookies: any = getAllCookies();
    for (const cookieName in cookies) {
      /* eslint-disable */
      if (cookies.hasOwnProperty(cookieName)) {
        deleteCookie(cookieName, path, domain, secure, sameSite);
      }
    }
  }

  //Return functions
  return {
    check,
    getCookie,
    getAllCookies,
    setCookie,
    deleteCookie,
    deleteAllCookies,
  };
}
