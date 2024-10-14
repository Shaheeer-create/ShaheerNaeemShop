import Link from 'next/link'
import React from 'react'
import Product1 from '../../../public/assests/product/Product1.jpeg';
import Product2 from '../../../public/assests/product/Product2.jpeg';
import Product4 from '../../../public/assests/product/Product4.jpeg';
import Product5 from '../../../public/assests/product/Product5.jpeg';
import Product6 from '../../../public/assests/product/Product 6.jpeg';
import Product7 from '../../../public/assests/product/Product7.jpeg';
import Product8 from '../../../public/assests/product/Product8.jpeg';
import Product9 from '../../../public/assests/product/Product9.jpeg';

import Image from 'next/image';

const Product = () => {
  return (
   <div id='shop'>
{/* starting */}
<section>
  <header className="text-gray-400 bg-white body-font">
    <div className="container mx-auto flex flex-col items-center p-5">
      
      <h1 className="text-3xl text-customDarkGreen mb-9 text-center">Our Product</h1>
      
      <nav className="flex flex-wrap items-center text-base justify-center gap-5">
      <Link href="/" className="relative group mr-5">
           
              <span className="text-black group-hover:text-customDarkGreen transition-all duration-300">SALE</span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-customDarkGreen transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link href="/" className="relative group mr-5">
           
           <span className="text-black group-hover:text-customDarkGreen transition-all duration-300">HOT</span>
           <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-customDarkGreen transition-all duration-300 group-hover:w-full"></span>
         </Link>

         <Link href="/" className="relative group mr-5">
           
           <span className="text-black group-hover:text-customDarkGreen transition-all duration-300">NEW ARRIVAL</span>
           <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-customDarkGreen transition-all duration-300 group-hover:w-full"></span>
         </Link>

         <Link href="/" className="relative group mr-5">
           
           <span className="text-black group-hover:text-customDarkGreen transition-all duration-300">ACCESSORIES</span>
           <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-customDarkGreen transition-all duration-300 group-hover:w-full"></span>
         </Link>
      </nav>
      
    </div>
  </header>


  <div className="container px-5 py-24 mx-auto -mt-9">
  <div className="flex flex-wrap -m-4">
  <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product1}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
      Spread Collar Shirt
    </h2>
    <p className="mt-1 ml-[80px]">$16.00  |  5.0 ⭐</p>
  </div>
</div>

    {/* Image 2 */}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product2}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
    White Solid Formal Shirt
    </h2>
    <p className="mt-1 ml-[80px]">$39.00  |  4.9 ⭐</p>

  </div>
</div>
    {/* Image 3 */}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product4}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
    Shine On Me Blouse
    </h2>
    <p className="mt-1 ml-[80px]">$42.99  |  4.8 ⭐</p>

  </div>
</div>

    {/* Image 4 */}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product5}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
    Gray Solid Padded Jacket
    </h2>
    <p className="mt-1 ml-[80px]">$32.99  |  4.7 ⭐</p>

  </div>
</div>
    {/* Product 5 */}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product6}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
    Printed Loose T-shirt
    </h2>
    <p className="mt-1 ml-[80px]">$39.99  |  5.0 ⭐</p>

  </div>
</div>
    {/* Product 6 */}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product7}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
    Summer Wind Crop Shirt
    </h2>
    <p className="mt-1 ml-[80px]">$39.95  |  4.7 ⭐</p>

  </div>
</div>
    {/* Product 7 */}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product8}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
    Tailored Jacket
    </h2>
    <p className="mt-1 ml-[80px]">$46.00  |  4.9⭐</p>

  </div>
</div>
    {/* product 8 inshallah */}
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
  <div className="relative rounded overflow-hidden w-[318px] h-[378px]">
    <Image
      alt="ecommerce"
      className="object-cover cursor-pointer object-center w-full h-full block transition-transform duration-500 ease-in-out transform hover:scale-110"
      src={Product9}
    />
  </div>
  <div className="mt-4">
    <h2 className="text-black title-font text-lg font-medium ml-[80px]">
    Solid Round Neck T-shirt
    </h2>
    <p className="mt-1 ml-[80px]">$36.00  |  5.0⭐</p>

  </div>
</div>

  </div>
</div>

</section>


    {/* ending point */}
   </div>
  )
}

export default Product