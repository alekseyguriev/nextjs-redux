import App from 'next/app';
import Cookies from 'js-cookie';
import cookie from 'cookie';
import { wrapper } from '../store';

const getToken = req => {
  if(req) {
    if(!req.headers.cookie) return null;
    return cookie.parse(req.headers.cookie).token;
  } else {
    return Cookies.get('token');
  }
}

class MyApp extends App {
  static getInitialProps = async ({ctx}) => {
    console.log(ctx.store.exist);
    const token = getToken(ctx.req);
    if(token) {
      ctx.store.dispatch({ type: 'SET_TOKEN', payload: token });
    }
    ctx.store.exist = 'exist';
    return {};
  }

  render() {
    const {Component, pageProps} = this.props;
    return <Component {...pageProps} />
  }
}

export default wrapper.withRedux(MyApp)