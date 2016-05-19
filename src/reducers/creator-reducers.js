import { setAbilityScoreType, setCreatorFieldType } from '../actions/action-types';

const DEFAULT_CREATOR_STATE = {
  abilityScores: {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10,
  },
  background: 'Entertainer',
  name: 'Bogrum Goldstein',
  race: 'Half-Orc',
};

export function creator(state = DEFAULT_CREATOR_STATE, action) {
  const { type } = action;

  switch (type) {
    case setCreatorFieldType:
      return {
        ...state,
        [action.field]: action.value,
      };

    case setAbilityScoreType:
      return {
        ...state,
        abilityScores: {
          ...state.abilityScores,
          [action.abilityScore]: action.value,
        },
      };

    default:
      return state;
  }
}
