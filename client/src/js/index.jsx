import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import '../bootstrap.min.css';

import AboutPage from './about_page';
import App from './app';
import Explore from './explore';
import Home from './home';
import SearchResultPage from './search_result_page';
import Shot from './shot';
import Http404 from './http_404';

render((
    <Router history={browserHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='explore/' component={Explore} />
            <Route path='about/' component={AboutPage} />
            <Route path='search/' component={SearchResultPage} />
            <Route path='shot/:shot_id/' component={Shot} />

            {/* Go to the 404 not found page for everything else. */}
            <Route path='*' component={Http404} />
        </Route>
    </Router>
), document.getElementById('root'));
