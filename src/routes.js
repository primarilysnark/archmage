import { CharacterCreator, CharacterCreatorOverview, CharacterList, CharacterHeader } from './components/characters';
import { IndexRoute, Route } from 'react-router';
import React from 'react';
import App from './components/app';

export default (
  <Route path="/" component={App}>
    <Route path="characters" component={CharacterHeader}>
      <IndexRoute component={CharacterList} />
      <Route path="create" component={CharacterCreator}>
        <IndexRoute component={CharacterCreatorOverview} />
      </Route>
    </Route>
  </Route>
);
