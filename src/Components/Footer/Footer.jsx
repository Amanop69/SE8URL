import React from 'react'
import './Footer.css'
import instagram from './instagram.png'
import twitter from './twitter.png'
import facebook from './facebook.png'
import se8 from './se8.png'

const Footer = () => {
  return (
    <>
    <div className='fcont'>
    <div className='foot'>
        <img src={se8} width={220} alt="log" className='logobb' />

      <div>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Features</li>
            <li>Contact</li>
            <li>Privacy</li>
        </ul>
      </div>  

    <div className='soico'>   
        <img src={instagram} width={60} alt="Insta" className='fsi' />
        <img src={facebook} alt="Face" width={60} className='fsi' />
        <img src={twitter} alt="Twi" width={60} className='fsi' />
    </div> 
    </div>
    <div className='ftext'>
        <p>COPYRIGHT © 2023 SE9 | ALL RIGHTS RESERVED</p>
        <p>POWERED BY SE9O.IN</p>
    </div>
    </div>
    </>
  )
}

export default Footer