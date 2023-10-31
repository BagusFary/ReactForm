'use client';

import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import image from '../assets/image.png';

export default function DefaultNavbar() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} to='/'>
        <img src={image} className="mr-3 h-6 sm:h-9 rounded-full" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className='mr-10'>
        <Navbar.Link as={Link} to='/'>About</Navbar.Link>
        <Navbar.Link as={Link} to='/projects' className='rounded-full bg-blue-300'>Projects</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


