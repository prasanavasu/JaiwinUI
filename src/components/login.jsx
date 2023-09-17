import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import "../login.css"
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here with username and password
  };

  return (
    <Container>
      <Row>
        <Col lg={3} md={2}></Col>
        <Col lg={6} md={8} className="login-box">
          <Col lg={12} className="login-key my-2">
            <FontAwesomeIcon icon={faKey} aria-hidden="true" />
          </Col>
          <Col lg={12} className="login-title">
            ADMIN PANEL
          </Col>
          <Col lg={12} className="login-form">
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label className="form-control-label">USERNAME</Form.Label>
                <Form.Control
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="form-control-label">PASSWORD</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Col lg={12} className="loginbttm">
                <Col lg={6} className="login-btm login-text">
                  {/* Display error message here */}
                </Col>
                <Col lg={6} className="login-btm login-button my-3">
                  <Button type="submit" variant="outline-primary">
                    LOGIN
                  </Button>
                </Col>
              </Col>
            </Form>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default Login