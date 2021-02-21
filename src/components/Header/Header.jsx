import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'; 

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg"> 
      <LinkContainer to="/">
        <Navbar.Brand>Markell Dehaney</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
          <LinkContainer to="about">
            <Nav.Link >About</Nav.Link>
          </LinkContainer> 
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  
  )
} 

export default Header;