import React, { useState } from 'react'
import './Ui.scss'
import logo from './imegas/logo.svg'
import { useForm } from "react-hook-form";



function Ui() {


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const[emailError, setEmailError] = useState("email cant be empty")
    const[passwordError, setPasswordError] = useState("password cant be empty")


    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if( re.test(String(e.target.value).toLowerCase())){
            setEmailError('not valid email')
        } else {
            setEmailError("")
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if(e.target.value.length < 3 || e.target.value.length > 8){
            setPasswordError('password error')
            if(!e.target.value){
                setPasswordError('password error')
            }
        } else {
            setPasswordError("")
        }
    }


    const blurHandler = (e) => {
        switch(e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
        }
    }




  return (
    <div className='modul'>
        <div className='inner-box'>
            <h1 className='modul-titel'>Enter your password</h1>
            <div className='group-box'>
                <div className='img-box'>
                <img src={logo}  alt="nike-sho" />
                </div>
                <div>
                <p className='modul-info'>Business Account</p>
                <p className='modul-sub-info'>Sarah Bills</p>
                </div>
            </div>
            <div className='input-group'>
                    {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                    <label>
                        <p>Email</p>
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} 
                    name='email' type='text' placeholder='enter you email' />
                    </label>
                    {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                    <label>
                        <p>password</p>
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' placeholder='enter you password' />
                    </label>
                    <button className='btn-form'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Ui