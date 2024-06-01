'use client';

import Image from 'next/image';
import React, { LegacyRef, useRef } from 'react';
import deal from '@/assets/images/deal.png';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef: LegacyRef<HTMLFormElement> = useRef(null);

  const handleSubmit = () => {
    if (formRef.current) {
      emailjs
        .sendForm(
          'service_y8i4avx',
          'template_m02y3bh',
          formRef.current,
          'JXEzyORxZ75-xbeXN'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <section className='flex flex-col' id='contact'>
      <h1 className='text-4xl text-black/90 font-semibold my-10 text-center'>
        Contact Us
      </h1>

      <div className='flex flex-col md:flex-row'>
        <div className='flex-1 mx-10 md:mx-20'>
          <form
            className='mt-10 flex flex-col dark:text-black bg-black/60 p-10 rounded-xl'
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              name='user_name'
              className='h-14 rounded-lg border border-black/10 px-4 my-2 bg-textPrimary placeholder-black'
              placeholder='Name'
              required
              maxLength={500}
            />
            <input
              name='user_subject'
              className='h-14 rounded-lg border border-black/10 px-4 my-2 bg-textPrimary placeholder-black'
              placeholder='Subject'
              required
              maxLength={500}
            />
            <input
              name='user_email'
              className='h-14 rounded-lg border border-black/10 px-4 my-2 bg-textPrimary placeholder-black'
              placeholder='Email'
              type='email'
              required
              maxLength={500}
            />
            <textarea
              name='message'
              className='h-52 my-3 rounded-lg border border-black/10 p-4 bg-textPrimary placeholder-black'
              placeholder='Message'
              required
              maxLength={500}
            />
            <button
              type='submit'
              className='flex items-center justify-center gap-2 h-[3rem] w-[8rem] dark:bg-white/20 bg-gray-900 text-white rounded-full outline-none transition-all group 
          focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950'
            >
              Submit{' '}
            </button>
          </form>
        </div>
        <div className='flex-1 flex justify-center items-center'>
          <div className='mx-20'>
            <Image src={deal} alt='Contact image' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
