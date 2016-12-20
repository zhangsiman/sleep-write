import React, { PropTypes } from 'react';
import { Router, Route, hashHistory,IndexRoute,browserHistory} from 'react-router';
import App from './App';
import Home from './Home';
import Work from './Work';

class Routers extends React.Component {
  render () {
    return(
    <div>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/work' component={Work} />
        </Route>
      </Router>
    </div>
    )
  }
}

export default Routers;
