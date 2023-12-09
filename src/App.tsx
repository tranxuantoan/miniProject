
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import BlogHome from './pages/BlogHome';
import Category from './pages/Category';
import ProductList1 from './pages/Product';
import LoginForm from './pages/Login';
import Customer from './pages/Customer';
import NoPage from './pages/NoPage';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='miniProject/' element={<HomePage/>}/>
        <Route path='miniProject/blog' element={<BlogHome/>}/>
        <Route path='miniProject/category' element={<Category/>}/>
        <Route path='miniProject/product' element={<ProductList1/>}/>
        <Route path='miniProject/login' element={<LoginForm/>}/>
        <Route path='miniProject/customer' element={<Customer/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
