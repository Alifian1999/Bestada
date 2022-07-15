import successLogo from '../assets/successLogo.png'
import '../components-style/successPage.css'
import { Link } from 'react-router-dom'

const SubmitSuccess = () =>{
    return(
        <div className='container-submit-success'>
            <img  src={successLogo} alt="" />
            <p>Request kamu telah dikirim, harap menunggu balasan dari kami</p>
            <div>
                <Link to='/beranda'><button>Kembali</button></Link>
            </div>
        </div>
    )
}

export default SubmitSuccess