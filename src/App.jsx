import { Routes,Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import MainProducts from './components/MainProducts'
import ClassicPureP from './ShowProducts/ClassicPureP'
import FlavoredMatchaP from './ShowProducts/FlavoredMatchaP'
import DessertInspiredP from './ShowProducts/DessertInspiredP'
import Cart from './components/Cart'


function App() {

  return (
    <>
    
   <Header />
   <Routes>
    <Route path="/" element={<><Home/><Footer/><MainProducts/></>} />
    <Route path='/about'element={<About/>} />
    <Route path='/cart' element= {<Cart/>}/>
    <Route path='/classic-pure' element={<ClassicPureP/>} />
    <Route path='/flavored-matcha' element={<FlavoredMatchaP/>} />
    <Route path='/dessert-inspired' element={<DessertInspiredP/>}/>
      
   </Routes>

    </>
  )
}

export default App
