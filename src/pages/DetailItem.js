import React from "react";
import statusBar from '../assets/Status Bar.png'
import arrow from '../assets/arrow.png'
import whatsapp from '../assets/whatsup.png'
import telephone from '../assets/telephone.png'
import screenError from '../assets/screenError.png'
import '../components-style/detail.css'
import { Link } from "react-router-dom";

const DetailItem = () =>{
    return(
        <div className="container-detail">
            <img src={statusBar} alt="" />
            <div className="container-navbar-detail">
                <Link to='/beranda'><img src={arrow} alt=""/></Link>
                <span>Detail Keluhan</span>
            </div>
            <div className="container-detail-description">
                <div className="container-detail-description-content">
                    <img className="foto-keluhan" src={screenError} style={{objectFit:'fill',width:'100%'}} alt=""/>
                    <div className="container-description-keluhan">
                        <h3 style={{margin:'0px'}}>Keluhan</h3>
                        <span>Laptop Rusak</span>
                    </div>
                    <hr className="line-1"/>
                    <div className="container-description-deskripsi">
                        <h3 style={{margin:'0px'}}>Deskripsi</h3>
                        <span>Laptopnya muncul gambar titik dua kurung buka ini tolong</span>
                    </div>
                    <hr className="line-2"/>
                    <div className="container-description-kategori">
                        <h3 style={{margin:'0px'}}>Kategori</h3>
                        <span>PC & Laptop</span>
                    </div>
                    <hr className="line-3"/>
                    <div className="container-description-status">
                        <div className="container-description-status-h3">
                            <h3 style={{margin:'0px'}}>Status</h3>
                        </div>
                        <div className="container-description-status-span">
                            <span>Menunggu</span>
                        </div>
                    </div>
                    <hr className="line-4"/>
                    <div className="container-hubingi">
                        <h3 style={{margin:'0px'}}>Konsultasi Via</h3>
                        <div className="container-hubungi-jenis">
                            <div className="container-hubungi-jenis-telephone">
                                <img src={telephone} alt=""/>
                                <span>Panggil</span>
                            </div>
                            <div className="container-hubungi-jenis-whatsapp">
                                <img src={whatsapp} alt=""/>
                                <span>Whatsapp</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailItem