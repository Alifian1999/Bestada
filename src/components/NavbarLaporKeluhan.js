import React from "react";
import {Link} from 'react-router-dom'
import '../components-style/navbarLaporKeluhan.css'
import arrow from '../assets/arrow.png'

const NavbarLaporKeluhan = () =>{
    return(
        <div className="container-navbar-lapor-keluhan">
           <Link to='/beranda'><img src={arrow} alt="" /></Link>
            <span>Lapor Keluhan</span>
        </div>
    )
}

export default NavbarLaporKeluhan