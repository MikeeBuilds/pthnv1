import { AppProps } from 'next/app'
import '.../styles/globals'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
