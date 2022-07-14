import React, { useState } from "react";
import '../components-style/modalDropdown.css'

import handleBar from '../assets/handleBar.png'
import closeLogo from '../assets/closeLogo.png'
import checkList from '../assets/checkList.png'

const ModalDropDown = ({setModal, setIssueCategory}) =>{
    const [checkComputer, setCheckComputer] = useState(false)
    const [checkCctv, setCheckCctv] = useState(false)
    const [checkAc, setCheckAc] = useState(false)
    return(
        <div>
            <div className="cover-content"></div>
            <div className="container-modal">
                
                <div className="handleBar">
                    <img src={handleBar} alt="" />
                </div>
                <div className="closeLogo">
                    <span>Pilih Kategori</span>
                    <img onClick={()=>setModal(false)} src={closeLogo} alt="" />
                </div>
                <div className="container-list-modal">
                    <div className="komputer-laptop">
                        <span onClick={(e)=>[setIssueCategory(e.target.innerText),setCheckComputer(true)]} name='Komputer & Laptop' style={{cursor:'pointer'}}>Komputer&Laptop</span>
                        {checkComputer?
                        <img src={checkList} alt="" /> : null
                        }
                    </div>
                    <div className="cctv">
                        <span onClick={(e)=>[setIssueCategory(e.target.innerHTML),setCheckCctv(true)]} style={{cursor:'pointer'}} name='cctv'>CCTV</span>
                        {checkCctv?
                        <img src={checkList} alt="" /> : null
                        }
                    </div>
                    <div className="ac">
                        <span onClick={(e)=>[setIssueCategory(e.target.innerHTML),setCheckAc(true)]} style={{cursor:'pointer'}} name='ac'>AC</span>
                        {checkAc?
                        <img src={checkList} alt="" /> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDropDown