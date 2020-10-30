import { useSelector } from 'react-redux';
import DetectRTC from 'detectrtc';
import Cookies from 'js-cookie';

export default function Home() {
  const token = useSelector(state => state.token);
  console.log(token);
  return <button onClick={() => Cookies.set('token', 'super secret token')}>set token</button>;
}
