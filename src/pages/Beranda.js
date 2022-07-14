import React, { useState, useEffect} from "react";
import '../components-style/beranda.css'
import { Link } from "react-router-dom";
import StatusBarBranda from "../components/StatusBarBranda";

// import image from assets
import notifBell from '../assets/notif-bell.png'
import mapLocation from '../assets/location.png'
import ticket from '../assets/ticket.png'
import bag from '../assets/bag.png'
import bookList from '../assets/bookList.png'
import information from '../assets/information.png'
import person from '../assets/person.png'
import next from '../assets/next.png'
import beranda from '../assets/beranda.png'
import cabang from '../assets/cabang.png'
import profil from '../assets/profil.png'
// 


const Beranda = () =>{
    return(
        <div className="container-beranda">
            <div className="container-beranda-top">
                <StatusBarBranda/>
                <h1 className="beranda-header">ZidDesk</h1>
                <img className="notifBell" src={notifBell} alt="" />
                <div className="sub-container-beranda-top">
                    <small>PT.BESTADA (Pusat)</small>
                    <img className="mapLocation" src={mapLocation} alt="" />
                    <small className="city-name">Jakarta</small>
                </div>
            </div>
            <div className="container-ticket-visit">
                <div className="container-ticket-visit-header">
                    <div className="container-ticket-visit-header-ticket">
                        <img className="ticket" src={ticket} alt="" />
                        <span className="span-ticket">5 Tiket</span>
                        <img className="information" src={information} alt="" />
                    </div>
                    <span className="vertical-line"></span>
                    <div className="container-ticket-visit-header-bag">
                        <img className="bag" src={bag} alt="" />
                        <span className="span-visit">3 Visit</span>
                        <img className="information" src={information} alt="" />
                    </div>
                </div>
                <span className="line-horizontal"></span>
                <p className="p-batas-waktu">Akan berakhir pada <span className="span-batas-waktu">17 Agustus 2022</span></p>
                <div className="container-keluhan">
                    <div className="container-laporan-keluhan">
                        <Link to='/beranda/request-service'>
                            <img src={person} alt="" />
                            <span> Lapor Keluhan</span>
                        </Link>
                    </div>
                    <div className="container-keluhan-saya">
                        <Link to='/beranda/history-keluhan'><img src={bookList} alt="" /></Link>
                        <span>keluhan Saya</span>
                    </div>
                </div>
                <div className="container-aktivitas-terbaru">
                    <div className="container-aktivitas-terbaru-header">
                        <span className="aktivitas-terbaru">Aktivitas Terbaru</span>
                        <span className="lihat-semua">Lihat Semua</span>
                    </div>
                    <div>
                        <div className="container-sub-keluhan">
                            <span className="keluhan">Keluhan</span>
                            <div>
                                <span className="laptop-rusak">Laptop Rusak</span>
                                <span className="menunggu">Menunggu</span>
                                <img src={next} alt="" />
                            </div>
                        </div>
                        <div className="container-sub-visit">
                            <span className="visit">Visit</span>
                            <div>
                                <span className="teknisi">Teknisi Budi</span>
                                <span className="tanggal">31 Agustus 2021</span>
                                <img src={next} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-beranda">
                    <div className="sub-footer-beranda">
                        <img className="beranda" src={beranda} alt="" />
                        <img className="cabang" src={cabang} alt="" />
                        <img className="profil" src={profil} alt="" />
                    </div>
                </div>
        </div>
    )
}

export default Beranda
