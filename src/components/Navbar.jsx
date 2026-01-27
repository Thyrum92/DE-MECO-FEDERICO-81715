import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBarra from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './CartWidget';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <NavBarra expand="lg" className='navbar-custom'>
      <Container>
        <NavBarra.Brand href="/">TiendApp</NavBarra.Brand>

        <NavBarra.Toggle aria-controls="basic-navbar-nav" />
        <NavBarra.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavDropdown.Item href="monitores">Monitores</NavDropdown.Item>
              <NavDropdown.Item href="teclados">Teclados</NavDropdown.Item>
              <NavDropdown.Item href="mouse">Mouse</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav className="ms-auto">
            <Nav.Link href="#carrito" className="position-relative">
                <CartWidget />
            </Nav.Link>
          </Nav>

        </NavBarra.Collapse>
      </Container>
    </NavBarra>
  );
}

export default Navbar;