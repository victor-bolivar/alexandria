import React from 'react'
import Link from 'next/link'

type CommonButtonProps = {
  style: 'primary' | 'secondary' | 'minimal' | 'borderless' | 'auth'
  size?: 'sm' | 'md' | 'lg'
  extraClasses?: string
  children: React.ReactNode
}
type ButtonPropsLink = CommonButtonProps & {
  type: 'link'
  href: string
}
type ButtonPropsButton = CommonButtonProps & {
  type: 'button'
  onClick: () => void
}
type ButtonProps = ButtonPropsLink | ButtonPropsButton

const BUTTON_SIZES = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'px-4 py-4 font-semibold text-xl drop-shadow-lg',
} as const

const BUTTON_STYLES = {
  primary: 'bg-secondary text-primary border border-primary rounded-sm hover:bg-primary hover:text-secondary hover:border-secondary transition-all duration-300',
  secondary: 'bg-blue-400 text-secondary border border-secondary rounded-sm tracking-widest hover:bg-secondary hover:text-primary transition-all duration-300',
  minimal: 'bg-secondary text-primary rounded-sm tracking-widest hover:bg-primary hover:text-secondary transition-all duration-300',
  borderless: 'bg-transparent text-secondary tracking-widest hover:bg-secondary hover:text-primary transition-all duration-300',
  auth: 'bg-white text-primary border border-primary px-12 py-2 rounded-full px-2 justify-between hover:bg-gray-100',
} as const

const Button: React.FC<ButtonProps> = ({ size = 'md', extraClasses, ...props }) => {
  const className = `flex items-center justify-center text-center px-4 py-2 ${BUTTON_STYLES[props.style]} ${BUTTON_SIZES[size]} ${extraClasses}`

  switch (props.type) {
    case 'link':
      return (
        <Link 
          className={className} 
          href={props.href}
          role="button"
        >
          {props.children}
        </Link>
      )
    case 'button':
      return (
        <button 
          className={className} 
          onClick={props.onClick}
          type="button"
        >
          {props.children}
        </button>
      )
  }
}

export default Button
