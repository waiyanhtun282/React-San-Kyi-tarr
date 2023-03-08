import React from 'react'
import { GiKnifeFork } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='flex justify-around py-5 shadow-md'>
      <Link to={'/'}>
      <GiKnifeFork className='text-3xl'/>
      </Link>      
      <input type="text"  className='bg-black'/>
    </div>
  )
}

export default Nav
