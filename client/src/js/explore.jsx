import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import ShotContainer from './shot_container';

function Explore() {
  return (
    <Container>
      <Row>
        <Col>
          <ShotContainer shot_id={1} />
        </Col>
      </Row>
    </Container>
  );
}

export default Explore;
