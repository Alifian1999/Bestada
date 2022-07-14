import successLogo from '../assets/successLogo.png'
import '../components-style/submitSuccess.css'

const SubmitSuccess = () =>{
    return(
        <div className='container-submit-success'>
            <img  src={successLogo} alt="" />
            <p>Request kamu telah dikirim, harap menunggu balasan dari kami</p>
            <div>
                <button>Kembali</button>
            </div>
        </div>
    )
}

export default SubmitSuccess