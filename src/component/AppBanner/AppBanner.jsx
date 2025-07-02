import React from 'react'
import Coffeeban from '../../assets/Coffeeban.jpg'

const coffeebanImg = {
    backgroundImage: `url(${Coffeeban})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
}
const AppBanner = () => {
   
  return (
    <div className='-mt-10 sm:h-72 lg:h-96' style={coffeebanImg}>   
        <div className='grid grid-cols-2'>
        <div className='h-52'>
            <h1 className='text-2xl mt-20 text-center'>Download the app</h1>
            <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>     
    </div>
  )
}

export default AppBanner