import Footer from "../components/Footer"
import Header from "../components/header"
import { TbError404 } from "react-icons/tb";

const NoPage =()=>{
    return(
        <div>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold text-blue-500 "> <div className="pl-[49%] text-5xl text-red-500"><TbError404 /></div> <br /> Page not found <br /> <br />
            </div> <br /> <br />
            <Footer/>
        </div>
    )
}
export default NoPage