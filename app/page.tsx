import Navbar from '@/components/navigation/navbar'
import React from 'react'
import Button from '@/components/button'
import { inter } from '@/lib/fonts'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className="h-screen relative px-28 pb-16">
      {/* Background colors */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-blue-800" />
        <div className="absolute inset-0 bg-blue-600 clip-diagonal-secondary" />
        <div className="absolute inset-0 bg-blue-300 clip-diagonal-terciary" />
      </div>
      
      {/* Content */}
      <div className="relative flex flex-col z-10">
        <Navbar />
          <main className="h-[80vh] text-secondary tracking-widest relative flex flex-col justify-around pb-10 xl:pb-24 lg:w-[60%]">
            <div className="flex flex-col justify-around gap-6">
              <div className={`flex flex-col text-7xl xl:text-[5rem] ${inter.className} tracking-[0.8rem]`}>
                <h1 className="font-light">LEARN</h1>
                <h1 className="font-extrabold">SMARTER,</h1>
                <h1>
                  <span className="font-semibold">NOT</span>
                  <span className="font-extralight"> HARDER</span>
                </h1>
              </div>
              
              <hr className="w-[80%]" />
              <p className={`text-sm w-[80%] ${inter.className}`}>
                Your brain&apos;s new best friend that helps you harness the power of spaced repetition—a
                science-backed method to retain knowledge, build skills, and stay ahead.
              </p>
            </div>
            
            <div className="flex w-[80%] gap-4">
              <Button 
                type="link" 
                style="primary" 
                href="/sign-up" 
                size="lg" 
                extraClasses="grow"
              >
                Get started!
              </Button>
              <Button 
                type="link" 
                style="secondary" 
                href="/sign-in" 
                size="lg" 
                extraClasses=""
              >
                Why should I use it?
              </Button>
            </div>
          </main>
      </div>
      
      {/* Hero Image */}
      <div className="absolute inset-0 overflow-hidden  w-screen h-screen">
          <Image
            src="/brain.png"
            alt="hero"
            width={1200}
            height={1200}
            className="absolute left-[45%] max-lg:hidden lg:-bottom-[1%] xl:-bottom-[3%]"
          />
        </div>
    </div>
  )
}

export default HomePage
