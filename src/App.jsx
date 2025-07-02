import React from 'react'
import Hero from './component/hero/Hero'
import Service from './component/Services/Service'
import { motion, useScroll } from "framer-motion"
import WhereToBuy from './component/WhereToBuy/WhereToBuy'
import AppBanner from './component/AppBanner/AppBanner'
import Footer from './component/Footer/Footer'
const App = () => {
  
  const { scrollYProgress } = useScroll();
  return (
    <div className='overflow-x-hidden'>  
    <motion.div 
        className='fixed top-0 left-0 right-0 h-1 bg-blue-500 z-50'
        style={{ scaleX: scrollYProgress }} 
    />   
      <Hero />
      <Service />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  )
}

export default App