import React from 'react'
import { useState } from 'react'
import { Link } from 'react-scroll'
import '../Components/Style/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='Nav1'>
         <Link t0 = '/'><p>MoveMania</p></Link>
      </div>
      
      <div className='Nav2'>
        <Link to='/' className='nav3' activeClass="active"  
         spy={true} 
         smooth={true} 
         offset={-15} 
         duration={500}> Home</Link>
        <Link to='Topmovies' className='nav3' 
        activeClass="active" 
        spy={true} 
        smooth={true} 
        offset={-150} 
        duration={500}>Top Movies</Link>
        <Link to='Bollywood' className='nav3'activeClass="active" 
         spy={true} 
         smooth={true} 
         offset={-150} 
         duration={500}>Bollywood</Link>
        <Link to='Hollywood' className='nav3' activeClass="active"  
         spy={true} 
         smooth={true} 
         offset={-150} 
         duration={500}>Hollywood</Link>
        <Link to='Webseries' className='nav3' activeClass="active"  
         spy={true} 
         smooth={true} 
         offset={-150} 
         duration={500}>Web series</Link>
        
      </div>
    </div>
  )
}

export default Navbar