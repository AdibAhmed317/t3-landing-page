'use client';
import React from 'react';
import hero from '../assets/images/hero-img.png';
import heroBg from '../assets/images/hero-bg.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div
      id='home'
      className='min-h-[90vh] flex flex-col md:flex-row justify-center items-center bg-no-repeat bg-cover'
      style={{ backgroundImage: `url(${heroBg.src})` }}
    >
      <motion.div
        className='relative z-10 flex flex-1 justify-center items-center'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <Image className='m-5 rounded-xl' src={hero} alt='Hero Section Image' />
      </motion.div>
      <motion.div
        className='flex-1 p-6 max-w-2xl text-textPrimary bg-black/80 mx-5 rounded-2xl'
        initial={{ x: '100vw' }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 120 }}
      >
        <h1 className='text-4xl md:text-2xl font-extralight mb-4'>
          Discover Your Next Adventure with <br />
          <span className='text-7xl font-extrabold'>Travel Trust Tourism</span>
        </h1>
        <p className='text-lg md:text-xl mb-8'>
          Explore the world with our tailored travel packages designed just for
          you. Adventure awaits!
        </p>
        <a
          href='#book'
          className='bg-textPrimary hover:bg-primary text-black/80 hover:text-black/60 font-normal py-2 px-5 rounded-full transition-all'
        >
          Book Now
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;
