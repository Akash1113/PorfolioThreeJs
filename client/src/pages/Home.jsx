import React from 'react'; 
import {motion, AnimatePresence} from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import {
  headContainerAnimation,
  headTextAnimation,
  headContentAnimation,
  slideAnimation,
  
} from '../config/motion'

import { CustomButton } from '../components';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
       <motion.section className='home' {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')}>
          <img
          src='./threejs.png'
          alt='logo'
          className='w-8 h-8 object-contain'
          ></img>
        </motion.header>

        <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              LETS <br className="xl:block hidden"/> DO IT!
            </h1>
          </motion.div>
          <motion.div
          {...headContentAnimation} className='flex flex-col gap-5'
          >
            <p className='max-w-md font-normal text-grey-600 text-base'>
              Create Your Unique and Exclusive Cake with our new 3D customization tool.<strong> Unleash your Imagination</strong>{" "}
              and define your own taste.
            </p>

            <CustomButton></CustomButton>
          </motion.div>
        </motion.div>
       </motion.section>
      )} 


    </AnimatePresence>
  )
}

export default Home