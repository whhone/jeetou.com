import React from 'react';
import {Button, Grid, Row, Col, Thumbnail} from 'react-bootstrap';

class Http404 extends React.Component {
    render() {
        var imageUrl = ('https://storage.googleapis.com/static.jeetou.com/p/1/38bc26c3560c2c4c1a39dfd13e533d3a.jpg');
        return (
            <Grid>
                <Row>
                    <Col>
                        {'四零四，咩都搵唔到喎，係咪打錯左網址。。。'}
                        <Thumbnail src={imageUrl} />
                    </Col>
                </Row>
            </Grid>
        );
    }
};

module.exports = Http404;
