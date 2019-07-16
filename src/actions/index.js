import * as types from '../constants/ActionTypes';

const {
  INPUT_VALIDATE,
  LOAD_DATA,
  SAVE_DATA,
  CLEAR_DATA,
} = types;
const inputValidateAction = (name, value) => ({ type: INPUT_VALIDATE, payload: { name, value } });
const loadDataAction = () => ({ type: LOAD_DATA });
const saveDataAction = () => ({ type: SAVE_DATA });
const clearDataAction = () => ({ type: CLEAR_DATA });

export {
  inputValidateAction,
  loadDataAction,
  saveDataAction,
  clearDataAction,
};
