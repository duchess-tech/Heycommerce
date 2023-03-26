import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAddressBook, faRegistered, faSearch, faShoppingCart, faToggleOff, faToggleOn, faUmbrella, faUser } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import Cartcontext from "../cartcontext"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Hamburger from "hamburger-react"




function Nav(props) {
    const { cart, theme,settheme } = useContext(Cartcontext)
    const [toggle, settoggle] = useState(true)
    const [show, setShow] = useState(false);
let body = document.body

    const ontoggle = () => {
        body.classList.toggle('dark-mode')
        settoggle(!toggle)
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <nav className="home-nav">
            <div className="nav-l">
                < Button variant="primary" className="menu-bar p-0" onClick={handleShow}>
                    <Hamburger size={20} />
                </Button>

                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body >
                        <ul>
                            <li className="offcanvas-linkcase">
                                <FontAwesomeIcon icon={faAddressBook} color="blue"></FontAwesomeIcon>
                                <Link to="/Signup" className="offcanvas-link">Signup</Link>
                            </li>
                            <li className="offcanvas-linkcase">
                                <FontAwesomeIcon icon={faRegistered} color="blue"></FontAwesomeIcon>

                                <Link to="/Login" className="offcanvas-link">Login</Link>

                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>

                <h1><Link to="/" className="link" style={{ color: "white ", marginLeft: "8rem" }}>HeyCommerce</Link></h1>
                <div className="sm-cart" >
                    <Link to="/addcart"><FontAwesomeIcon icon={faShoppingCart} size="2x" color="blue" /></Link>
                    <div className="cart">{cart.length}</div>
                </div>
            </div>

            
            <div className="activities" >
                <button style={{ fontSize: "1.2em" }} className="btn s-btn">
                    <FontAwesomeIcon icon={faAddressBook} className="text-primary"></FontAwesomeIcon>
                    <Link to="/Signup" style={{fontSize:"1.1em"}} className="link ">Signup</Link></button>

                <button style={{ fontSize: "1.2em" }} className="btn l-btn">
                    <FontAwesomeIcon icon={faRegistered} className="text-primary"></FontAwesomeIcon>
                    <Link to="/Login" className="link"  style={{fontSize:"1.1em"}}>Login</Link></button>

                <div className=" large-cart" style={{ marginLeft: "2em" }}>
                    <Link to="/addcart"><FontAwesomeIcon icon={faShoppingCart} size="2x" color="white" /></Link>
                    <div className="cart">{cart.length}</div>
                </div>
                <div className="theme">
                {toggle == true ?
                    <FontAwesomeIcon  icon={faToggleOn} style={{marginLeft:"2em"}} size="3x" onClick={ontoggle} /> : <FontAwesomeIcon icon={faToggleOff} size="3x" style={{marginLeft:"2em"}} onClick={ontoggle} />
                }
            </div>
            </div>

  

        </nav>


    )
}
export default Nav