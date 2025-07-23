import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center  justify-center container mx-auto p-14 md:px-32 w-full overflow-hidden ' id='About'>

        <h1 className='text-2xl sm:text-4xl font-bold md-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>

        <p className='text-gray-500 max-w-80 text-center mb-8'>Passinate About Properties ,  Dedicated to Your Vision </p>

        <div className='flex flex-col md:flex-row items-center md:items md:gap-20 '>
            <img src={assets.brand_img} alt=""  className='w-full sm:w-1/2 max-w-lg'/>

            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
              <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>

              <div> 
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p className=''> Years of Experience</p>
              </div>
              <div> 
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p className=''> Project Completed </p>
              </div>
              <div> 
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p className=''>mn . sq. Ft. Delevered</p>
              </div>
              <div> 
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p className=''>Ongoing Projects</p>
              </div>


            </div>
            {/* now add description */}
            <p className='my-10 max-w-lg'>Our company was founded in 2005 with a vision to provide high-quality properties, with a strong commitment to excellence. Our team of dedicated professionals and clients are committed to delivering exceptional properties that meet your specific needs and preferences.</p>

            <button className='bg-blue-600 text-white px-8 py-2 rounded-2xl'>Learn More</button>
            </div>
       
        </div>
    </div>
  )


}

export default About
