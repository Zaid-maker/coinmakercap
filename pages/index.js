import Head from 'next/head'
//import CMCtable from '../components/cmc-table/cmcTable'
import Header from '../components/Header'
import Trending from '../components/trending'
//import SwapCryptoModal from '../components/swapCryptoModal'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Coin Maker Cap Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      {/* <SwapCryptoModal /> */}
      <div className="mt-10" />
      <Trending />
      <div className="mt-20" />
      {/* <CMCtable /> */}
    </div>
  )
}
