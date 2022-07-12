import React, { useState,useEffect } from "react";
import '../components-style/login.css'
import SplashScreen from "../components/SplashScreen";

import eyeLogoFalse from '../assets/eye-logo.png'
import eyeLogoTrue from '../assets/eye-logo-true.png'


const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayPassword, setDisplayPassword] = useState(false)
    const [displaySplashScreen,setDisplaySplashScreen] = useState(true)
    const [buttonState, setButtonState] = useState(false)
    const [isLogin, setIsLogin] = useState(true)

    setTimeout(()=>{
        setDisplaySplashScreen(false)
    },2000)
    const handleSubmit = (e) =>{
        e.preventDefault()
        const user = {
            username : username,
            password : password
        }
        console.log(user);
    }
    
    useEffect(()=>{
        if(username.length !== 0){
            setButtonState(true)
        }else if(username.length === 0){
            setButtonState(false)
        }
    },[username])
    console.log(buttonState);

    return(
        <div className="container-login">
        {displaySplashScreen?
                <SplashScreen/>
                
            : <div className="container-login-content">
                <div className="container-login-content-header">
                    <h1>ZidDesk</h1>
                    <h3>Masuk ke ZidDesk</h3>
                </div>
                <p className="danger-notif-failed-to-login">Silakan masukkan username dan kata sandi yang sudah terdaftar ini untuk masuk</p>
                <form onSubmit={handleSubmit} className="container-login-content-form">
                    <div className="container-login-content-form-username">
                        <label htmlFor="username">username</label>
                        <input onChange={e => setUsername(e.target.value)} id="username" placeholder="username"/>
                    </div>
                    <small className="danger-notif-failed-login-username">Username yang anda masukkan salah</small>
                    <div className="container-login-content-form-password">
                        <label htmlFor="password">password</label>
                        <input onChange={e => setPassword(e.target.value)} id="password" placeholder="password" type={displayPassword?'text' : 'password'}/>
                        <img onClick={displayPassword? ()=>setDisplayPassword(false) : ()=>setDisplayPassword(true)} className="image-eye"  src={displayPassword? eyeLogoTrue : eyeLogoFalse} alt="" />
                    </div>
                    <small>Password yang anda masukkan salah</small>
                    {buttonState?
                    <button style={{color:'white',background:'#47ADE7'}}>Masuk</button>
                    :
                    <button style={{cursor:'default'}} disabled>Masuk</button>
                    }
                </form>
                <span className="lupa-kata-sandi">Lupa kata sandi?</span>
            </div>
        }
        </div>
    )
}

export default Login