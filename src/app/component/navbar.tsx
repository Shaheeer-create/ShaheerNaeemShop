import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../../public/assests/images/Logo.jpeg';
import { BsHandbag } from "react-icons/bs";


const Navbar = () => {
  return (
    <div>
      <header className="text-gray-400 bg-customGreen body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link className="flex title-font font-medium items-center text-customDarkGreen mb-4 md:mb-0" href="/">
            <Image src={Logo} height={50} width={50} alt="Company Logo" className="rounded-full" />
            <span className="ml-3 text-xl font-Monument">Shaheer Naeem</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center justify-center text-xl gap-9">
            <Link href="/" className="relative group mr-5">
           
              <span className="text-customDarkGreen group-hover:text-white transition-all duration-300">Home</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#shop" className="relative group mr-5">
              <span className="text-customDarkGreen group-hover:text-white transition-all duration-300">Shop</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#feature" className="relative group mr-5">
              <span className="text-customDarkGreen group-hover:text-white transition-all duration-300">Feature</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#Contact" className="relative group mr-5">
              <span className="text-customDarkGreen group-hover:text-white transition-all duration-300">Contact</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
            
          </nav>
          <BsHandbag  className='text-2xl mr-10 cursor-pointer text-customDarkGreen' />

          <button className="inline-flex items-center bg-customGreen text-customDarkGreen  border-2 border-customDarkGreen  py-1 px-3 focus:outline-none hover:bg-customDarkGreen  hover:text-customGreen rounded text-base mt-4 md:mt-0">
      Login
     
    </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
