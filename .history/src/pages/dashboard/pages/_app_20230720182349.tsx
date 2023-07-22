import { AppProps } from 'next/app'
import '.../styles/g'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
