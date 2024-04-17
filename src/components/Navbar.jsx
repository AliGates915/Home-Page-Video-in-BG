import React, {useState} from 'react'
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {
        FaFacebook, 
        FaTwitter, 
        FaInstagram,
        FaWhatsapp, 
        FaYoutube
    } from 'react-icons/fa'

function Navbar() {
  
    const [nav, setNav] = useState(false);
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }

    return (
    <div className='flex justify-between items-center h-20 px-4'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block'}>BEACHES.</h1>   
        </div>
        <ul className='hidden md:flex'>
           <li>Home</li>
           <li>Destinations</li>
           <li>Travel</li> 
           <li>View</li>
           <li>Books</li>
        </ul>

        <div className='hidden md:flex'>
            <BiSearch className='mr-2' size={20}/>
            <BsPerson size={20}/>
        </div>

            {/* Hamburger Icon for Responsive */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose size={20}className='text-black' /> : <HiOutlineMenuAlt4 size={20}/>}
        </div>

        {/* for Responsive Navbar is Hidden Show */}
        <div onClick={handleNav} className={nav ? 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>            
        <ul >
            <h1>BEACHES.</h1>
           <li className='border-b'>Home</li>
           <li className='border-b'>Destinations</li>
           <li className='border-b'>Travel</li> 
           <li className='border-b'>View</li>
           <li className='border-b'>Books</li>
           
           <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
           </div>
           <div className='flex justify-between my-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon' />
                <FaYoutube className='icon'/>
                <FaWhatsapp className='icon'/>
           </div>
        </ul>

        </div>

    </div>
  )
}

export default Navbar