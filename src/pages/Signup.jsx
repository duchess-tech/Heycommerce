
import { useRef } from "react"
import { Link } from "react-router-dom"
import http from "../api/https"
import Defaultlayout from "../Layout/Defaultlayout"


function Signup() {
    const firstname = useRef(null);
    const lastname = useRef(null)
    const email = useRef(null)
    const password = useRef(null)
    const confirmpassword = useRef(null)

    const Onsignup = async (e) => {
        e.preventDefault()
        try {
            let data = {
                firstname: firstname.current.value,
                lastname: lastname.current.value,
                email: email.current.value,
                password: password.current.value
            }
            const response = await http.post("/signup", data)
            console.log(response.data)
        }
        catch (error) {
            console.log("error")
        }
    }
    return (

        <main>
            <h4><Link to="/"> <span>Go back to home</span></Link></h4>

            <form className="form-signup " >
                <input placeholder="Firstname" type="text" ref={firstname} className="form-control mt-3 p-2" />
                <input placeholder="Lastname" type="text" ref={lastname} className="form-control mt-3 p-2" />
                <input placeholder="Email" type="email" ref={email} className="form-control mt-3 p-2" />
                <input placeholder="Password" type="password" ref={password} className="form-control mt-3 p-2" />
                <input placeholder="Confirmpassword" ref={confirmpassword} type="confirmpassword" className="form-control p-2 mt-3" />
                <button className="btn btn-primary mt-3 text-center p-1 w-25" onClick={Onsignup} type="submit">Signup</button>
            </form>

        </main>

    )
}
export default Signup