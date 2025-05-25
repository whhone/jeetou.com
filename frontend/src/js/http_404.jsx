import React from 'react';
import {Container, Row, Col, Card, Image} from 'react-bootstrap';

function Http404() {
  const imageUrl = 'https://storage.googleapis.com/jeetou-images/p/1/38bc26c3560c2c4c1a39dfd13e533d3a.jpg';
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center">
            四零四，咩都搵唔到喎，係咪打錯左網址。。。
            <Card className="mt-3">
              <Card.Body>
                <Image src={imageUrl} fluid />
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Http404;
