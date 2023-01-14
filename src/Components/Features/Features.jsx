import React from 'react'
import './Features.css'
import www from './www.png'
import target from './target.png'
import reta from './reta.png'
import analy from './analy.png'
import next from './next.png'
import tracking from './tracking.png'
import privacy from './privacy.png'
import api from './api.png'
import monitor from './monitor.png'

const Features = () => {
  return (
    <>
    <div className='featback'>
    <h1 className='fea'>ALL FEATURES</h1>
    <div className='decor'/>
    <div className='main'>
        <div className='rect'>
            <div className='cir1'>
                <img src={www} width={40} alt="www" className='discico1' />
            </div>
            <h3 className='cd'>Custom Domain</h3>
            <p className='pd'>Use Your Unique Domain or Brand To Short URL</p>
        </div>
        <div className='rect'>
        <div className='cir2'>
                <img src={target} width={40} alt="www" className='discico2' />
            </div>
            <h3 className='cd'>Target</h3>
            <p className='pd'>Target a Specific Link You Desire</p>
        </div>
        <div className='rect'>
        <div className='cir3'>
                <img src={reta} width={40} alt="www" className='discico3' />
            </div>
            <h3 className='cd'>Retarget</h3>
            <p className='pd'>Rretarget Your Audience Anytime</p>
        </div>        
    </div>
    <div className='main'>
        <div className='rect'>
        <div className='cir4'>
                <img src={analy} width={40} alt="www" className='discico4' />
            </div>
            <h3 className='cd'>Analytics</h3>
            <p className='pd'>Detailed Analytics of All The URL on Dashboard</p>
        </div>
        <div className='rect'>
        <div className='cir5'>
                <img src={next} width={40} alt="www" className='discico5' />
            </div>
            <h3 className='cd'>Share</h3>
            <p className='pd'>Share URL With Your Friends and Family</p>
        </div>
        <div className='rect'>
        <div className='cir6'>
                <img src={tracking} width={40} alt="www" className='discico6' />
            </div>
            <h3 className='cd'>Tracking</h3>
            <p className='pd'>Track Your URL Anytime Anywhere</p>
        </div>        
    </div>
    <div className='main'>
        <div className='rect'>
        <div className='cir7'>
                <img src={privacy} width={40} alt="www" className='discico7' />
            </div>
            <h3 className='cd'>Privacy</h3>
            <p className='pd'>Secure and Protect Your Links With Password </p>
        </div>
        <div className='rect'>
        <div className='cir8'>
                <img src={api} width={40} alt="www" className='discico8' />
            </div>
            <h3 className='cd'>API</h3>
            <p className='pd'>Use Our API To Boost Your Business</p>
        </div>
        <div className='rect'>
        <div className='cir9'>
                <img src={monitor} width={40} alt="www" className='discico9' />
            </div>
            <h3 className='cd'>Monitoring</h3>
            <p className='pd'>Monitor How Your Links are Performing Over The Globe</p>
        </div>        
    </div>
    </div>
    </>
  )
}

export default Features