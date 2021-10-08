import { useCookies } from '@react-smart/react-cookie-service';

export function App() {
  const { getAllCookies } = useCookies();
  return <div>{JSON.stringify(getAllCookies())}</div>;
}

export default App;
