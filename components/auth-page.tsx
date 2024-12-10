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
        <div className='relative w-2/5 bg-primary overflow-hidden'>
            {/*  TODO when the window is resize, it shows that is cropped. Export full SVG and hide the overflow */}
            <Image src={authPageValues[type].bgImage} alt="logo" width={2000} height={2000} className={`absolute -bottom-[0%] -left-[0%] h-screen ${authPageValues[type].extraClasses}`} />
        </div>
        <div className='w-3/5 flex flex-col justify-center bg-secondary px-32 py-24'>
            <AuthForm type={type} />
        </div>
    </div>
  )
}

export default AuthPage
