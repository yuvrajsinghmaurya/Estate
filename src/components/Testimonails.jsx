import React from 'react';
import { testimonialsData } from '../assets/assets';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className="py-16 bg-gray-50" id='Testimonails'>
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Customer <span className="text-blue-600">Testimonials</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Real stories from those who found home with us
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 ${
              index === 2 ? 'sm:col-span-2 lg:col-span-1 sm:mx-auto' : ''
            }`}
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-sm text-blue-500 mb-2">{testimonial.title}</p>
            <div className="flex justify-center mb-2">
              {Array(testimonial.rating)
                .fill()
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
            </div>
            <p className="text-gray-600 text-sm">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
