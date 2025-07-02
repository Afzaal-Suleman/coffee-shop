import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle, FaPhone, FaMailBulk   } from 'react-icons/fa'
import { motion } from 'framer-motion'
const Footer = () => {
    return (
        <div className=' mt-10 bg-primary text-white space-y-10'>
            <div className=" min-h-60 pt-10 container grid grid-cols-2 md:grid-cols-3 mx-auto gap-8">

                {/* 1 */}
                <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.6, type: "spring", stiffness: 100, damping: 10}}
                    className='flex flex-col md:mx-8 space-y-4'>
                    <h1 className='font-bold uppercase text-justify'>Coders Cafe</h1>
                    <p className='text-sm text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium earnsa minus deserunt ipsum doloremque.</p>
                    <div className='flex gap-2'>
                        <div><FaPhone className=''/></div> <div>0300-0010020</div>
                    </div>
                    <div className='flex gap-2'>
                        <div><FaMailBulk  className='text-xl'/></div> <div>aaa@gmail.com</div>
                    </div>
                </motion.div>

                {/* 2 */}
                <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.7, type: "spring", stiffness: 100, damping: 10}} 
                    className='flex flex-col space-y-4'>
                    <h1 className='font-bold text-center'>Quick Links</h1>
                    <div className='flex justify-between md:mx-5 text-sm'>
                        <div className='space-y-2'>
                            <div>Home</div>                
                            <div>About</div>                
                            <div>Contact</div>                
                            <div>Search Fruits</div>                
                            <div>Privicy Policy</div>                
                        </div>
                        <div className='space-y-2' >
                        <div>Home</div>                
                            <div>About</div>                
                            <div>Contact</div>                
                            <div>Search Fruits</div>                
                            <div>Privicy Policy</div>
                        </div>
                    </div>
                </motion.div>

                {/* 3 */}
                <motion.div 
                    initial={{opacity: 0, y: 100}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{delay: 0.9, type: "spring", stiffness: 100, damping: 10}} 
                    className='flex flex-col md:mx-auto space-y-4'>
                    <h1 className='font-bold'>Follow Us</h1>
                    <div className='flex gap-2'>

                        <div className='border border-white rounded-full p-1'>
                            <FaFacebookF className='' />
                        </div>
                        <div className='border border-white rounded-full p-1'>
                            <FaInstagram />
                        </div>
                        <div className='border border-white rounded-full p-1'>
                            <FaTwitter />
                        </div>
                        <div className='border border-white rounded-full p-1'>
                            <FaGoogle />
                        </div>


                    </div>
                </motion.div>
            </div>
            <div className=''>
                <hr />
                <p className='text-center text-sm py-6'>© {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer