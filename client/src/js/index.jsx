import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import '../bootstrap.min.css';

import AboutPage from './about_page';
import App from './app';
import Explore from './explore';
import Home from './home';
import SearchResultPage from './search_result_page';
import Shot from './shot';
import Http404 from './http_404';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route index element={<Home />} />
        <Route path='explore' element={<Explore />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='search' element={<SearchResultPage />} />
        <Route path='shot/:shot_id' element={<Shot />} />
        <Route path='*' element={<Http404 />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
