'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import popularServiceData from '@/assets/data/popular_service';

const PopularService = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className='flex flex-wrap justify-center items-center gap-10 py-10'>
      {popularServiceData.map((service, index) => (
        <motion.div
          key={index}
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.5 }}
          className='relative flex flex-col rounded-xl bg-textPrimary bg-clip-border text-gray-700 shadow-md mx-10 sm:mx-0 w-full sm:w-1/3 md:w-1/4'
        >
          <div className='relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40'>
            <Image
              src={service.imgUrl}
              alt={service.title}
              className='object-cover w-full h-full'
              width={400}
              height={224}
            />
          </div>
          <div className='p-6'>
            <h5 className='mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
              {service.title}
            </h5>
            <p className='block font-sans text-base font-light leading-relaxed text-inherit antialiased max-h-60 overflow-hidden text-ellipsis'>
              <span className='line-clamp-10'>{service.desc}</span>
            </p>
          </div>
          <div className='p-6 pt-0'>
            <button
              className='select-none rounded-lg bg-navbackgorund py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
              data-ripple-light='true'
            >
              Contact us
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PopularService;
