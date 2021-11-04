import { AbiItem } from 'web3-utils'

async function fetchAbi() {
  const response = await fetch(import.meta.env.VITE_ABI_URL)
  const result = response.json()
  console.log(result)

  return result
}

export async function getContract() {
  const abi = await fetchAbi()

  const contract = new window.web3.eth.Contract(
      abi.abi as AbiItem[],
      abi.networks[import.meta.env.VITE_ETH_NETWORK_ID].address
  )

  return contract
}
