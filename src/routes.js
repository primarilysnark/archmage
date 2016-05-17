import { CharacterCreator, CharacterList, CharacterHeader } from './components/characters';
import { IndexRoute, Route } from 'react-router';
import App from './components/app';
import CharacterCreatorOverview from './containers/character-creator-overview';
import React from 'react';

export default (
  <Route path="/" component={App}>
    <Route path="characters" component={CharacterHeader}>
      <IndexRoute component={CharacterList} />
      <Route path="create" component={CharacterCreator}>
        <IndexRoute component={CharacterCreatorOverview} characterId="8fed5349d4314b5a8bf52a0a644212a4" />
      </Route>
    </Route>
  </Route>
);
