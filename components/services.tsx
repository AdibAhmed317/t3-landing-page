import Image from 'next/image';
import React from 'react';
import img from '@/assets/images/hero-bg.png';
import PopularService from './popular_service';

const Services = () => {
  return (
    <div
      id='services'
      className='min-h-[90vh] flex flex-col justify-center items-center'
    >
      <h1 className='text-4xl text-black/90 font-semibold m-10'>
        Some of our popular services
      </h1>
      <PopularService />
    </div>
  );
};

export default Services;
