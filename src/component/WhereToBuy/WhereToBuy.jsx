import React from 'react'
import worldMap from "../../assets/worldMap.png"
import { motion } from 'framer-motion'
const containerVariants = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition:{
            delay: 0.6,
            staggerChildren: 0.4,
        }
    }
}
const WhereToBuy = () => {
  return (
    <motion.div 
        variants={containerVariants} 
        initial="hidden"  
        whileInView={"visible"}
        className='container my-36'>
        <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-8'>
            {/* form Section */}
            
            <div  className='space-y-8'>
                <div>
                    <motion.h1 
                        initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0.2, type: "spring", stiffness: 100, damping: 10}}
                        className='text-2xl text-darkGray font-serif font-bold'>Buy our products from anywhere</motion.h1>
                </div>
                <form action=""  className=''>
                    <motion.div 
                         initial={{opacity: 0, y: 100}}
                         whileInView={{opacity: 1, y: 0}}
                         transition={{delay: 0.4, type: "spring", stiffness: 100, damping: 10}}
                        className='flex items-center gap-4'>
                        <div className='space-y-4'>
                            <input type="text" placeholder='Name' className='input-style w-full'/>
                            <input type="text" placeholder='Email' className='input-style w-full'/>
                        </div>
                        <div className='space-y-4'>
                            <input type="text" placeholder='Country' className='input-style w-full'/>
                            <input type="text" placeholder='Zipcode' className='input-style w-full'/>
                        </div>
                   </motion.div>
                   <motion.button 
                     initial={{opacity: 0, y: 80}}
                     whileInView={{opacity: 1, y: 0}}
                     transition={{delay: 0.6, type: "spring", stiffness: 100, damping: 10}}
                    className='mt-4 primary-button w-full'>Order Now</motion.button>
                </form>
            </div>
            {/* World map Section */}
            <div>
                <motion.img 
                initial={{opacity: 0, scale: 0.5}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{delay: 0.8, type: "spring", stiffness: 100, damping: 10}}
                className='w-full sm:w-[500px]  mx-auto' src={worldMap} alt="" />
            </div>
        </div>
    </motion.div>
  )
}

export default WhereToBuy