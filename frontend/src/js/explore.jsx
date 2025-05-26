import React from 'react';
import {Container} from 'react-bootstrap';

import ShotContainer from './shot_container';

function Explore() {
  return (
    <Container>
      <ShotContainer shot_id={1} />
    </Container>
  );
}

export default Explore;
