import Image from 'next/image'
import React from 'react'
import image1 from '../../../public/assests/images/image1.jpg';
import image2 from '../../../public/assests/images/image2.png';
import image3 from '../../../public/assests/images/image3.png';
import { FaArrowRight } from "react-icons/fa6";


export default function Selling() {
  return (
    <div id='explorenow'>
      {/* section 2 */}
      <section className="text-gray-400 bg-customGreen-900 body-font ">
        <div className="flex flex-col text-center mt-[72px] w-full mb-1">
          <h1 className="sm:text-3xl text-xl title-font mb-4 text-customDarkGreen font-semibold">
            Best Selling
          </h1>
          <p className="text-customDarkGreen">
            Get in on the trend with our curated selection of best-selling styles.
          </p>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Image 1 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover cursor-pointer object-center w-[430px] h-[400px] mx-auto  transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src={image1}
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-customDarkGreen text-xl tracking-widest title-font mb-1 font-semibold">
                  Regular Fit Long Sleeve Top
                </h3>
                <p className="mt-1">$16.00 | 5.0 ⭐</p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover cursor-pointer object-center w-[430px] h-[400px] mx-auto  transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src={image2}
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-customDarkGreen text-xl tracking-widest title-font mb-1 font-semibold">
                  Black Crop Tailored Jacket
                </h3>
                <p className="mt-1">$62.99 | 4.9 ⭐</p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover cursor-pointer object-center w-[430px] h-[400px] mx-auto  transition-transform duration-500 ease-in-out transform hover:scale-110"
                  src={image3}
                />
              </a>
              <div className="mt-4 text-center">
                <h3 className="text-customDarkGreen text-xl tracking-widest title-font mb-1 font-semibold">
                  Textured Sunset Shirt
                </h3>
                <p className="mt-1">$49.99 | 5.0 ⭐</p>
              </div>
            </div>
          </div>

          {/* Centered Button */}
          <div className="flex justify-center mt-10">
            <button className="inline-flex items-center bg-white p-[90px] text-customDarkGreen border-2 border-customDarkGreen py-1 px-3 focus:outline-none hover:bg-customDarkGreen hover:text-customGreen rounded text-base">
              See All <FaArrowRight />

            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
