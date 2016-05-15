import { CharacterCreator, CharacterCreatorOverview, CharacterList, CharacterHeader } from './components/characters';
import { Component } from 'react';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';
import App from './components/app';

export default class Routes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="characters" component={CharacterHeader}>
            <IndexRoute component={CharacterList} />
            <Route path="create" component={CharacterCreator}>
              <IndexRoute component={CharacterCreatorOverview} />
            </Route>
          </Route>
        </Route>
      </Router>
    );
  }
}
