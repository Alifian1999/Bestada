import React from "react";
import statusBar from '../assets/Status Bar.png'
import personError from '../assets/person-error.svg'
import '../components-style/errorPage.css'
import { Link } from "react-router-dom";

const ErrorPage = () =>{
    return(
        <div className="container-error-page">
            <img src={statusBar} alt="" />
            <img className="person-error" src={personError} alt="" />
            <p>Request tidak terkirim karena terjadi kesalahan. Silakan hubungi kami.</p>
            <div>
               <Link to='/beranda'><button>hubungi kami</button></Link>
            </div>
        </div>
    )
}

export default ErrorPage