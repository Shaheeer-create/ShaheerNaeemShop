import React from 'react';
import Accessorires from '../../../public/assests/product/accesories.jpg';
import Dresses from '../../../public/assests/product/Dresses.jpg';
import OutWear from '../../../public/assests/product/OutWear.jpg';
import Image from 'next/image';

const ForYou = () => {
  return (
    <div>
      {/* Starting */}
      <section className="text-gray-400 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="flex flex-wrap flex-col py-6 mb-12 text-center">
              <h1 className="text-customDarkGreen font-medium title-font text-3xl mb-11">
                Design Clothes For You
              </h1>
              <p className="leading-relaxed text-base text-custompGreen">
                Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 text-center">
            {/* Image 1 - Accessories */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <div className="relative group h-96"> 
                  <Image
                    alt="Accessories"
                    layout="fill" 
                    objectFit="cover" 
                    className="transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    src={Accessorires}
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium title-font text-black mt-5">
                Accessories
              </h2>
              <p className="text-base leading-relaxed mt-2 text-custompGreen">
                Complete your ensemble with designer accessories such as handbags, scarves, belts, and hats.
              </p>
            </div>

            {/* Image 2 - Dresses */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <div className="relative group h-96"> 
                  <Image
                    alt="Dresses"
                    layout="fill"  
                    objectFit="cover"  
                    className="transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    src={Dresses}
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium title-font text-black mt-5">
                Dresses
              </h2>
              <p className="text-base leading-relaxed mt-2 text-custompGreen">
                Elevate your wardrobe with our stunning designer dresses, perfect for any occasion.
              </p>
            </div>

            {/* Image 3 */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg overflow-hidden">
                <div className="relative group h-96"> 
                  <Image
                    alt="Dresses"
                    layout="fill"  
                    objectFit="cover"  
                    className="transform transition-transform duration-500 group-hover:scale-110 cursor-pointer"
                    src={OutWear}
                  />
                </div>
              </div>
              <h2 className="text-xl font-medium title-font text-black mt-5">
                OutWear
              </h2>
              <p className="text-base leading-relaxed mt-2 text-custompGreen">
              Browse luxurious designer coats, jackets, and blazers to stay stylishly warm during colder seasons.              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Ending */}
    </div>
  );
};

export default ForYou;
