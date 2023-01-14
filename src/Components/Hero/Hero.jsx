import React, { useState } from 'react'
import link from './link.png'
import her from './her.png'
import LinkResult from '../LinkResult/LinkResult.jsx'

const Hero = () => {
    const [inputValue, setInputValue] = useState("");
    const [value, setValue ] = useState("");

    const handleClick = () => {
        setInputValue(value);
        setValue("");
    }

  return (
    <div className='container'>
        <div className='headdsl'>
            <h1 className='head1'>Short.</h1>
            <h1 className='head2'>Secure.</h1>
            <h1 className='head3'>Share</h1>

        <div className='paratext'>
            <p className='pp1'>SE9 is Fully Secure URL Shortner. It is One Solution For All Links Made With Powerfull Encryption System That No One Can Detect SE9 Awaits You.</p>
        </div>

            <div className='shdiv'>
                <img src={link} alt="link" width={45} height={45} className='link1' />
                <input 
                    setInputValue={setInputValue} 
                    value={value}
                    onChange={(e) => {setValue(e.target.value)}}
                    type="text" placeholder='Paste Your Link Here' 
                    className='linkarea' 
                />
                <button onClick={handleClick} type='button' className='shbtn'>Shorten</button>
            </div>
            <LinkResult inputValue={inputValue} /> 
        </div>
        <div>
            <img src={her} width={450} alt="" className='wwwimg' />
        </div>
    </div>
  )
}

export default Hero