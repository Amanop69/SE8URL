import React from 'react'
import Hero from '../Hero/Hero'
import './Header.css'
import se8 from './se8.png'

const Header = () => {
  return (
    <div className='back'>
    <nav className="navbar">
      <div>
        <img src={se8} width={200} alt="logo" className='mainloo' />
        <label className='log'></label>
      </div>

      <ul className='ulhid'>
        <li>Github</li>
        <li>Features</li>
        <li>Pricing</li>
        <li><button className='btn1'>Login</button></li>
        <li><button>Sign Up</button></li>
      </ul>   
      {/* <button className='mobbtn'>Sign Up</button> */}
    </nav>
    <Hero />
    </div> 
  )
}

export default Header