import React from 'react'
import './Have.css'

const Have = () => {
  return (
    <>
    <div className='havback'>
    <div className='Hav'>
        <h1>HAVE A<span class='spa'><h1 className='huho'>QUESTION?</h1></span></h1>
    </div>
    <div className='fdiv'>
    <div className='formmm'>
    <form action="" className='formm'>
            <input type="text" placeholder='Name' className='fname' />
            <input type='text' placeholder='Email'
            className='mail' />
            <textarea name="Message" placeholder='Message' cols="23" rows="4" className='ta'></textarea>
            <button type='submit' className='fbtn'>ASK NOW</button>
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Have