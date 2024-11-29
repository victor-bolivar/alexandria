import React from 'react'
import Image from 'next/image'
import Button from '../button'
import { garamond } from '@/lib/fonts'

const Navbar = () => {
  return (
    <header>
      <nav className='flex justify-between items-center h-[20vh]'>
        <div className='flex items-center gap-4'>
          {/* TODO until fixing the logo */}
          {/* <Image src="/text-logo.svg" alt="logo" width={191} height={24} /> */}
          <h1 className={`text-xl tracking-[0.7rem] text-secondary ${garamond.className}`}>Alexandria</h1>
        </div>
        <div className='flex items-center gap-16'>
            <Button type='link' style='borderless' href='/sign-in' size='md'>Sign in</Button>
            <Button type='link' style='minimal' href='/sign-up' size='md'>Get started</Button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
