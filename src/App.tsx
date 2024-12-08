import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Container } from 'react-bootstrap'
import Home from './pages/Home'
import About from './pages/About'
import Store from './pages/Store'
import NavbarComponent from './components/NavbarComponent'
import { ShoppingCartProvider } from './context/ShoppingCartContext'

function App() {

  return (
    <ShoppingCartProvider>
      <NavbarComponent/>
      <Container>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Container>
    </ShoppingCartProvider>
  )
}

export default App
