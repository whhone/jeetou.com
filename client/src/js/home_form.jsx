import React from 'react';
import {Form, FormControl, Container, Row, Col, Button} from 'react-bootstrap';

function HomeForm() {
  return (
    <Container className="text-center">
      <h1>截圖道</h1>
      <Form action='/search/'>
        <Row>
          <Col lg={{span: 4, offset: 4}} md={{span: 6, offset: 3}} xs={{span: 8, offset: 2}}>
            <Form.Group className="mb-3">
              <FormControl
                name='q'
                type='text'
                placeholder='輸入對白,例如 "一萬年"' />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button type='submit'>搜圖</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default HomeForm;
