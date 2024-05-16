import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

const HeaderBootstrap = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src="logo.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Form inline className="mr-auto">
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-success">Buscar</Button>
        </Form>
        <Nav className="ml-auto">
          <Nav.Link href="#login">Iniciar sesión</Nav.Link>
          <Nav.Link href="#cart">
            <i className="fas fa-shopping-cart"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderBootstrap;
