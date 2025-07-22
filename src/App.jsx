import { Routes,Route} from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import MainProducts from './components/MainProducts'
import ClassicPureP from './ShowProducts/ClassicPureP'
import FlavoredMatchaP from './ShowProducts/FlavoredMatchaP'


function App() {

  return (
    <>
    
   <Header />
   <Routes>
    <Route path="/" element={<><Home/><Footer/><MainProducts/></>} />
    <Route path='/about'element={<About/>} />
    <Route path='/classic-pure' element={<ClassicPureP/>} />
    <Route path='/flavored-matcha' element={<FlavoredMatchaP/>} />
      
   </Routes>

    </>
  )
}

export default App
