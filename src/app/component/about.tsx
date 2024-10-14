"use client"
import React from 'react'
import Image4 from '../../../public/assests/images/image4.png';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';


const About = () => {
  return (
    <div>
{/* starting point */}

<section className="text-gray-400 bg-customGreen body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-4xll mb-4 font-medium text-customDarkGreen">
Discover and Find Your Own
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Fashion !', 'Fashion Apparel !' ,'Fashion Clothing!','Fashion Outfit'],
    autoStart: true,
    loop: true,
  }}
/>


      </h1>
      <p className="mb-8 leading-relaxed text-custompGreen">
      Discover our exclusive range of trendy outfits and accessories designed to elevate your personal style. Browse our thoughtfully selected assortment of chic apparel and unique accessories that reflect your individual flair. Uncover our handpicked selection of fashionable garments and striking accessories crafted to complement your distinct look.      </p>
      <div className="flex justify-center ">
        <Link href='#explorenow'>
      <button  className="inline-flex text-white bg-customDarkGreen border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg shadow-lg">
  Explore Now
</button>
</Link>

        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
      height={540}
      width={320}
        className="object-cover object-center rounded rounded-tl-[65px] rounded-br-[65px] ml-10"
        alt="hero"
        src={Image4}
      />
    </div>
  </div>
</section>



{/* Ending Point */}
    </div>
  )
}

export default About