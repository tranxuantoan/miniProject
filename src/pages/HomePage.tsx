import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import WhatOffer from "../components/Whatweoffer"
import BodyIndex from "../components/body1"
import Header from "../components/header"
import SimpleForm from "../components/label"
import Slide from "../components/slide"


const HomePage=() =>{
    return(
        <div>
            <Header/>
            <Slide/> <br /> <br />
            <BodyIndex/><br /> <br />
            <WhatOffer/><br /> <br />
            <ProductList/><br /> <br />
            <SimpleForm/>
            <Footer/>
        </div>
    )
}
export default HomePage