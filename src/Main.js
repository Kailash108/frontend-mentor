import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import './Main.css'

function MainScreen(){
    const [input, setInput] = useState('')
    const [mail, setMail] = useState(true)
    const navigate = useNavigate()
    
    function successButton(e){ 
        e.preventDefault()
        navigate('/success') 
    }

    function getInput(e){
        setInput(e.target.value)
        let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
        if (!emailRegex.test(e.target.value)) {
          setMail(false);
        } else {
            setMail(true);
        }
    }
    localStorage.setItem('Email', input)
    return (
        <div id='MainComponent'>
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
                
                <form onSubmit={successButton}>
                    <label>Email address</label>  
                    {mail ? null : <span className='error'>Valid email is required</span> }
                    
                    <p></p>  
                    
                    {mail ? <input required onChange={getInput} value={input} type="email" placeholder='email@company.com' /> : <input required className="errInp" onChange={getInput} value={input} type="email" placeholder='email@company.com' /> }
                    <p></p>
                    
                    <button>Subscribe to monthly newsletter</button>
                </form>
            </div>
            
            <picture className='right'>
                <source className='rightImg' srcset="assets/images/illustration-sign-up-mobile.svg" media="(max-width: 810px)" />
                <img className='rightImg' src="assets/images/illustration-sign-up-desktop.svg" alt="designDef" />
            </picture>

        </div>
    )
}

export default MainScreen 