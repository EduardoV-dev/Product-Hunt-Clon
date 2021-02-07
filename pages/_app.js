import Head from 'next/head';
import { Provider } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import store from '../redux';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Product Hunt Next.js</title>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/static/css/global.css" />
        <meta charSet='UTF-8' />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);
export default wrapper.withRedux(MyApp);