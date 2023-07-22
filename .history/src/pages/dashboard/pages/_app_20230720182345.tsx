import { AppProps } from 'next/app'
import '.../sty'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
