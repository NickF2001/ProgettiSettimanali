import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import NavBarHome from './homepage/NavBarHome'
import TvShow from './homepage/TvShow'
import Gallery from './homepage/Gallery'
import FooterHome from './homepage/FooterHome'
import { Row, Container } from 'react-bootstrap';

function App() {

  return (
    <>
      <NavBarHome />
      <TvShow />
      <div>
        <Row className='mt-4 mb-1'>
          <Row><h4 className="text-light">Trending Now</h4></Row>
          <Gallery saga='Scream'/>
        </Row>

        <Row className='mt-4 mb-1'>
          <Row><h4 className="text-light">Watch It Again</h4></Row>
          <Gallery saga='Saw'/>
        </Row>

        <Row className='mt-4 '>
          <Row><h4 className="text-light">New Releases</h4></Row>
          <Gallery saga='Friday the 13th'/>
        </Row>
      </div>
      <FooterHome />
    </>
  )
}

export default App
