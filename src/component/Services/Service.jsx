import React from 'react'
import { delay, easeInOut, motion } from "framer-motion"
import Coffee1 from "../../assets/Coffee1.png"
import Coffee2 from "../../assets/Coffee2.png"
import Coffee3 from "../../assets/Coffee3.png"

const serviceData= [
    {
        id: 1,
        image: Coffee1,
        title: "Black Coffee",
        subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, nam.",
    },
    {
        id: 2,
        image: Coffee2,
        title: "Cold Coffee",
        subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, nam.",
    },
    {
        id: 3,
        image: Coffee3,
        title: "Hot Coffee",
        subTitle: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, nam.",
    },
]
const cardVariants ={
    hidden: {
        opacity: 0, y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition:{
            type: "spring",
            stiffness: 150,
            damping: 10,
            ease: "easeInOut"
        }
    }
};
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
const Service = () => {
  return (
    <div className='container my-16 space-y-4'>
        {/* header section */}
        <div className='text-center max-w-lg mx-auto space-y-2'>
            <motion.h1 
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                transition={{ type: "spring", stiffness: 100, delay: 0.4, damping: 10 }} 
                viewport={{ amount: 0.5 }} 
                className='text-lightGray font-bold'>Fresh and <span className='text-primary'>Tasty</span></motion.h1>
            <motion.p                 
                initial={{opacity: 0, scale: 0}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{type: "spring", stiffness: 100, delay:0.6, damping: 10}} 
                className='text-sm opacity-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum voluptas aliquam provident vitae nisi voluptatem.</motion.p>
        </div>
        {/* card section */}
        <motion.div 
            variants={containerVariants} 
            initial="hidden"  
            whileInView={"visible"}
            viewport={{amount: 0.8}}
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {serviceData.map((service)=>(
                <motion.div
                    variants={cardVariants}
                    
                    className='text-center p-4 space-y-5'>
                    <img className='imgShadow2 max-w-[200px] max-h-30 mx-auto hover:scale-110 duration-300 cursor-pointer' src={service.image} alt={service.title} />
                    <div className='space-y-1'>
                        <h1 className='text-2xl font-bold text-primary'>{service.title}</h1>
                        <p className='text-darkGray text-sm' >{service.subTitle}</p>
                    </div>
                </motion.div>
               
            ))}
        </motion.div>
    </div>
  )
}

export default Service