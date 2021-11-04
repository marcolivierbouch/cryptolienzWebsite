import { AbiItem } from 'web3-utils'

async function fetchAbi() {
  const response = await fetch("https://cryptolienz-contract-abi.s3.amazonaws.com/CryptoLienzNFT.json")
  const result = response.json()
  console.log(result)

  return result
}

export async function getContract() {
  const abi = await fetchAbi()

  const contract = new window.web3.eth.Contract(
      abi.abi as AbiItem[],
      abi.networks[4].address
  )

  return contract
}
