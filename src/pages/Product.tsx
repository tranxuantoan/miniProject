import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import Header from "../components/header"

const ProductList1 =()=>{
    return(
        <div>
            <Header/> <br /> <br />
            <div className="text-center text-4xl font-bold text-red-500">Chào mừng đến với lớp Thầy Nhân !!! <br /> <br />
            Đây là trang Product <br /> <br />
            <hr /> 
            </div> <br /> <br />
            <ProductList/>
            <Footer/>
        </div>
    )
}
export default ProductList1