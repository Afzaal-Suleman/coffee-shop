import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = ({sidebar, setSidebar}) => {
  return (
    <nav className='absolute top-0 left-0 w-full pt-10 text-white z-10'>
        <div className="container">
            <div className='flex justify-between items-center'>
                {/* logo section */}
                <h1 className='text-xl font-semibold uppercase'> <span className='text-lightOrange'>Coders</span> Coffee</h1>
                {/* humbler menu section */}
                <div className='' onClick={()=> setSidebar(!sidebar)}>
                    <GiHamburgerMenu className='cursor-pointer text-2xl'/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar