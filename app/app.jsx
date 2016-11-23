var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from 'Main';
import Weather from 'Weather';
import About from 'About';
import Examples from 'Examples';

//Navigation through different pages


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={Weather}></IndexRoute>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
    </Route>
  </Router>,
  document.getElementById('app')
);
