import { AppProps } from 'next/app'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>POC - Lighthouse Integration</title>
        <meta
          name='description'
          content='POC - Lighthouse Score automated track'
        />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
