import React, { useContext } from 'react'
import { AppContext } from '../App'


import { Button } from '../components/Button'
import { getContract } from '../helpers/smartContract'


export function HomeView() {

  const appContext = useContext(AppContext)

  async function mintNFT() {
    const contract = await getContract()
    console.log(contract)

    await contract.methods.mintNFT(appContext.ethAddress).send({
      from: appContext.ethAddress,
    })

  }

  return (
    <main className="w-full max-w-7xl p-4">
      <div className="grid grid-cols-5 gap-2 pt-5">
        <Button  className="ml-auto" type="primary"  onClick={appContext.connectMetamask}> Connect metamask </Button>
      </div>
      <div className="grid grid-cols-15 gap-2 pt-5"> Your eth address is: 
        {
          appContext.ethAddress
        }
      </div>
      <div className="grid grid-cols-5 gap-2 pt-5">
        <Button className="ml-auto" type="primary" onClick={mintNFT}> Mint nft </Button>
      </div>
    </main>
  )
}
