import './App.css';
import Header from './components/Header/Header';
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
import AddItem from './components/AddItem/AddItem';
import MyItem from './components/MyItem/MyItem';
import NotFound from './components/NotFound/NotFound';
import RequiredAuth from './components/RequiredAuth/RequiredAuth';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
function App() {
  return (
    <div className="App">
      {/* <Navbar></Navbar>
     */}
      <HeaderNav></HeaderNav>
      <Routes>
        <Route path='/' element={<MainHeader></MainHeader>}></Route>
        <Route path='/home' element={<MainHeader></MainHeader>}></Route>
        {/* <Route path='/singleProduct' element={<UpdateFashion></UpdateFashion>}></Route> */}
        {/* <Route path='/contact' element={<Contact></Contact>}></Route> */}
        <Route path='/inventory/:id' element={
          <RequiredAuth>
            <UpdateFashion></UpdateFashion>
          </RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>

        <Route path='/addItem' element={<AddItem></AddItem>}></Route>
        <Route path='/manage' element={<ManageItem></ManageItem>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myItems/:email' element={<MyItem></MyItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
      <Footer></Footer>
    </div>
  );
}

export default App;
