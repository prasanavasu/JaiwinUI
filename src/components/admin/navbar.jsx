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
            <Nav.Link href="/AJE">Home</Nav.Link>
            <Nav.Link href="/AJE/billing">Billing</Nav.Link>
            <Nav.Link href="/AJE/letterpad">LetterPad</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      

    </>
  );
}

export default JaiwinNavbar;