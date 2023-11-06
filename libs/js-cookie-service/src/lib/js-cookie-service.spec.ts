import { v4 as uuidv4 } from 'uuid';
import { check, deleteAllCookies, deleteCookie, getAllCookies, getCookie, setCookie } from '@js-smart/js-cookie-service';


describe('JSCookieService', () => {
  let token = '';

  //Generate and set X-Auth-Token cookie
  beforeAll(() => {
    token = uuidv4();
    console.log('Generated random X-Auth-Token: ', token);
    setCookie('X-Auth-Token', token);
  });

  it('checks for X-Auth-Token cookie', () => {
    expect(check('X-Auth-Token')).toBeTruthy();
  });

  it('gets X-Auth-Token and matches with previously generated cookie', () => {
    expect(getCookie('X-Auth-Token')).toBe(token);
  });

  it('get all cookies and result should contain X-Auth-Token token', () => {
    expect(getAllCookies()).not.toBeUndefined();
  });

  it('set token cookie with expiration for 2 days and cookie should contain expiration 2 days', () => {
    setCookie('token', token, { expires: 2 });
    expect(getCookie('token')).toBe(token);
    deleteCookie('token');
  });

  it('set token cookie with expiration for 1 hour and cookie should contain expiration 1 hour', () => {
    setCookie('token', token, { expires: new Date(new Date().getTime() * 1000 * 60 * 60) });
    expect(getCookie('token')).toBe(token);
    deleteCookie('token');
  });

  it('set token cookie with Path and cookie should contain path', () => {
    setCookie('token', token, { path: '/' });
    expect(getCookie('token')).toBe(token);
    deleteCookie('token');
  });

  it('set token cookie with Domain and cookie should contain Domain', () => {
    setCookie('token', token, { domain: 'localhost' });
    expect(getCookie('token')).toBe(token);
    deleteCookie('token');
  });

  it('set token cookie with Secure false and sameSite Strict', () => {
    setCookie('token', token, { secure: false, sameSite: 'Strict' });
    expect(getCookie('token')).toBe(token);
    deleteCookie('token');
  });

  it('set token cookie with Secure false and sameSite Lax', () => {
    setCookie('token', token, { secure: false, sameSite: 'Lax' });
    expect(getCookie('token')).toBe(token);
    deleteCookie('token');
  });

  it('set token cookie with Secure true and sameSite None', () => {
    setCookie('token', token, { secure: true, sameSite: 'None' });
    expect(getCookie('token')).not.toBe(token);
    deleteCookie('token');
  });


  it('deletes existing X-Auth-Token cookie and cookie should not present', () => {
    deleteCookie('X-Auth-Token');
    expect(check('X-Auth-Token')).toBeFalsy();
  });

  it('delete all cookies', () => {
    deleteAllCookies();
    expect(check('X-Auth-Token')).toBeFalsy();
  });

});

