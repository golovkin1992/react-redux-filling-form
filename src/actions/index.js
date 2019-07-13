import * as types from '../constants/ActionTypes';

const { INPUT_VALIDATE } = types;
const inputValidateAction = (name, value) => ({ type: INPUT_VALIDATE, payload: { name, value } });

export {
  inputValidateAction,
};
