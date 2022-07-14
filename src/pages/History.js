import React, { useState, useEffect} from "react";
import  NavbarLaporanKeluhan  from '../components/NavbarLaporKeluhan'
import StatusBar from "../components/StatusBar";
import '../components-style/historyKeluhan.css'
import screenError from '../assets/screenError.png'
import axios from "axios";
import { Link } from "react-router-dom";


const HistoryKeluhan = () =>{
    const [value,setValue] = useState([])
    useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://stoplight.io/mocks/bestada/interview/65467795/mobile/user/v1/ticket/',
      params: {_id: '62a18e8e6795a77454ec73fa', search: 'adn'},
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'l!nt@h-B@!k',
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmExOGU4ZTY3OTVhNzc0NTRlYzczZmEiLCJ1c2VybmFtZSI6ImJlc3RhZGEiLCJzdGF0dXMiOiJhY3RpdmUiLCJyb2xlIjoidXNlciIsImlhdCI6MTY1NzgxMzYxNywiZXhwIjoxNjU3OTAwMDE3fQ.4wFOyJDZJoSnsqLrzZM-V4Nx5kX4_B4BXVAfsyDpFOg'
      }
    };

    axios.request(options).then(function (response) {
      setValue(response.data)
    }).catch(function (error) {
      console.error(error);
    });
    },[])
    
    return(
        <div className="container-history-keluhan">
            <StatusBar/>
            <NavbarLaporanKeluhan/>
            <div className="container-filter-information">
                <div className="semua">
                    <span>Semua</span>
                </div>
                <div className="menunggu">
                    <span>Menunggu</span>
                </div>
                <div className="dalam-konsultasi">
                    <span>Dalam Konsultasi</span>
                </div>
                <div className="unfinish-d">
                    <span>D</span>
                </div>
            </div>
            <Link to='/beranda/history-keluhan/detail-item'>
            <div className="container-history-keluhan-konten">
                {value?value.data&&value.data.map((e)=>
                <div className="container-history-keluhan-konten-sub">
                    <img src={e.image_url} alt="" />
                    <div className="keterangan-history-keluhan-konten-sub">
                        <small className="menunggu">Menunggu</small>
                        <small className="komputer">Komputer&Laptop</small>
                        <small className="tanggal">13 Juli 2021</small>
                    </div>
                    <div className="keluhan-pengguna">
                        <span>{e.category}</span>
                    </div>
                    <span className="permintaan-harapan-pengguna">{e.description}</span>
                </div>
                ):null}
            </div>
            </Link>
        </div>
    )
}

export default HistoryKeluhan