import useCookies from '@js-smart/react-cookie-service';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

export function App() {
	const {check,getCookie,setCookie,deleteCookie} = useCookies();
	const [token, setToken] = useState(check('X-Auth-Token') ? getCookie('X-Auth-Token') : 'token not set');

	function setAndRefreshCookie(cookieName: string) {
		setCookie(cookieName, uuidv4(), {path: '/'});
		setToken(check('X-Auth-Token') ? getCookie('X-Auth-Token') : 'token not set');
	}

	function deleteAndRefreshCookie(cookieName: string) {
		deleteCookie('X-Auth-Token')
		setToken(check('X-Auth-Token') ? getCookie('X-Auth-Token') : 'token not set');
	}
	return (
		<>
			<div />
			<br />
			<hr />
			<br />
			<div>
				X-Auth-Token: {token}
			</div>
			<br/>
			<button onClick={() => setAndRefreshCookie('X-Auth-Token')}>Set X-Auth-Token cookie</button>
			<button style={{marginLeft:'20px'}} onClick={() => deleteAndRefreshCookie('X-Auth-Token')}>Delete X-Auth-Token</button>
		</>
	);
}

export default App;
