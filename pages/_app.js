import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'
import { CoinMarketCapProvider } from '../context/context'

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
    >
      <CoinMarketCapProvider>
        <Component {...pageProps} />
      </CoinMarketCapProvider>
    </MoralisProvider>
  )
}

export default MyApp
