import Footer from "../components/footer"
import Nav from "../components/Nav"

const Defaultlayout = (props) => {
    return (
        <>
            <Nav />
            {props.children}

        </>
    )
}
export default Defaultlayout