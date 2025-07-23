import React from 'react'
import Navbar from './Navbar'

// import framer motion 
import { motion } from "motion/react"

function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-center bg-cover bg-no-repeat flex items-center overflow-hidden"
      style={{ backgroundImage: "url('./assets/header_img.png')" }}

      id="Header"
    >
        {/* add navbar componenet */}
        <Navbar />

        {/* add header content */}
   <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}

>    
        <div className=' md:px-20 lg:px-32  max-w-7xl mx-auto px-4 sm:px-6 text-center'>
          <h1 className='text-5xl font-bold text-white sm:text-6xl md:text-[82px] inline-block '>Welcome to Our Estate</h1>
          <p className='mt-6 text-lg text-gray-400'>Discover our beautiful estates and enjoy the luxury of our homes</p>

          <div className='space-x-6 mt-16 '>
            <a className='border border-white px-8 py-3 rounded text-white
' href="#Projects">Projects</a>
            <a className='bg-blue-500 border-white px-8 py-3 rounded text-white
' href="#Contact">Contact Us</a>
          </div>
        </div>

      {/* add search bar component */}
      </motion.div>
    </div>
  )
}

export default Header
