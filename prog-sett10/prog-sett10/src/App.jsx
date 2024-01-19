import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage'


function App() {

return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Homepage page='homepage'/>} />
  </Routes>
  </BrowserRouter>
)
}

export default App
