import React from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import {Jumbotron} from 'react-bootstrap';

class AboutPage extends React.Component {
    render() {
        return (
            <Grid>
                <Row>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <h3>什麽是截圖道</h3>
                        一個比你搵截圖嘅地方。<br/>
                        用圖回 message，回留言。
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={12}>
                        <h3>聯絡方法</h3>
                        電郵：whhone@gmail.com<br/>
                        Facebook：
                        <a href='https://www.facebook.com/jeetoudo/'
                           target='_blank'>
                           jeetoudo
                        </a><br/>
                        Github：
                        <a href='https://github.com/whhone/jeetou.com'
                           target='_blank'>
                           whhone/jeetou.com
                        </a>
                    </Col>
                </Row>
            </Grid>
        );
    }
};

export default AboutPage;
