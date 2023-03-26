import { useState, useContext } from "react"
import Cartcontext from "./cartcontext"

const Cartprovider = (props) => {
    const [myproduct, setmyproduct] = useState(JSON.parse(localStorage.getItem("product")))
    const [cart, setcart] = useState(localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) :
        [])
    const [theme, settheme] = useState({ backgroundcolor: "white", textcolor: "black" })

    const getnumber = (item) => {
        const isproductincart = cart.find((Existingitem) => Existingitem.id == item.id)
        if (isproductincart) {
            alert("product already exist")
        }
        else {
            let NewCart = [...cart, { ...item, quantity: 1, Total: item.price }]
            setcart(NewCart)
            localStorage.setItem('cartItem', JSON.stringify(NewCart))

        }
    }




    const Cartcont = {
        product: myproduct,
        cart: cart,
        getnumber,
        theme: theme,
        settheme: settheme,
        setcart: setcart,

    }



    return (
        <Cartcontext.Provider value={Cartcont}>
            {props.children}
        </Cartcontext.Provider>
    )
}
export default Cartprovider