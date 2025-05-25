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
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to='/'>截圖道</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/about'>關於</Nav.Link>
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
              <FormControl
                type='text'
                placeholder='對白搜尋'
                value={query}
                onChange={handleQueryChange}
                className="me-2"
              />
              <Button variant="outline-light" onClick={handleSearch}>搜圖</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet context={{query}} />
    </div>
  );
}

export default App;
