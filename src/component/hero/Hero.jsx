import React from 'react'
import BgImage from '../../assets/image-slate.png'
import CoffeeImage from '../../assets/coffee-removebg-preview.png'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { motion } from "framer-motion"
import Navbar from '../Navbar';

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover"
};


const Hero = () => {
  const [sidebar, setSidebar] = React.useState(false)
  
  return (
    <main style={bgImage}>
      <section className='min-h-[700px] w-full'>
        <div className='container relative'>
          {/* navbar section */}
          <Navbar sidebar={sidebar} setSidebar={setSidebar} />
          {/* hero section */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[800px]'>
            {/* text content section */}
            <div className='text-lightOrange mt-24 p-4 space-y-8 lg:space-y-16'>
              <motion.h1 
                initial={{opacity:0, y: -100}} 
                animate={{opacity: 1, y: 0}} 
                transition={{type: "spring", stiffness: 100, delay:1, damping: 10}} 
                className='text-5xl font-bold leading-tight ml-12 font-serif'>Blvck Thumbler
              </motion.h1>
              <motion.div 
                initial={{opacity:0, y: 100}} 
                animate={{opacity: 1, y: 0}} 
                transition={{type: "spring", stiffness: 100, delay:1.2, damping: 10}} 
                className='relative'>
                <div className='relative z-10 space-y-4'>
                  <h1 className='text-white text-2xl mb-3'>Black Lifestyle lovers,</h1>
                  <h1 className='font-thin text-gray-500 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias temporibus soluta enim, at harum, nam cum explicabo vel reprehenderit consectetur voluptas libero laudantium sed, dicta eius nulla quibusdam quod obcaecati.</h1>
                </div>
                <div className='absolute w-56 h-44 -top-1 sm:-top-2 md:h-52 lg:h-44 -left-3 bg-gray-700/25'></div>
              </motion.div>
            </div>
            {/* image section */}
            <div className=''>
                <motion.img
                  initial={{opacity:0, scale: 0}} 
                  animate={{opacity: 1, scale: 1}} 
                  transition={{type: "spring", stiffness: 100, delay:1.3, damping: 10}}
                  className='h-[400px] min-h-full md:h-[700px] md:min-w-96 md:mt-24 imgShadow' src={CoffeeImage} alt="coffee"/>
            </div>
            <motion.div 
              initial={{opacity:0, y: 100}} 
              animate={{opacity: 1, y: 0}} 
              transition={{type: "spring", stiffness: 100, delay:1.2, damping: 10}}
              className='relative hidden lg:block'>
              <div className='absolute w-60 -right-2 -top-28 z-[1]'>
                <h1 className='text-5xl scale-150 text-darkGray/40 leading-none font-bold'>Blvck Thumbler</h1>
              </div>
              <div className='relative '>
                <h1 className='text-white text-2xl mb-3 hi md:mt-48'>The Design,</h1>
                <h1 className='font-thin text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi enim at ipsa quam vitae. Fugiat nam tempore veniam libero magnam!</h1>
              </div>
              <div className=' absolute w-44 h-36 top-44 -left-3  bg-gray-700/25'></div>
            </motion.div>
          </div>
        </div>

        {/* sidebar menu section */}
        {sidebar &&(
        <div className='absolute top-0 right-0 w-14 sm:w-44 h-full text-2xl bg-gradient-to-b text-white from-primary/80 '>
          <div className='w-full h-full flex justify-center items-center flex-col space-y-6'>
            <div className='bg-white h-14 w-[1px]'></div>
            <div className='border border-white rounded-full p-2'>
              <FaFacebookF className=''/>
            </div>
            <div className='border border-white rounded-full p-2'>
              <FaTwitter />
            </div>
            <div className='border border-white rounded-full p-2'>
              <FaInstagram />
            </div>
            <div className='bg-white h-14 w-[1px]'></div>
          </div>
        </div>)}
      </section>
    </main>
  )
}

export default Hero