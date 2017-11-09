import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

import ShotContainer from './shot_container';

class Explore extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col>
                        <ShotContainer shot_id={1} />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

module.exports = Explore;
