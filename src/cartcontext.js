import { useState } from "react";
import { createContext } from "react";

//blueprint
//this is an object instance i.e a prototype
const Cartcontext = createContext({
    cart: [],
    getnumber: () => { },
    theme: {},
    settheme: {},
    setcart: {},
    setcartnumber: {},
    Total: {},
    setTotal: {},
    overallTotal: "",
    setoverallTotal: ""
})

export default Cartcontext