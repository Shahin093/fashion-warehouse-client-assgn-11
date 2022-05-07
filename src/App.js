import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Brands from './components/Brands/Brands';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import FashionService from './components/FashionService/FashionService';
import UpdateFashion from './components/UpdateFashion/UpdateFashion';
import HeaderNav from './components/HeaderNav/HeaderNav';
import MainHeader from './components/MainHeader/MainHeader';
import ManageItem from './components/ManageItem/ManageItem';
function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
     */}
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path='/' element={<MainHeader></MainHeader>}></Route>
        <Route path='/home' element={<MainHeader></MainHeader>}></Route>
        <Route path='/inventory/:id' element={<UpdateFashion></UpdateFashion>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/manage' element={<ManageItem></ManageItem>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
