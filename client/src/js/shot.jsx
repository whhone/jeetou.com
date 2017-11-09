import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';

import ShotContainer from './shot_container';

class Shot extends React.Component {
    render() {
        var shot_id = parseInt(this.props.params.shot_id);
        return (
            <Grid>
                <Row>
                    <Col>
                        <ShotContainer shot_id={shot_id} />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

module.exports = Shot;
