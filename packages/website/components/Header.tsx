import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'


interface Props { }
export function Header(props: Props) {
  return (
    <header className="grid grid-cols-4 p-4 w-full max-w-7xl">
      <Link to="/" className="flex justify-center items-center mr-auto">
        <h1 className="font-cool font-extrabold text-blue-900 ml-2 mt-1 text-2xl">CryptoLienz NFT</h1>
      </Link>
    </header>
  )
}
