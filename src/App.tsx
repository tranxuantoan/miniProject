
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
        <Route path='/' element={<HomePage/>}/>
        <Route path='/blog' element={<BlogHome/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/product' element={<ProductList1/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/customer' element={<Customer/>}/>
        <Route path='*' element={<NoPage/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
