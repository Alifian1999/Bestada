import React, { useState,useEffect } from "react";
import '../components-style/login.css'
import { Link } from "react-router-dom";
import axios from "axios";
import StatusBar from "../components/StatusBar";

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
        const options = {
          method: 'POST',
          url: 'http://34.101.70.83:5200/mobile/user/v1/auth/signin',
          headers: {'Content-Type': 'application/json', 'X-API-KEY': 'l!nt@h-B@!k'},
          data: user
        };
        
        axios.request(options).then(function (response) {
          localStorage.setItem("token",response.data.data.token)
          window.location.replace('/beranda')
          setIsLogin(true)
        }).catch(function (error) {
            console.log(error);
          setIsLogin(false)
        });
    }
    
    useEffect(()=>{
        if(username.length || password.length !== 0){
            setButtonState(true)
        }else if(username.length || password.length === 0){
            setButtonState(false)
        }
    },[username])


    return(
        <div className="container-login">
        {displaySplashScreen?
                <SplashScreen/>
                
            : <div className="container-login-content">
                <StatusBar/>
                <div className="container-login-content-header">
                    <h1>ZidDesk</h1>
                    <h3>Masuk ke ZidDesk</h3>
                </div>
                {isLogin? null :
                    <p className="danger-notif-failed-to-login">Silakan masukkan username dan kata sandi yang sudah terdaftar ini untuk masuk</p>
                }
                <form onSubmit={handleSubmit} className="container-login-content-form">
                    <div className={isLogin? "container-login-content-form-username" : classnameLoginError.username}>
                        <label htmlFor="username">username</label>
                        <input onChange={e => setUsername(e.target.value)} id="username" placeholder="username"/>
                    </div>
                    {isLogin? null :
                        <small className="danger-notif-failed-login-username">Username yang anda masukkan salah</small>
                    }
                    <div className={isLogin? "container-login-content-form-password" : classnameLoginError.password}>
                        <label htmlFor="password">password</label>
                        <input onChange={e => setPassword(e.target.value)} id="password" placeholder="password" type={displayPassword?'text' : 'password'}/>
                        <img onClick={displayPassword? ()=>setDisplayPassword(false) : ()=>setDisplayPassword(true)} className="image-eye"  src={displayPassword? eyeLogoTrue : eyeLogoFalse} alt="" />
                    </div>
                    {isLogin? null :
                        <small className="danger-notif-failed-login-password">Password yang anda masukkan salah</small>
                    }
                    {buttonState?
                    <button style={{color:'white',background:'#47ADE7'}}>Masuk</button>
                    :
                    <button style={{cursor:'default'}} disabled>Masuk</button>
                    }
                </form>
                <Link to='/register' className={isLogin? "lupa-kata-sandi" : classnameLoginError.kataSandi}>Lupa kata sandi?</Link>
            </div>
        }
        </div>
    )
}

export default Login