import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { App, ContentList, ContentDetail } from './containers';


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={ContentList}/>
        <Route path="/detail" component={ContentDetail}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
