import React from 'react';
import {Card, Image, Container, Row, Col, Pagination, Alert} from 'react-bootstrap';
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
      `https://jeetou.com/api/shots/${shotId}/`,
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
      <Row>
        <Col>
          <Alert variant="info" className="text-center">
            <h3>{shotTitle}</h3>
          </Alert>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body className="text-center">
              <Image src={url} fluid />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>
          <Pagination className="justify-content-center">
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
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          出處：{videoName}
        </Col>
      </Row>
    </Container>
  );
}

export default ShotContainer;
