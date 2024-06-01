'use client';
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import Image from 'next/image';
import { CircleX, Menu } from 'lucide-react';
import { motion } from 'framer-motion';

import logo from '../assets/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className='max-h-20 bg-navbackgorund flex justify-between items-center p-2 w-full'
      initial={{ y: -1, opacity: 0.1 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className='flex items-center'>
        <Image
          className='rounded-full m-2 p-0.5 bg-textPrimary h-16 w-16'
          src={logo}
          alt='Travel Trust Tourism Logo'
        />
        <div className='h-20 w-full flex flex-col justify-center items-start text-textPrimary'>
          <h1 className='text-xl font-semibold uppercase'>
            Travel Trust Tourism
          </h1>
        </div>
      </div>
      <div className='flex items-center md:hidden'>
        <button
          className='flex items-center px-3 py-2 rounded text-textPrimary'
          onClick={toggleMenu}
        >
          {isMenuOpen ? <CircleX /> : <Menu />}
        </button>
      </div>
      <div className='hidden md:block'>
        <ul className='flex space-x-4'>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='home' smooth={true} offset={10} duration={500}>
              Home
            </Link>
          </li>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='services' smooth={true} offset={20} duration={500}>
              Service
            </Link>
          </li>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='about' smooth={true} offset={10} duration={500}>
              About Us
            </Link>
          </li>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='contact' smooth={true} offset={10} duration={500}>
              Contact Us
            </Link>
          </li>
          <li className='hover:text-black/80 hover:bg-primary cursor-pointer bg-textPrimary text-black/90 rounded-full px-4 py-2 block md:inline-block'>
            <a href=''>Book now</a>
          </li>
        </ul>
      </div>
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } w-full bg-navbackgorund md:hidden absolute top-20 left-0 z-20`}
      >
        <ul className='p-4'>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='home' smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='service' smooth={true} offset={50} duration={500}>
              Service
            </Link>
          </li>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='about' smooth={true} offset={50} duration={500}>
              About Us
            </Link>
          </li>
          <li className='hover:text-white/80 cursor-pointer text-textPrimary rounded-full py-2 block md:inline-block'>
            <Link to='contact' smooth={true} offset={50} duration={500}>
              Contact Us
            </Link>
          </li>
          <li className='hover:text-black/80 hover:bg-primary cursor-pointer bg-textPrimary text-black/90 rounded-full px-4 py-2 block md:inline-block'>
            <a href='book'>Book now</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
