import React from 'react';
import {Nav, Navbar, NavItem, FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link, browserHistory} from 'react-router';
import {LinkContainer} from 'react-router-bootstrap';
import safeAPICallback from './utils';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: this.props.location.query.q,
        };
        this.handleQueryChange = this.handleQueryChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    render() {
        return (
            <div>
                <Navbar inverse>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to='/'>截圖道</Link>
                        </Navbar.Brand>
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={{pathname: '/about/'}}>
                                <NavItem>關於</NavItem>
                            </LinkContainer>
                        </Nav>

                        <Navbar.Form pullRight>
                            <form onSubmit={this.handleSearch}>
                                <FormGroup>
                                    <FormControl
                                        type='text'
                                        placeholder='對白搜尋'
                                        value={this.state.query}
                                        onChange={this.handleQueryChange}/>
                                    {' '}
                                    <Button onClick={this.handleSearch}>搜圖</Button>
                                </FormGroup>
                            </form>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Navbar>
                {React.cloneElement(this.props.children, {query: this.state.query})}
            </div>
        );
    }

    handleQueryChange(event) {
        this.setState({'query': event.target.value});
    }

    handleSearch(event) {
        event.preventDefault();
        browserHistory.push(`/search/?q=${this.state.query}`);
    }
};

export default App;
