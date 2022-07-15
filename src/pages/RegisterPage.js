import React, { useState,useEffect } from "react";
import '../components-style/login.css'
import baseAPI from "../API/baseAPI";
import { Link } from "react-router-dom";

import SplashScreen from "../components/SplashScreen";
import eyeLogoFalse from '../assets/eye-logo.png'
import eyeLogoTrue from '../assets/eye-logo-true.png'



const Register = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayPassword, setDisplayPassword] = useState(false)
    const [displaySplashScreen,setDisplaySplashScreen] = useState(true)
    const [buttonState, setButtonState] = useState(false)
    const [isLogin, setIsLogin] = useState(true)

    const classnameLoginError = {
        username : 'container-login-content-form-username-error',
        password : 'container-login-content-form-password-error',
        kataSandi : 'lupa-kata-sandi-error'
    }

    setTimeout(()=>{
        setDisplaySplashScreen(false)
    },1200)

    const handleSubmit = async(e) =>{
        e.preventDefault()
        const user = {
            username : username,
            password : password
        }
        try {
            const server = await baseAPI.post('auth/signup',user,{
                headers:{
                    'Content-Type' : 'application/json',
                    'X-API-KEY' : 'xxx'
                }
            })
            console.log(server.data);
        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        if(username.length !== 0){
            setButtonState(true)
        }else if(username.length === 0){
            setButtonState(false)
        }
    },[username])


    return(
        <div className="container-login">
        {displaySplashScreen?
                <SplashScreen/>
                
            : <div className="container-login-content">
                <div className="container-login-content-header">
                    <h1>ZidDesk</h1>
                    <h3>Register</h3>
                </div>
                {isLogin? null :
                    <p className="danger-notif-failed-to-login">Silakan masukkan username dan kata sandi yang sudah terdaftar ini untuk masuk</p>
                }
                <form onSubmit={handleSubmit} className="container-login-content-form">
                    <div className={isLogin? "container-login-content-form-username" : classnameLoginError.username}>
                        <label htmlFor="username">username</label>
                        <input onChange={e => setUsername(e.target.value)} id="username" placeholder="username" required/>
                    </div>
                    {isLogin? null :
                        <small className="danger-notif-failed-login-username">Username sudah dipakai</small>
                    }
                    <div className={isLogin? "container-login-content-form-password" : classnameLoginError.password}>
                        <label htmlFor="password">password</label>
                        <input onChange={e => setPassword(e.target.value)} id="password" placeholder="password" type={displayPassword?'text' : 'password'} required/>
                        <img onClick={displayPassword? ()=>setDisplayPassword(false) : ()=>setDisplayPassword(true)} className="image-eye"  src={displayPassword? eyeLogoTrue : eyeLogoFalse} alt="" />
                    </div>
                    {isLogin? null :
                        <small className="danger-notif-failed-login-password">Password sudah dipakai</small>
                    }
                    {buttonState?
                    <button style={{color:'white',background:'#47ADE7'}}>Register</button>
                    :
                    <button style={{cursor:'default'}} disabled>Register</button>
                    }
                </form>
                <Link to='/login' className={isLogin? "lupa-kata-sandi" : classnameLoginError.kataSandi}>Sudah punya akun?</Link>
            </div>
        }
        </div>
    )
}

export default Register