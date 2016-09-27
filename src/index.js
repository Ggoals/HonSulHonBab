import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { BrowserRouter, Match } from 'react-router';
import { App, ContentList, ContentDetail } from './containers';


ReactDOM.render(
  <BrowserRouter>
    <App>
        <Match exactly pattern="/" component={ContentList}/>
        <Match exactly pattern="/:contentId" component={ContentDetail}/>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);
