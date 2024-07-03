import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <span className="ml-2 text-gray-800 font-semibold text-xl">My App</span>
            </div>
            <p className="text-sm text-gray-600">
              &copy; 2024. All Rights Reserved.
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-800 mb-4">Explore</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Features
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Pricing
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-800 mb-4">Company</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-3/12 px-4 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-800 mb-4">Connect</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Facebook
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
