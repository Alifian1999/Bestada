import React, {useEffect, useState} from "react";
import statusBar from '../assets/Status Bar.png'
import arrow from '../assets/arrow.png'
import whatsapp from '../assets/whatsup.png'
import telephone from '../assets/telephone.png'
import screenError from '../assets/screenError.png'
import '../components-style/detail.css'
import { Link } from "react-router-dom";
import axios from "axios";

const DetailItem = () =>{
    const [value, setValue] = useState([])
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
    return(
        <div className="container-detail">
            <img src={statusBar} alt="" />
            <div className="container-navbar-detail">
                <Link to='/beranda'><img src={arrow} alt=""/></Link>
                <span>Detail Keluhan</span>
            </div>
            <div className="container-detail-description">
            {value?value.data&&value.data.map((e,i)=>
                <div key={i} className="container-detail-description-content">
                    <img className="foto-keluhan" src={screenError} style={{objectFit:'fill',width:'100%'}} alt=""/>
                    <div className="container-description-keluhan">
                        <h3 style={{margin:'0px'}}>Keluhan</h3>
                        <span>{e.title}</span>
                    </div>
                    <hr className="line-1"/>
                    <div className="container-description-deskripsi">
                        <h3 style={{margin:'0px'}}>Deskripsi</h3>
                        <span>{e.description}</span>
                    </div>
                    <hr className="line-2"/>
                    <div className="container-description-kategori">
                        <h3 style={{margin:'0px'}}>Kategori</h3>
                        <span>{e.category}</span>
                    </div>
                    <hr className="line-3"/>
                    <div className="container-description-status">
                        <div className="container-description-status-h3">
                            <h3 style={{margin:'0px'}}>Status</h3>
                        </div>
                        <div className="container-description-status-span">
                            <span>{e.status}</span>
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
                ):null}
            </div>
        </div>
    )
}

export default DetailItem