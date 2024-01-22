import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage'
import SearchPage from './pages/SearchPage'
import NavbarHome from './components/NavbarHome'


function App() {

return (
  <BrowserRouter>
    <NavbarHome />
    <Routes>
    <Route path='/' element={<Homepage page='homepage'/>} />
    <Route path='/searchpage' element={<SearchPage page='Search Location'/>} />
  </Routes>
  </BrowserRouter>
)
}

export default App
