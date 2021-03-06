import '../components-style/requestService.css'
import React, { useState, useEffect} from 'react'
import NavbarLaporKeluhan from '../components/NavbarLaporKeluhan'
import ModalDropDown from '../components/ModalDropDown'
import axios from 'axios'

import StatusBar from '../components/StatusBar'
import addVector from '../assets/addVektor.png'
import dropDown from '../assets/dropDown.png'

const RequestService = () =>{
    useEffect(()=>{
    if(localStorage.getItem("user") === null){
        alert('silakan login terlebih dahulu')
       return window.location.replace('/login')
    }
    },[])

    const [modal,setModal] = useState(false)
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    const [issue, setIssue] = useState()
    const [issueCategory, setIssueCategory] = useState(false)
    const [issueDescription, setIssueDescription] = useState()
    const [isReadytoSubmit, setReadytoSubmit] = useState(false)
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])
    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }
        setSelectedFile(e.target.files[0])
    }
    const handleSubmit = async(e) =>{
        e.preventDefault()
        const formData = new FormData()
        formData.append("title",issue)
        formData.append("category",issueCategory)
        formData.append("image",selectedFile.name)
        formData.append("description",issueDescription)

        const options = {
            method: 'POST',
            url: 'http://34.101.70.83:5200/mobile/user/v1/ticket/',
            headers: {
              'Content-Type': 'multipart/form-data',
              'X-API-KEY': 'l!nt@h-B@!k',
              Authorization: `Bearer ${token}`,
            },
            data: formData
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
            window.location.replace('/success')
          }).catch(function (error) {
            window.location.replace('/error')
            console.error(error);
          });
    }
    

    useEffect(()=>{
        if(preview && issue && issueCategory && issueDescription !== undefined | null){
            setReadytoSubmit(true)
        }
    },[preview,issue,issueCategory,issueDescription])

    return(
        <div className='main-container-keluhan'>
            <StatusBar/>
            <NavbarLaporKeluhan/>

            <div className='container-lapor-keluhan'>
                <div className='container-foto-keluhan'>
                    <span className='header-foto-keluhan'>Foto Keluhan</span>
                    
                    <div className='container-insert-foto'>
                    {selectedFile? <img style={{objectFit:'fill',width:'100%',height:'158px'}} src={preview} alt="" /> :
                        <div className='container-insert-foto'>
                            <label htmlFor='addFile'><img src={addVector} alt=''/></label>
                            <label className='foto-keluhan' htmlFor='addFile' placeholder='Foto Keluhan'>Foto Keluhan</label>
                            <input type='file' onChange={(e)=>onSelectFile(e)} id='addFile'/>
                        </div>
                    }
                    </div>
                </div>
                <div className='container-apa-keluhanmu'>
                    <label>Apa Keluhanmu?</label>    
                    <input onChange={(e)=>setIssue(e.target.value)} placeholder='Judul Keluhan'/>
                </div>
                <div className='container-kategori-keluhan'>
                    <label>Kategori Keluhan</label>
                    <div onClick={()=>setModal(true)} className='container-kategori-keluhan-input'>
                        {issueCategory?
                            <label>{issueCategory}</label> : <label>Pilih Kategory</label>
                        }
                        <img src={dropDown} alt='' />
                    </div>
                </div>
                <div className='deskripsi-keluhan'>
                    <label>Deskripsikan Keluhanmu</label>
                    <textarea onChange={(e)=> setIssueDescription(e.target.value)}placeholder='Deskripsi Keluhan'/>
                </div>
            </div>
            {isReadytoSubmit?
            <div onClick={(e)=>handleSubmit(e)} className='button-request-service-success'>
                <button className='button-request-service-success-button' >KIRIM</button>
            </div>
            : 
            <div className='button-request-service'>
                <button disabled>KIRIM</button>
            </div>
            }
            {modal?
                <ModalDropDown setIssueCategory={setIssueCategory} setModal={setModal}/> : null
            }
        </div>
    )
}

export default RequestService