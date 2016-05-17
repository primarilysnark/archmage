import { setCreatorFieldType } from '../actions/action-types';

const DEFAULT_CREATOR_STATE = {
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

    default:
      return state;
  }
}
