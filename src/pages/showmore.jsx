import { useState } from "react"
import { useParams } from "react-router-dom"
import Defaultnav from "../Layout/Defaultlayout"
import '../productinfo.css'
import { Rate } from "antd"



function Showmore() {
    const more = JSON.parse(localStorage.getItem("product"))
    const [showprod, setprod] = useState(more)
    const { pid } = useParams()
    let prod = showprod.find((sh) => sh.id == pid)
    console.log("prod", prod)
    const [locationcountries, setlocationcountries] = useState([])
    const loaddata = async () => {
        try {
            const res = await fetch('./countries.json')
            const countries = await res.json()
            setlocationcountries(countries)
        }
        catch (error) {
            console.log(error)
        }
    }
    return (

        <Defaultnav>
            <div className="main-info d-flex">
                <div className="d-flex p-info">
                    {/* <p>pid:{pid}</p>
                <h1>{prod.title}</h1>
                <h1>{prod.category}</h1> */}
                    <div className="img-case"><img style={{ width: "100%" }} src={prod?.image}></img></div>
                    <div className="p-details">
                        <h1 style={{ fontSize: "34px" }}>{prod?.title}</h1>
                        <h1 style={{ fontSize: "24px" }}> Category: {prod?.category}</h1>
                        <Rate count={5} disabled value={prod?.rating?.rate} />
                        <hr></hr>
                        <h1 style={{ fontSize: "24px" }}> price: {prod?.price}</h1>
                        <button className="btn btn-primary "> ADD TO CART</button>

                    </div>
                </div>
                <div className="delivery-case">
                    <h1>DELIVERY & RETURNS</h1>
                    <hr></hr>
                    <p>Free delivery on thousands of products in Lagos, Ibadan & Abuja</p>
                    <hr></hr>
                    <h1>Choose your location</h1>
                    <select>
                        <option value="state"></option>
                    </select>
                    <select></select>

                </div>

            </div>
        </Defaultnav>







        //         <main>
        //             <Defaultnav>
        //                 <section>
        //                     <div className='showmore-section'>
        //                         {more.map((item, index) => (
        //                             <div className='showmore-case' key={item.id}>
        //                                 <div className='showmore-img-case'><img className='product-img' src={item.image}></img> </div>
        //                                 <div className='showmore-details-case'>
        //                                     <h2>Category : {item.category}</h2>
        //                                     <h2>Title: {item.title}</h2>
        //                                     <h3>price :{item.price}</h3>
        //                                     <h3>description:{item.description}</h3>
        //                                 </div>
        //                             </div>
        //                         ))}
        //                     </div>
        //                 </section>
        //             </Defaultnav>
        //         </main>
    )
}
export default Showmore