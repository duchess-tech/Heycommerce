import Defaultnav from "../Layout/Defaultlayout";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGoogle, faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"


function Login() {
    const loginId = useRef({ email: "", password: "" })

    const handlelogin = (e) => {
        e.preventDefault()
        console.log(loginId)
    }

    return (

        <main className="login-page">
            <h4><Link to="/"> <span>Go back to home</span></Link></h4>

            <form className="form-login">
                <input placeholder="Email" onChange={(e) => loginId.current.email = e.target.value} className="form-control fname mt-5 p-3" />
                <hr></hr>
                <input placeholder="Password" onChange={(e) => loginId.current.password = e.target.value} className="form-control  fname mt-5 p-3" />
                <hr></hr>
                <button onClick={handlelogin} className="btn btn-primary mt-5 p-3 log rounded-pill">LOGIN <FontAwesomeIcon icon={faSpinner} pulse /></button>
                <p className="text-center mt-5  ">Or sign up using</p>

                <div className="social-section gap-2">
                    <div className="social"><FontAwesomeIcon icon={faFacebook} size="3x" /></div>
                    <div className="social "><FontAwesomeIcon icon={faTwitter} border color="white" className="t-icon" /></div>
                    <div className="social "><FontAwesomeIcon icon={faGoogle} color="white" border className="g-icon" /></div>
                </div>

                <p className="text-center sp"> Or sign up using</p>
                <button className="sb">SIGN UP</button>
            </form>
        </main>

    )
}
export default Login