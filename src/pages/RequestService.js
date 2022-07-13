import '../components-style/requestService.css'
import React from 'react'
import NavbarLaporKeluhan from '../components/NavbarLaporKeluhan'
import StatusBar from '../components/StatusBar'
import addVector from '../assets/addVektor.png'

const RequestService = () =>{
    return(
        <div className='main-container-keluhan'>
            <StatusBar/>
            <NavbarLaporKeluhan/>

            <div className='container-lapor-keluhan'>
                <div className='container-foto-keluhan'>
                    <span className='header-foto-keluhan'>Foto Keluhan</span>
                    <div className='container-insert-foto'>
                        <img src={addVector} alt=''/>
                        <input placeholder='Foto Keluhan'/>
                    </div>
                </div>
                <div className='container-apa-keluhanmu'>
                    <label>Apa Keluhanmu</label>    
                    <input placeholder='Judul Keluhan'/>
                </div>
                <div className='container-kategori-keluhan'></div>
                <div className='deskripsi-keluhan'></div>
                <div></div>
            </div>
        </div>
    )
}

export default RequestService