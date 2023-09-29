import { HeroImg } from '@/public/images'
import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
   <>
   <div className=" flex justify-evenly items-center font-extrabold text-transparent text-8xl max-lg:text-6xl max-sm:text-3xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
    <p> Make Your Imagination turn into Reality</p>
    <Image src={HeroImg} className=' w-[500px] max-md:w-[400px]' alt='hero'/>
   </div>
   
   </>
  )
}

export default HeroSection