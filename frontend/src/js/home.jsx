import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import HomeForm from './home_form';

function Home() {
  return (
    <Container>
      <Row>
        <Col>
          <HomeForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
