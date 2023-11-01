'use client';

import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png';

export default function Header() {
  return (
    <Navbar fluid rounded className=' shadow-md bg-gradient-to-r from-cyan-100 to-blue-200'>
      <Navbar.Brand as={Link} to='https://github.com/BagusFary'>
        <img src={image} className="mr-3 h-6 sm:h-9 rounded-full" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-normal text-md dark:text-white">Bagus Fary Ananta</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='mr-10'>
        <Navbar.Link as={Link} to='/' className='text-base'>About</Navbar.Link>
        <Navbar.Link as={Link} to='/projects' className='text-base'>Projects</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


