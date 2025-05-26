import React from 'react';
import {Container, Card, Image} from 'react-bootstrap';

function Http404() {
  const imageUrl = 'https://storage.googleapis.com/jeetou-images/p/1/38bc26c3560c2c4c1a39dfd13e533d3a.jpg';
  return (
    <Container className="text-center">
      <h3>四零四，咩都搵唔到喎，係咪打錯左網址。。。</h3>
      <Card className="mt-3">
        <Card.Body>
          <Image src={imageUrl} fluid />
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Http404;
