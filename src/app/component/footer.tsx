import Link from 'next/link';
import React from 'react';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";


const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-10" id='Contact'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start">
          {/* Left Section - Logo and Social Media */}

          <div>
            <h2 className="text-2xl font-bold mb-4">Shaheer Naeem</h2>
            <p className="mb-4">Social Media</p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              <Link href="https://www.youtube.com/@MusicBySherry?sub_confirmation=1" aria-label="Youtube" className="text-4xl hover:text-red-600">
              <AiOutlineYoutube />

              </Link>
             
              <Link href="https://www.instagram.com/_.irtiza_naeem._/" aria-label="Instagram" className="text-4xl hover:text-pink-500">
              <AiOutlineInstagram />

              </Link>
            </div>
          </div>

          {/* Middle Section - Shop & Company Links */}
          <div className="flex space-x-16">
            {/* Shop Links */}
            <div>
              <h3 className="font-semibold mb-4">SHOP</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Products</a></li>
                <li><a href="#" className="hover:text-gray-300">Overview</a></li>
                <li><a href="#" className="hover:text-gray-300">Pricing</a></li>
                <li><a href="#" className="hover:text-gray-300">Releases</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">COMPANY</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
                <li><a href="#" className="hover:text-gray-300">News</a></li>
                <li><a href="#" className="hover:text-gray-300">Support</a></li>
              </ul>
            </div>
          </div>

          {/* Right Section - Newsletter Signup */}
          <div>
            <h3 className="font-semibold mb-4">STAY UP TO DATE</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md text-gray-700"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-r-md text-white"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section - Terms Links */}
        <div className="border-t border-gray-600 mt-8 pt-4 flex justify-between items-center text-sm">
          <p>&copy; 2024 Shaheer. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-gray-300">Terms</a>
            <a href="#" className="hover:text-gray-300">Privacy</a>
            <a href="#" className="hover:text-gray-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
