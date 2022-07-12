import React from "react";
import logoSplashScreen from '../assets/logo-splashScreen.png'
import '../components-style/splashScreen.css'

const SplashScreen = () =>{
    return(
        <div className="container-splashScreen">
            <div className="container-splashScreen-img-header">
                <img className="img" src={logoSplashScreen} alt="" />
            </div>
            <p>Version 0.0.1</p>
        </div>
    )
}

export default SplashScreen