import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

import HomeForm from './home_form';

class Home extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <HomeForm />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default Home;

