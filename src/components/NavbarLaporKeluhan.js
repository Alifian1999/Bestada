import React from "react";
import '../components-style/navbarLaporKeluhan.css'
import arrow from '../assets/arrow.png'

const NavbarLaporKeluhan = () =>{
    return(
        <div className="container-navbar-lapor-keluhan">
            <img src={arrow} alt="" />
            <span>Lapor Keluhan</span>
        </div>
    )
}

export default NavbarLaporKeluhan