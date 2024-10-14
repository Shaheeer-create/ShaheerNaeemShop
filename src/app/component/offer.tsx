import Image from 'next/image';
import React from 'react';
import Offerpic from '../../../public/assests/product/offer2.png';

const Offer = () => {
  return (
    <div className="bg-white flex justify-center items-center min-h-screen p-4" id="feature">
      <div className="bg-green-100 p-6 md:p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto">
        {/* Left Section: Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <Image
            src={Offerpic}
            alt="Offer"
            className="w-full max-w-xs h-auto rounded-lg"
          />
        </div>

        {/* Right Section: Offer Details */}
        <div className="md:ml-12 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 md:mb-6">Exclusive Offer</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
            Unlock the ultimate style upgrade with our exclusive offer. Enjoy savings of up to 40% off on our latest New Arrivals.
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center md:justify-start space-x-6 mb-6 md:mb-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800">06</div>
              <div className="text-sm md:text-lg text-gray-600">Days</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800">18</div>
              <div className="text-sm md:text-lg text-gray-600">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-800">48</div>
              <div className="text-sm md:text-lg text-gray-600">Minutes</div>
            </div>
          </div>

          {/* Buy Now Button */}
          <button className="px-6 md:px-8 py-3 md:py-4 bg-green-600 text-white font-bold text-base md:text-lg rounded hover:bg-green-700 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offer;
