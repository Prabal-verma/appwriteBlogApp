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
              <span className="ml-2 text-gray-800 font-semibold text-xl">Poxy Blog</span>
            </div>
            <p className="text-sm text-gray-600">
              &copy; 2024. All Rights Reserved
            </p>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-800 mb-4">Explore More Projects</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://truefeedback.prabalverma.me/">
                  truefeedback
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://github.com/Prabal-verma">
                  Ai interview Mocker
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://github.com/Prabal-verma">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 lg:w-2/12 px-4 mb-8 md:mb-0">
            <h3 className="text-xs font-semibold uppercase text-gray-800 mb-4">About</h3>
            <ul>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://portfolio.prabalverma.me/">
                  About Us
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="/">
                  Careers
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="mailto: dev@prabalverma.me">
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
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://github.com/Prabal-verma">
                  GitHub
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://x.com/poxyPixels">
                  Twitter
                </Link>
              </li>
              <li className="mb-2">
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://www.instagram.com/poxy_pixels/">
                  Instagram
                </Link>
              </li>
              <li>
                <Link className="text-sm text-gray-800 hover:text-gray-900" to="https://www.linkedin.com/in/prabal-verma/">
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
