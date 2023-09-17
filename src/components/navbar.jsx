import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function JaiwinNavbar() {
  return (
    <>

      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">JAIWIN</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/billing">Billing</Nav.Link>
            <Nav.Link href="/letterpad">LetterPad</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

    </>
  );
}

export default JaiwinNavbar;