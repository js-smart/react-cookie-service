import { useCookies } from '@ngxsmart/react-cookie-service';
import { v4 as uuidv4 } from 'uuid';

describe('useCookies hooks tests', () => {
  const { check, getCookie, getAllCookies, setCookie, deleteCookie, deleteAllCookies } = useCookies();
  let token = '';
  beforeAll(() => {
    token = uuidv4();
    console.log('Generated random X-Auth-Token: ', token);
    setCookie('X-Auth-Token', token);
  });

  it('checks for X-Auth-Token cookie', () => {
    expect(check('X-Auth-Token')).toBeTruthy();
  });

  it('gets X-Auth-Token and matches with previously generated cookie', () => {
    expect(getCookie('X-Auth-Token')).not.toBeUndefined();
  });

  it('get all cookies and result should contain X-Auth-Token token', () => {
    expect(getAllCookies()).not.toBeUndefined();
  });

  it('deletes existing cookie and cookie should not present', () => {
    deleteCookie('X-Auth-Token');
    expect(check('X-Auth-Token')).toBeFalsy();
  });

  it('delete all cookies', () => {
    deleteAllCookies();
    expect(check('X-Auth-Token')).toBeFalsy();
  });
});
