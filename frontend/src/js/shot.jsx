import React from 'react';
import {Container} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

import ShotContainer from './shot_container';

function Shot() {
  const { shot_id } = useParams();
  const shotId = parseInt(shot_id);

  return <ShotContainer shot_id={shotId} />;
}

export default Shot;
