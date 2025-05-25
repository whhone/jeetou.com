import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import ShotContainer from './shot_container';

function Shot() {
  const { shot_id } = useParams();
  const shotId = parseInt(shot_id);

  return (
    <Container>
      <Row>
        <Col>
          <ShotContainer shot_id={shotId} />
        </Col>
      </Row>
    </Container>
  );
}

export default Shot;
