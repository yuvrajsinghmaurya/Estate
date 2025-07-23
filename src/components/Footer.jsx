import React from 'react';
import { assets } from '../assets/assets';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <img src={assets.logo_dark} alt="Logo" className="w-32 mb-4" />
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor dolores perferendis provident totam.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Services or Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        {/* Social Icons */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
