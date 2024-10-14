import React from 'react';

const FeedBack = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-customDarkGreen">Feedback Corner</h2>
      <div className="flex justify-center space-x-4">
       
        <div className="bg-white shadow-lg p-6 rounded-lg w-80 relative">

          <p className="font-semibold text-gray-800 mb-4 text-center">Emily Wilson</p>
          
         
          <svg className="absolute top-2 left-3 w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.16 3.72C7.88 5.05 7.26 6.68 7.26 8.61 7.26 9.86 7.6 10.93 8.26 11.84 8.93 12.74 9.84 13.39 10.99 13.81 10.43 14.93 9.58 15.9 8.43 16.72 7.29 17.54 5.99 18 4.56 18L3.08 17.91C3.41 15.82 3.93 14.05 4.64 12.61 5.36 11.16 6.25 9.99 7.32 9.1 6.56 8.5 6.18 7.66 6.18 6.57 6.18 5.68 6.43 4.94 6.92 4.36 7.41 3.78 8.07 3.45 8.91 3.37L9.16 3.72ZM19.76 3.72C18.48 5.05 17.86 6.68 17.86 8.61 17.86 9.86 18.2 10.93 18.86 11.84 19.53 12.74 20.44 13.39 21.59 13.81 21.03 14.93 20.18 15.9 19.03 16.72 17.89 17.54 16.59 18 15.16 18L13.68 17.91C14.01 15.82 14.53 14.05 15.24 12.61 15.96 11.16 16.85 9.99 17.92 9.1 17.16 8.5 16.78 7.66 16.78 6.57 16.78 5.68 17.03 4.94 17.52 4.36 18.01 3.78 18.67 3.45 19.51 3.37L19.76 3.72Z" />
          </svg>

          <blockquote className="italic text-gray-600 ml-12">
            The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I’m beyond satisfied!
          </blockquote>
        </div>

       
        <div className="bg-green-100 shadow-lg p-6 rounded-lg w-80 relative">
         
          <p className="font-semibold text-gray-800 mb-4 text-center">Sarah Thompson</p>

         
          <svg className="absolute top-2 left-3 w-10 h-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.16 3.72C7.88 5.05 7.26 6.68 7.26 8.61 7.26 9.86 7.6 10.93 8.26 11.84 8.93 12.74 9.84 13.39 10.99 13.81 10.43 14.93 9.58 15.9 8.43 16.72 7.29 17.54 5.99 18 4.56 18L3.08 17.91C3.41 15.82 3.93 14.05 4.64 12.61 5.36 11.16 6.25 9.99 7.32 9.1 6.56 8.5 6.18 7.66 6.18 6.57 6.18 5.68 6.43 4.94 6.92 4.36 7.41 3.78 8.07 3.45 8.91 3.37L9.16 3.72ZM19.76 3.72C18.48 5.05 17.86 6.68 17.86 8.61 17.86 9.86 18.2 10.93 18.86 11.84 19.53 12.74 20.44 13.39 21.59 13.81 21.03 14.93 20.18 15.9 19.03 16.72 17.89 17.54 16.59 18 15.16 18L13.68 17.91C14.01 15.82 14.53 14.05 15.24 12.61 15.96 11.16 16.85 9.99 17.92 9.1 17.16 8.5 16.78 7.66 16.78 6.57 16.78 5.68 17.03 4.94 17.52 4.36 18.01 3.78 18.67 3.45 19.51 3.37L19.76 3.72Z" />
          </svg>

          <blockquote className="italic text-gray-600 ml-12">
            I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!
          </blockquote>
        </div>

        
        <div className="bg-white shadow-lg p-6 rounded-lg w-80 relative">
        
          <p className="font-semibold text-gray-800 mb-4 text-center">Olivia Martinez</p>

        
          <svg className="absolute top-2 left-3 w-10 h-10 text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M9.16 3.72C7.88 5.05 7.26 6.68 7.26 8.61 7.26 9.86 7.6 10.93 8.26 11.84 8.93 12.74 9.84 13.39 10.99 13.81 10.43 14.93 9.58 15.9 8.43 16.72 7.29 17.54 5.99 18 4.56 18L3.08 17.91C3.41 15.82 3.93 14.05 4.64 12.61 5.36 11.16 6.25 9.99 7.32 9.1 6.56 8.5 6.18 7.66 6.18 6.57 6.18 5.68 6.43 4.94 6.92 4.36 7.41 3.78 8.07 3.45 8.91 3.37L9.16 3.72ZM19.76 3.72C18.48 5.05 17.86 6.68 17.86 8.61 17.86 9.86 18.2 10.93 18.86 11.84 19.53 12.74 20.44 13.39 21.59 13.81 21.03 14.93 20.18 15.9 19.03 16.72 17.89 17.54 16.59 18 15.16 18L13.68 17.91C14.01 15.82 14.53 14.05 15.24 12.61 15.96 11.16 16.85 9.99 17.92 9.1 17.16 8.5 16.78 7.66 16.78 6.57 16.78 5.68 17.03 4.94 17.52 4.36 18.01 3.78 18.67 3.45 19.51 3.37L19.76 3.72Z" />
          </svg>

          <blockquote className="italic text-gray-600 ml-12">
            I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!
          </blockquote>
        </div>
      </div>

      
      <div className="flex justify-center mt-6">
        <button className="mx-2 px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400">
          &larr;
        </button>
        <button className="mx-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600">
          &rarr;
        </button>
      </div>
    </div>
  );
}

export default FeedBack;
