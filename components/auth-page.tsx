import React from 'react'
import Image from 'next/image'
import AuthForm from './auth/form'

type AuthPageProps = {
  type: 'sign-in' | 'sign-up'
}

const authPageValues = {
    'sign-in': {
        bgImage: '/designer-desk.svg',
        extraClasses: '-bottom-[8%]',
    },
    'sign-up': {
        bgImage: '/network.svg',
        extraClasses: '',
    }
}

const AuthPage = ({ type }: AuthPageProps) => {
  return (
    <div className='flex h-screen'>
        <div className='relative w-96 bg-primary max-lg:hidden'>
            {/*  TODO when the window is resize, it shows that is cropped. Export full SVG and hide the overflow */}
            <Image src={authPageValues[type].bgImage} alt="logo" width={2000} height={2000} className={`h-screen object-cover ${authPageValues[type].extraClasses}`} />
        </div>
        <div className='flex-1 flex flex-col justify-center items-center bg-secondary '>
            <AuthForm type={type} />
        </div>
    </div>
  )
}

export default AuthPage
