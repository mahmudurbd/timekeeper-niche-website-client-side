import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/timekeeper-logo.png';
import useAuth from '../../../hooks/useAuth';
const Header = () => {
  const {user,logOut,admin} = useAuth();
    return (
        <Navbar className="header-area py-3" collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/morewatches">More Watches</Nav.Link>
      { user.email &&
      <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
        {admin && <NavDropdown.Item href="/addproduct">Add Product</NavDropdown.Item>}
        {admin && <NavDropdown.Item href="/manageorders">Manage Orders</NavDropdown.Item>}
        {admin && <NavDropdown.Item href="/makeadmin">Make Admin</NavDropdown.Item>}
        {admin && <NavDropdown.Divider />}
        <NavDropdown.Item href="/payment">Pay</NavDropdown.Item>
        <NavDropdown.Item href="/myorders">My Orders</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Reviews</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logOut} href="/home">Logout</NavDropdown.Item>
      </NavDropdown>
      }
    </Nav>
    <Nav>
      { !user.email && <Nav.Link href="/login">Login</Nav.Link>}
      { user.email &&
      <Navbar.Text>
        <span><i className="fas fa-user-shield"></i></span> <a href="#login"> {user.email}</a>
      </Navbar.Text>}
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;