import Head from 'next/head';
import AuthProvider from '../hooks/context/authContext';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Product Hunt Next.js</title>
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/static/css/global.css" />
        <script src="https://kit.fontawesome.com/40db8b5196.js" crossOrigin="anonymous"></script>
      </Head>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </>
  )
}

export default MyApp;