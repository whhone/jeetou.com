import React from 'react';
import {Card, Image, Container, Pagination, Alert} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import safeAPICallback from './utils';

function ShotContainer({shot_id}) {
  const navigate = useNavigate();
  const [shot, setShot] = React.useState(null);

  React.useEffect(() => {
    updateShot(shot_id);
  }, [shot_id]);

  const updateShot = (shotId) => {
    safeAPICallback(
      `https://api.jeetou.com/api/shots/${shotId}/`,
      function(data) {
        navigate(`/shot/${shotId}/`);
        setShot(data);
      }
    );
  };

  const shotTitle = shot ? shot.text + '.jpg' : '';
  const url = shot ? shot.get_image_url : '';
  const videoName = shot ? shot.get_video_name : '';
  const previousShotID = shot ? shot.get_previous_shot_id : null;
  const nextShotID = shot ? shot.get_next_shot_id : null;

  return (
    <Container>
      <Alert variant="info" className="text-center">
        <h3>{shotTitle}</h3>
      </Alert>

      <Card>
        <Card.Body className="text-center">
          <Image src={url} fluid />
        </Card.Body>
      </Card>

      <Pagination className="justify-content-center mt-3">
        <Pagination.Prev
          onClick={() => updateShot(previousShotID)}
          disabled={previousShotID === null}>
          上一張
        </Pagination.Prev>
        <Pagination.Next
          onClick={() => updateShot(nextShotID)}
          disabled={nextShotID === null}>
          下一張
        </Pagination.Next>
      </Pagination>

      <Container className="text-center">
        出處：{videoName}
      </Container>
    </Container>
  );
}

export default ShotContainer;
