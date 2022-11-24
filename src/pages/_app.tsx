import '/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/common/Layout'
import FooterNavi from '../components/common/FooterNavi'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
