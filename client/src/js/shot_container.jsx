import React from 'react';
import {Panel, Thumbnail, Grid, Row, Col, Pager, Well} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import safeAPICallback from './utils';

class ShotContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shot: null,
        };
    }

    render() {
        var shotTitle = '';
        var url = '';
        var videoName = '';
        var previousShotID = null;
        var nextShotID = null;

        if (this.state.shot) {
            shotTitle = this.state.shot.text + '.jpg';
            url = this.state.shot.get_image_url;
            videoName = this.state.shot.get_video_name;
            previousShotID = this.state.shot.get_previous_shot_id;
            nextShotID = this.state.shot.get_next_shot_id;
        }

        return (
            <Grid>

                <Row>
                    <Col>
                        <Well bsSize='small'>
                            <center>
                                <h3>
                                    {shotTitle}
                                </h3>
                            </center>
                        </Well>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Thumbnail src={url} />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Pager>
                            <Pager.Item
                                onClick={()=>this.updateShot(previousShotID)}
                                disabled={previousShotID === null}>
                                &larr; 上一張
                            </Pager.Item>
                            {' '}
                            <Pager.Item
                                onClick={()=>this.updateShot(nextShotID)}
                                disabled={nextShotID === null}>
                                下一張 &rarr;
                            </Pager.Item>
                        </Pager>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <center>
                            出處：{videoName}
                        </center>
                    </Col>
                </Row>

            </Grid>
        );
    }

    /**
     * Update shot and video after the component is rendered.
     */
    componentDidMount() {
        this.updateShot(this.props.shot_id);
    }

    /**
     * Makes an api call to fetch search result and updates the state.
     */
    updateShot(shot_id) {
        var self = this;
        safeAPICallback(
            `https://jeetou.com/api/shots/${shot_id}/`,
            function(data) {
                browserHistory.push(`/shot/${shot_id}/`);
                self.setState({'shot': data});
            }
        );
    }
};

ShotContainer.propTypes = {
    shot_id: React.PropTypes.number,
};

export default ShotContainer;
