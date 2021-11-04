import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  type: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
  href?: string // External website
  link?: string // Internal router link
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button(props: ButtonProps) {
  const classes: { [key in ButtonProps['type']]: string } = {
    primary: `flex justify-center items-center bg-blue-500 text-white font-bold px-4 py-2 rounded shadow hover:shadow-lg whitespace-nowrap ${props.disabled ? 'opacity-60' : ''}`,
    secondary: 'flex justify-center items-center bg-white border px-4 py-2 rounded shadow-sm text-sm font-bold whitespace-nowrap transition-all hover:bg-blue-50 hover:border-blue-700 hover:text-blue-800 hover:border-opacity-50 hover:shadow-md'
  }

  if (props.href) {
    return (
      <a
        href={props.href}
        className={`${classes[props.type]} ${props.className}`}>
        {props.children}
      </a>
    )
  }

  if (props.link) {
    return (
      <Link
        className={`${classes[props.type]} ${props.className}`}
        to={props.link}>
        {props.children}
      </Link>
    )
  }

  return (
    <button
      className={`${classes[props.type]} ${props.className}`}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}
