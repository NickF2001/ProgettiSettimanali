import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './NavbarHome.css'

const NavbarHome = () => {

  return (
    <Navbar expand="lg" className='navbar'>
      <Container className="mx-3 p-0" fluid>
        
            <Navbar.Brand href="">
                <img src="./src/assets/weather-ios.svg"
                alt="Weather app logo"
                height={50}/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">    
          <Nav className="me-auto d-flex gap-3">
            <Link className='link' to='/'>Home</Link>
          </Nav>
        
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;