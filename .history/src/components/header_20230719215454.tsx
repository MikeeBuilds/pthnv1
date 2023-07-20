'use client'
import Aos from 'aos';
import { useState, FC } from 'react';
import Link from 'next/link';

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full">
      <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <Link href="/">
            <img
              src="/logo.png"
              className="h-6 mr-3 sm:h-9"
              alt="Pantheon Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Pantheon
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link href="/login">
              Log in
            </Link>
            <Link href="/app/dashboard">
              Launch App
            </Link>
            <button
              onClick={toggle}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${isOpen ? 'block' : 'hidden'} w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link href="#HOME">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#HOME">
                  Company
                </Link>
              </li>
              <li>
                <Link href="#MARKET">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="#FEATURES">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#TEAM">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#CONTACT">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
