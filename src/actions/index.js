import {
  VALIDATE_FIELD,
  CHANGE_FIELD,
  LOAD_FORM,
  CLEAR_FORM,
  SUBMIT_FORM,
} from '../constants/ActionTypes';

export const changeFieldAction = (name, value) => (
  { type: CHANGE_FIELD, payload: { name, value } });
export const validateFieldAction = (name, value) => (
  { type: VALIDATE_FIELD, payload: { name, value } });
export const loadFormAction = () => ({ type: LOAD_FORM });
export const clearFormAction = () => ({ type: CLEAR_FORM });
export const submitFormAction = () => ({ type: SUBMIT_FORM });
