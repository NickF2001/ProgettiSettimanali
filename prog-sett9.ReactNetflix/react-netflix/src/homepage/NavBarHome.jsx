import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DropdownDivider from 'react-bootstrap/esm/DropdownDivider';
import Dropdown from 'react-bootstrap/Dropdown';

const NavBarHome = () => {
  return (
    <Navbar expand="lg" className='NavbarHome'>
      <Container className="m-0 p-0" fluid>
        
            <Navbar.Brand href="#home">
                <img src="./src/assets/Netflix-logo.png"
                alt="Netflix Logo"
                style={{width: '100px'}}/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">    
          <Nav className="me-auto d-flex gap-3">
            <Nav.Link className='text-secondary' href="#home">Home</Nav.Link>
            <Nav.Link className='text-secondary' href="#link">TV Shows</Nav.Link>
            <Nav.Link className='text-secondary' href="#link">Movies</Nav.Link>
            <Nav.Link className='text-secondary' href="#link">Recently Added</Nav.Link>
            <Nav.Link className='text-secondary' href="#link">My List</Nav.Link>
          </Nav>
        
          <Nav className='d-flex align-items-center justify-content-end gap-3'> 
            
                <Nav.Link href='#'>
                        <i className="bi bi-search icon text-light"></i>
                </Nav.Link>
                <Nav.Link href="#">
                        <i className="bi bi-bell-fill icon text-light"></i>
                </Nav.Link>
            <Nav.Link href="#">
                    <img src="./src/assets/kids_icon.png" alt="Kids Icon" style={{width: '30px', height: '30px'}}/>
            </Nav.Link>

            <Nav.Item>
                <Dropdown id='dropdown-button-drop-start' drop='start'>
                    <Dropdown.Toggle variant="trasparent" id="dropdown-basic" className='text-light'>
                    <img src="./src/assets/avatar.png" alt="Avatar Icon" style={{width: '30px', height: '30px'}}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className='bg-dark'>
                        <Dropdown.Item className='text-light' href="#/action-1">Manage Profiles</Dropdown.Item>
                        <Dropdown.Item className='text-light' href="#/action-2">Account</Dropdown.Item>
                        <Dropdown.Item className='text-light' href="#/action-3">Help Center</Dropdown.Item>
                        <DropdownDivider className='bg-secondary' />
                        <Dropdown.Item className='text-light' href="#/action-2">Signout Netflix</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarHome;