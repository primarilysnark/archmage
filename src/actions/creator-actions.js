import { setCreatorFieldType } from './action-types';

export function setCreatorField(field, value) {
  return {
    type: setCreatorFieldType,
    field,
    value,
  };
}
