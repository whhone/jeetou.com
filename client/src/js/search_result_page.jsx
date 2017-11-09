import React from 'react';
import {Button, Grid, Thumbnail, Row, Col, Well} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import ShotContainer from './shot_container';
import safeAPICallback from './utils';

class SearchResultPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search_result: null,
        };
    }

    render() {
        var prompt = null;
        var results = [];

        if (this.state.search_result === null) {
            prompt = (
                <div>
                   努力搵緊
                </div>
            );
        } else {
            var searchResults = this.state.search_result.results;
            if (this.state.search_result.count > 0) {
                prompt = (
                    <div>
                       搵到 <b>{this.state.search_result.count}</b> 張關於 <b>{this.props.query}</b> 嘅截圖
                    </div>
                );
                for (var i = 0; i < searchResults.length; i += 2) {
                    var entry1 = searchResults[i];
                    if (i + 1 < searchResults.length) {
                        var entry2 = searchResults[i + 1];
                        results.push(
                            <Row key={i}>
                                {this.renderCol(entry1)}
                                {this.renderCol(entry2)}
                            </Row>
                        );
                    } else {
                        results.push(
                            <Row key={i}>
                                {this.renderCol(entry1)}
                            </Row>
                        );
                    }
                }
            } else {
                prompt = (
                    <div>
                        搵唔到關於 <b>{this.props.query}</b> 嘅截圖
                    </div>
                );
            }
        }
        return (
            <Grid>
                <Well>
                    <center>
                        {prompt}
                    </center>
                </Well>
                {results}
            </Grid>
        );
    }

    renderCol(entry) {
        return (
            <Col lg={6} md={6} xs={12}>
                <LinkContainer to={{pathname: '/shot/' + entry.id + '/'}}>
                    <Thumbnail src={entry.get_image_url} />
                </LinkContainer>
            </Col>
        );
    }

    /**
     * Update search result after the component is rendered.
     */
    componentDidMount() {
        this.handleSearch(this.props.query);
    }

    /**
     * When query changes, update the search results.
     */
    componentWillReceiveProps(newProps) {
        if (newProps.query !== this.props.query) {
            this.handleSearch(newProps.query);
        }
    }

    /**
     * Makes an api call to fetch search result and updates the state.
     */
    handleSearch(query) {
        var self = this;
        safeAPICallback(
            `/api/search/?q=${query}`,
            function(data) {
                self.setState({
                    'search_result': data,
                });
            }
        );
    }
};

SearchResultPage.propTypes = {
    query: React.PropTypes.string,
};

module.exports = SearchResultPage;
