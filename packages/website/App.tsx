import React, { createContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { HomeView } from './views/HomeView'
import { Header } from './components/Header'
import Web3 from 'web3'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    ethereum: any;
    web3: Web3;
  }
}

export interface IAppContext {
  ethAddress?: string
  connectMetamask: () => Promise<void>
}

// @ts-ignore since the types requires a default value to the `createContext`
// method, but it serves no purpose here.
export const AppContext = createContext<IAppContext>()

export function App() {
  const [ethAddress, setEthAddress] = useState<string>()

  async function connectMetamask() {
    try {
      const addr = (await window.ethereum.request({ method: 'eth_requestAccounts' }))[0]

      setEthAddress(addr)
    } catch (e) {
      e.code === 4001
        ? console.warn('EIP-1193 userRejectedRequest error. Please connect to MetaMask.', e)
        : console.error(e)
    }
  }

  async function reconnectMetamask() {
    const accounts = await window.web3.eth.getAccounts()
    if (accounts.length !== 0) setEthAddress(accounts[0])
  }

  useEffect(() => {
    // Inject web3 in window
    window.web3 = new Web3(Web3.givenProvider)
    reconnectMetamask()
  }, [])

  return (
    <AppContext.Provider value={{ // @ts-ignore
      ethAddress,
      connectMetamask,
    }}>
      <Router>
        <div className="min-h-screen flex flex-col items-center">
          <Header />
          <Switch>
            <Route path="/" component={HomeView} />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  )
}
