import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Link, useNavigate } from "react-router-dom"
import { useContext } from 'react'
import Cartcontext from './cartcontext'
import Defaultlayout from './Layout/Defaultlayout'
import Footer from './components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Home(props) {
  const [product, setproduct] = useState([])
  const [Category, setcategory] = useState([])
  const navigate = useNavigate()
  const [loading, setloading] = useState(true)
  const cartt = useContext(Cartcontext)


  useEffect(() => {
    // localStorage.clear("myproduct")

    const fetchdata = async () => {
      try {
        setloading(true)
        const res = await fetch('./product.json')
        const product = await res.json()
        setproduct(product)
        setcategory(product)
        localStorage.setItem("product", JSON.stringify(product)
        )

      }
      catch (error) {
        console.log(error)
      }
      finally {
        setloading(false)
      }

    }
    fetchdata();
  },

    [])

  // const handleshowmore = (id) => {
  //   const show = product.find((item) => item.id === id)
  //   details.push(show)
  //   console.log(show)
  //   if (show) {
  //     setshowmore(!showmore)
  //     setdetails([show])
  //     console.log(details)
  //     localStorage.setItem("myproduct", JSON.stringify(details))
  //     navigate('/showmore')
  //   }
  //   else {
  //     setshowmore(showmore)
  //     setdetails([])
  //   }
  // }

  // const ad = (id) => {
  //   const adc = product.find((item) => item.id === id)
  //   let a = cart.push(adc)
  //   setcart([...cart], { a })
  //   setcount(cart.length)
  //   localStorage.setItem("adcart", count)                
  //   let g = localStorage.getItem("adcart")
  // }
  const allcategory = () => {
    setcategory(product)
  }
  const men = () => {
    let mencategory = product.filter(p => p.category === "men's clothing")
    return setcategory(mencategory)
  }
  const women = () => {
    allcategory()
    let womencategory = product.filter(a => a.category === "women's clothing")
    setcategory(womencategory)

  }


  const Jewelry = () => {
    let jewelrycategory = product.filter(b => b.category === "jewelery")
    setcategory(jewelrycategory)

  }
  const electronics = () => {
    let electronicscategory = product.filter(c => c.category === "electronics")
    setcategory(electronicscategory)

  }

  function add3dot(string, limit) {
    let dots = "..."
    if (string.length > limit) {
      string = string.substring(0, limit) + dots
    }
    return string
  }

  const loadspinner = () => {
    setTimeout(() => {
      return loading && `<span className='spinner-border spinner'></span>`
    }, 5);
  }
  return (
    <Defaultlayout >
      <main className="main-section" >
        <aside className='cart-aside' >
          <div className='category'>
            <h3 className='ourcategory' style={{ marginTop: "1em", marginBottom: "1em", marginLeft: "1em", fontSize: "1.5em" }} >OUR CARTEGORIES</h3>
            <ul className='category-list'>
              <li onClick={allcategory}> <FontAwesomeIcon color='gray' className='arrow' icon={faArrowCircleRight}></FontAwesomeIcon>  All category</li>
              <li onClick={men}> <FontAwesomeIcon  color='gray' className='arrow' icon={faArrowCircleRight}></FontAwesomeIcon>Men's clothings</li>
              <li onClick={women}> <FontAwesomeIcon  color='gray' className='arrow' icon={faArrowCircleRight}></FontAwesomeIcon>Women's clothings</li>
              <li onClick={electronics}> <FontAwesomeIcon   color='gray'className='arrow' icon={faArrowCircleRight}></FontAwesomeIcon>Electronics</li>
              <li onClick={Jewelry}><FontAwesomeIcon  color='gray'className='arrow' icon={faArrowCircleRight}></FontAwesomeIcon>Jewelry</li>
              <li><FontAwesomeIcon className='arrow' color='gray' icon={faArrowCircleRight}></FontAwesomeIcon> Automobile</li>
            </ul>
          </div>
        </aside>
        <section>
          <div className='product-section'>
            {Category.map((item, index) => (
              <div className='product-case' key={item.id}>

                <div className='product-img-case'>
                  <img className='product-img' src={item?.image}></img> </div>
                <div className='details-case'>
                  <h2 style={{ fontSize: "0.8em" }}>{item?.category}</h2>
                  <h2 style={{ fontSize: "0.6em" }}> {add3dot(item?.title, 40)}</h2>
                  <h3>{item?.price}</h3>
                  <div className='d-flex gap-3'>
                    {/* <button className='btn btn-primary' onClick={() => handleshowmore(item.id)}>Show more</button> */}
                    <button className='btn btn-primary t'><Link color='white' to={`/${item.id}`}><span style={{ color: "white" }}> Show more</span></Link></button>
                    <button className='btn btn-success' onClick={() => cartt.getnumber(item)}>Add cart</button>
                  </div>
                </div>
              </div>

            ))


            }
            {
              loading && <div>
                <span className='spinner-border spinner '></span>
                <span>LOADING...</span>
              </div>

            }
            {product.length <= 0 && !loading &&
              < div className="no-c">
                {loadspinner}
                <p>NO CONTENT</p>
              </div>
            }
          </div>
        </section>


      </main>
      <Footer />

    </Defaultlayout >


  )
}
export default Home
