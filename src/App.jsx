import { Routes,Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'


function App() {

  return (
    <>
   <Header />
   <Routes>
    <Route path="/" element={<><Home/><Footer/></>} />
    <Route path='/about'element={<About/>} />
   </Routes>

    </>
  )
}

export default App
