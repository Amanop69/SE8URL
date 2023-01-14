import React from 'react'
import brand from './brand.png'
import redi from './redi.png'
import retar from './retar.png'
import uptime from './uptime.png'
import './Focus.css'

const Focus = () => {
  return (
    <>
    <div className='fcov'>
    <div className='why'>
        <div className='dbl'>
            <h1 className='hbrand'>Create Branded Short Links</h1>
            <p className='pbrand'>Short Links With Your Own Unique Domain Will Help Your Brand Become More Well-Known and Trustworthy. Your Brand Becomes More Well-Known and Recognized as You Post More Content.</p>
        </div>
        <div>
            <img src={brand} alt="brand" width={430} className='designl' />
        </div>
    </div>
    <div className='why1'>
        <div>
            <h1 className='hbrand2'>Redirect Alternative Destinations</h1>
            <p className='pbrand2'>Serve Alternative Destinations Based on The User's Country, Device, Operating System, and Language. Split Your Traffic To different Destinations and Find Out Which Converts Better.</p>
        </div>
        <div>
            <img src={redi} alt="brand" width={430} className='designl2' />
        </div>
    </div>
    <div className='why2'>
        <div>
            <h1 className='hbrand3'>Retarget Anyone Who Clicks</h1>
            <p className='pbrand3'>Add Remarketing Pixels From Your Favourite ad-Network: Facebook, Google, LinkedIn. Run Highly Targeted Personalized Advertising Campaigns To Increase Conversions.</p>
        </div>
        <div>
            <img src={retar} alt="brand" width={430} className='designl3' />
        </div>
    </div>
    <div className='why3'>
        <div>
            <h1 className='hbrand4'>100% Uptime</h1>
            <p className='pbrand4'>Never Worry About Run Time. Our Links are Always Online Even if There are No Clicks. We Provide 24/7 Customer Support Reach Out To Us Anytime Anywhere.</p>
        </div>
        <div>
            <img src={uptime} alt="brand" width={430} className='designl3' />
        </div>
    </div>
    </div>
    </>
  )
}

export default Focus