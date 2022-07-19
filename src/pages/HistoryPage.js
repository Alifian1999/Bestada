import React, { useState, useEffect} from "react";
import  NavbarLaporanKeluhan  from '../components/NavbarLaporKeluhan'
import StatusBar from "../components/StatusBar";
import '../components-style/historyKeluhan.css'
import screenError from '../assets/screenError.png'
import axios from "axios";
import { Link } from "react-router-dom";


const HistoryKeluhan = () =>{
    useEffect(()=>{
    if(localStorage.getItem("user") === null){
        alert('silakan login terlebih dahulu')
        window.location.replace('/login')
    }
    },[])

    const [value,setValue] = useState([])
    const token = localStorage.getItem("token")

    useEffect(()=>{
    const options = {
      method: 'GET',
      url: 'https://stoplight.io/mocks/bestada/interview/65467795/mobile/user/v1/ticket/',
      params: {_id: '62a18e8e6795a77454ec73fa', search: 'laptop'},
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': 'l!nt@h-B@!k',
        Authorization: `Bearer ${token}`
      }
    };
    axios.request(options).then(function (response) {
      setValue(response.data)
    }).catch(function (error) {
      console.error(error);
    });
    },[])
    console.log(value);
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
            <Link to='/history-keluhan/detail-item'>
            <div className="container-history-keluhan-konten">
                {value?value.data&&value.data.map((e,i)=>
                <div className="container-history-keluhan-konten-sub" key={i}>
                    <img src={e.image_url} alt="" />
                    <div className="keterangan-history-keluhan-konten-sub">
                        <small className="menunggu">{e.status}</small>
                        <small className="komputer">{e.category}</small>
                        <small className="tanggal">13 Juli 2021</small>
                    </div>
                    <div className="keluhan-pengguna">
                        <span>{e.title}</span>
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