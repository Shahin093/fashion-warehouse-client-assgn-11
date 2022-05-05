import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer/Footer';
import Brands from './components/Brands/Brands';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Brands></Brands>
      <Footer></Footer>
    </div>
  );
}

export default App;
