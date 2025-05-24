import React from 'react';
import {Jumbotron, FormGroup, FormControl, Grid, Row, Col, Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

class HomeForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <center>
                <h1>截圖道</h1>
                <form action='/search/'>
                <Grid>
                    <Row>
                        <Col lg={4} lgOffset={4} md={6} mdOffset={3}  xs={8} xsOffset={2}>
                            <FormGroup>
                                <FormControl
                                    name='q'
                                    type='text'
                                    placeholder='輸入對白,例如 "一萬年"' />
                            </FormGroup>
                         </Col>

                    </Row>
                    <Row>
                         <Col>
                            <Button type='submit'>搜圖</Button>
                         </Col>
                    </Row>
                </Grid>
                </form>
            </center>
        );
    }
};

export default HomeForm;
