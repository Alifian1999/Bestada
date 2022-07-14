import React from "react";
import statusBar from '../assets/Status Bar.png'
import personError from '../assets/person-error.svg'
import '../components-style/errorPage.css'

const ErrorPage = () =>{
    return(
        <div className="container-error-page">
            <img src={statusBar} alt="" />
            <img className="person-error" src={personError} alt="" />
            <p>Request tidak terkirim karena terjadi kesalahan. Silakan hubungi kami.</p>
            <div>
                <button>hubungi kami</button>
            </div>
        </div>
    )
}

export default ErrorPage