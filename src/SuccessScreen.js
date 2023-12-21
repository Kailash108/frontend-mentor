import {useNavigate} from 'react-router-dom'
import './Success.css'

export default function SuccessScreen(){

    const navigate = useNavigate()
    function dismissButton(){ 
        navigate('/')
    }
    
    return (
        <div className='MainComponent'>
            <div className='left'>
                <img className='iconlist' src="assets/images/icon-list.svg" alt="icon" />
                <h1 className='headh1'>Thanks for subscribing!</h1>
                
                <p>A confirmation email has been sent to <span className='email'>{localStorage.getItem('Email')}.</span> </p>
                <p>Please open it and click the button inside to confirm your subscription.</p>

                <p>&nbsp;</p>
                    
                <button onClick={dismissButton}>Dismiss message</button>
            </div>
        </div>
    )
}