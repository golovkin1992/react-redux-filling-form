import * as validate from '../validation';

const { validateField } = validate;

const initialState = {
  trackNum: {
    value: '',
    error: '',
  },
  fio: {
    value: '',
    error: '',
  },
  adress: {
    value: '',
    error: '',
  },
  passSeries: {
    value: '',
    error: '',
  },
  passNumber: {
    value: '',
    error: '',
  },
  passIssueDate: {
    value: '',
    error: '',
  },
  passIssuingAuthority: {
    value: '',
    error: '',
  },
  passUnitCode: {
    value: '',
    error: '',
  },
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'INPUT_VALIDATE': {
      const { name, value } = payload;
      return { ...state, [name]: { value, error: validateField(value, name) } };
    }
    case 'LOAD_DATA': {
      const data = localStorage.getItem('blank');
      if (!data) {
        return state;
      }
      return JSON.parse(data);
    }
    case 'SAVE_DATA': {
      localStorage.setItem('blank', JSON.stringify(state));
      return state;
    }
    case 'CLEAR_DATA': {
      return localStorage.removeItem('blank');
    }
    default:
      return state;
  }
};
