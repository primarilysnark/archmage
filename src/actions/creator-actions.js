import { setAbilityScoreType, setCreatorFieldType } from './action-types';

export function setAbilityScore(abilityScore, value) {
  return {
    type: setAbilityScoreType,
    abilityScore,
    value,
  };
}

export function setCreatorField(field, value) {
  return {
    type: setCreatorFieldType,
    field,
    value,
  };
}
