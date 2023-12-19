import React, { useState } from 'react'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div>
        <nav className='text-white xl:justify-between justify-between mr-auto flex items-center mx-fit px-4 w-full text-1xl font-bold p-4 pt-0 fixed' >
        <div className='flex justify-between'>
        <p className='flex display-block mt-4 pr-2 text-3xl '>Append</p>
        <p className='flex display-block mr-0.0001 text-3xl text-red-600  mt-4'>.</p>
        </div>
        <ul className='hidden xl:flex p-0 mt-6'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Services</li>
            <li className='p-4'>Portfolio</li>
            <li className='p-4'>Team</li>
            <li className='p-4'>Blog</li>
            <li className='p-4'>Dropdown</li>
            <li className='p-4'>Contact</li>  
        </ul>
        <input type='button' value='Get Started' className='xl:flex hidden mr-0.0001 mt-4 bg-red-600 h-10 p-2 pl-6 pr-6 rounded-lg mx:right-0' ></input>
        <div onClick={handleNav} className='flex xl:hidden'>
        <input type='button' value='Get Started' className='xl:flex mr-0.0001 mt-4 bg-red-600 h-10 p-2 pl-6 pr-6 rounded-lg mx:right-0' ></input>
            {!nav ? <AiOutlineClose size={20} className='mt-6 ml-4'/> : <AiOutlineMenu size={20} className='mt-6 ml-4'/>}
        </div>
        <div className={!nav ? 'xl:hidden fixed left-0 top-0 w-[90%] border-r mt-20 ml-[5%] mr-[5%] rounded-lg border-r-gray-900 bg-white h-full ease-in-out duration-50' : 'fixed left-[100%]'}>
        <ul className='pt-5 '>
            <li className='p-4 text-black'>Home</li>
            <li className='p-4 text-black'>About</li>
            <li className='p-4 text-black'>Services</li>
            <li className='p-4 text-black'>Portfolio</li>
            <li className='p-4 text-black'>Team</li>
            <li className='p-4 text-black'>Blog</li>
            <li className='p-4 text-black'>Dropdown</li>
            <li className='p-4 text-black'>Contact</li>  
        </ul> 
        </div>
        </nav>
    </div>
  )
  };
  export default Navbar
