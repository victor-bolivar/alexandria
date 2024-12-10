import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { authProviders } from '@/constants/authProviders'
import Button from '../button'

type AuthFormProps = {
    type: 'sign-in' | 'sign-up'
  }
  
  const authFormValues = {
      'sign-in': {
          title: 'Welcome back!',
          description: <span>No account yet? <Link href="/sign-up" className="font-bold">Create one now.</Link></span>,
          },
      'sign-up': {
          title: 'Join Alexandria.',
          description: <span>Already have an account? <Link href="/sign-in" className="font-bold">Sign in.</Link></span>,
      }
  }

const AuthForm = ({type}: AuthFormProps) => {
  return (
    <div className='flex flex-col items-center justify-center bg-white border border-primary rounded-[1.2rem] py-20 px-16 gap-4 max-w-xl'>
      <h1 className='text-primary text-3xl md:text-4xl font-semibold'>{authFormValues[type].title}</h1>
      <Image src='/arrow-right.svg' alt='logo' width={680} height={16} className='w-[80%] md:w-full' />

      <div className='flex flex-col items-center justify-center gap-4 w-96 mt-4'>
      {
        authProviders.map((provider) => ( 
            <Button type='link' size='md' style='auth' key={provider.name} href={`/auth/${provider.name.toLowerCase()}`} extraClasses='w-[60%] relative'>
              {/* Centrar el texto, poner el logo como absolute */}
                <Image src={provider.icon} alt={provider.name} width={provider.width} height={provider.height} className='absolute left-2'/>
                <span className='text-center w-full'>{type === 'sign-in' ? `Sign in with ${provider.name}` : `Sign up with ${provider.name}`}</span>
            </Button>
        ))
      }
      </div>
      <p className='text-primary text-lg font-medium mt-4'>{authFormValues[type].description}</p>
    </div>
  )
}

export default AuthForm
