import React from 'react'
import './Main.css'

function MainScreen(){
    return (
        
        <div className='MainComponent'>
            <div className='left'>
                <h1 className='headh1'>Stay updated!</h1>
            
                <p>Join 60,000+ product managers receiving monthly updates on:</p>

                <p>
                    <span>
                        <img className='iconList' src='assets/images/icon-list.svg' alt='tick'/>
                    </span>
                    &nbsp;&nbsp;Product discovery and building what matters
                </p>
                <p>
                    <span>
                        <img className='iconList' src='assets/images/icon-list.svg' alt='tick'/>
                    </span>
                    &nbsp;&nbsp;Measuring to ensure updates are a success
                </p>
                <p>
                    <span>
                        <img className='iconList' src='assets/images/icon-list.svg' alt='tick'/>
                    </span>
                    &nbsp;&nbsp;And much more!
                </p>
                <p>&nbsp;</p>
                <label>Email address</label>  
                <p></p>   
                <input type="email" placeholder='email@company.com' />
                
                <p></p>
                
                <button>Subscribe to monthly newsletter</button>
            </div>
            
            <picture className='right'>
                <source className='rightImg' srcset="assets/images/illustration-sign-up-mobile.svg" media="(max-width: 810px)" />
                <img className='rightImg' src="assets/images/illustration-sign-up-desktop.svg" alt="designDef" />
            </picture>
            
        </div>
    )
}

export default MainScreen