import { createContext, useState, useEffect } from 'react'
import { useMoralis } from 'react-moralis'

import { useMoralisQuery } from 'react-moralis'

export const CoinMarketCapContext = createContext()

export const CoinMarketCapProvider = ({ children }) => {
  const getTopTenCoins = async () => {
    try {
      const res = await fetch('/api/getTopTen')
      const data = await res.json()
      return data.data.data
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <CoinMarketCapContext.Provider value={getTopTenCoins}>
      {children}
    </CoinMarketCapContext.Provider>
  )
}
