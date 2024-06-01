'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutUs = () => {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView();

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView();

  const leftToRightVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightToLeftVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  React.useEffect(() => {
    if (inView1) {
      controls1.start('visible');
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start('visible');
    }
  }, [controls2, inView2]);

  return (
    <section className='flex flex-col items-center justify-center' id='about'>
      <h1 className='text-4xl text-black/90 font-semibold my-10'>About Us</h1>

      <div className='flex flex-col md:flex-row justify-center items-center'>
        <motion.div
          ref={ref1}
          animate={controls1}
          initial='hidden'
          variants={leftToRightVariants}
          className='flex flex-1 flex-col items-center'
        >
          <div className='flex flex-col'>
            <span className='text-9xl font-bold'>Who</span>
            <span className='text-9xl font-bold'>we</span>
            <span className='text-9xl font-bold'>are?</span>
          </div>
        </motion.div>

        <motion.article
          ref={ref2}
          animate={controls2}
          initial='hidden'
          variants={rightToLeftVariants}
          className='flex-1 bg-black/70 text-textPrimary py-20 px-10 md:px-10 w-96 md:w-1/2 rounded-xl text-start'
        >
          <p>
            At Travel Trust Tourism, we are passionate about providing
            exceptional travel experiences to our customers. With years of
            expertise in the travel industry, we specialize in creating
            unforgettable journeys tailored to your unique preferences and
            needs.
          </p>
          <br />
          <p>
            We are a dedicated team of travel enthusiasts committed to making
            your travel dreams a reality. Our mission is to provide you with
            personalized service, expert guidance, and unparalleled support
            every step of the way. From planning your itinerary to ensuring a
            smooth journey, we are here to make your travel experience seamless
            and unforgettable.
          </p>
          <br />
          <p>
            At Travel Trust Tourism, our commitment to excellence drives
            everything we do. We strive to exceed your expectations by
            delivering exceptional service, attention to detail, and a passion
            for creating memorable travel experiences. Whether you're planning a
            relaxing beach getaway, an adventurous trek through the mountains,
            or a cultural exploration of exotic destinations, we are here to
            turn your travel dreams into reality.
          </p>
        </motion.article>
      </div>
    </section>
  );
};

export default AboutUs;
