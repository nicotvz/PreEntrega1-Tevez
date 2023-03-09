import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">NGaming</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#products">Todos los productos</Nav.Link>
            <NavDropdown title="Categorias" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#cpu">Procesadores</NavDropdown.Item>
              <NavDropdown.Item href="#mobo">Motherboards</NavDropdown.Item>
              <NavDropdown.Item href="#memory">Memorias RAM</NavDropdown.Item>
              <NavDropdown.Item href="#gpu">Placas de video</NavDropdown.Item>
              <NavDropdown.Item href="#psu">Fuentes</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#storage">
                Almacenamiento
              </NavDropdown.Item>
              <NavDropdown.Item href="#case">Gabinetes</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#cart">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
