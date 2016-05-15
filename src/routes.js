import { CharacterCreator, CharacterCreatorOverview } from './components/characters';
import { Component } from 'react';
import { IndexRoute, Route, Router, hashHistory } from 'react-router';
import App from './components/app';

export default class Routes extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/characters/create" component={CharacterCreator}>
            <IndexRoute component={CharacterCreatorOverview} />
          </Route>
        </Route>
      </Router>
    );
  }
}
