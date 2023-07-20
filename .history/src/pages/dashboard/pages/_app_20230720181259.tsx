import { AppProps } from 'next/app'
import 'src/styles/globals.css' // Adjust this path as necessary

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
