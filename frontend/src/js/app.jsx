import React from 'react';
import {Nav, Navbar, Form, FormControl, Button, Container} from 'react-bootstrap';
import {Link, Outlet, useNavigate, useLocation} from 'react-router-dom';
import safeAPICallback from './utils';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = React.useState(
    new URLSearchParams(location.search).get('q') || ''
  );

  const handleQueryChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/search?q=${query}`);
  };

  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href='/'>截圖道</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/about'>關於</Nav.Link>
            </Nav>
            <Form onSubmit={handleSearch}>
              <Form.Group className="d-flex gap-2">
                <Form.Control
                  type='text'
                  placeholder='對白搜尋'
                  value={query}
                  onChange={handleQueryChange}
                  className="w-auto"
                />
                <Button className="flex-fill" type="submit" variant="secondary">搜圖</Button>
              </Form.Group>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="py-3">
        <Outlet context={{query}} />
      </Container>
    </div>
  );
}

export default App;
