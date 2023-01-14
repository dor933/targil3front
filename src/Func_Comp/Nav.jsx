import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{marginLeft:"100px"}}>My Kitchen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style={{marginLeft:"100px"}}>Home</Nav.Link>
            <Nav.Link href="/recipe" style={{marginLeft:"100px"}}>Create New Recipe</Nav.Link>
            <Nav.Link href="/ingerd" style={{marginLeft:"100px"}}>Create New Ingerdient</Nav.Link>
            <Nav.Link href="/deleterec" style={{marginLeft:"100px"}}>Delete Recipe</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;