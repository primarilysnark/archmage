import { Route, Router, hashHistory } from 'react-router';
import { render } from 'react-dom';
import App from './components/app';
import CharacterOverview from './components/character-overview';
import CharacterCreator from './components/character-creator';

render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="characters" component={CharacterOverview}>
        <Route path="create" component={CharacterCreator} />
      </Route>
    </Route>
  </Router>,
  document.getElementById('app')
);
