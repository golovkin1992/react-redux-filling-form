import { validateField } from '../utils/validation';

const initialState = {

  fields: {
    trackNum: {
      value: '',
      error: '',
    },
    fio: {
      value: '',
      error: '',
    },
    address: {
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
  },

  isVisibleBlank: false,
  isDisabledForm: false,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'VALIDATE_FIELD': {
      const { name, value } = payload;
      const { fields } = state;
      return { ...state, fields: { ...fields, [name]: { value, error: validateField(value, name) } } };
    }
    case 'CHANGE_FIELD': {
      const { name, value } = payload;
      const { fields } = state;
      return { ...state, fields: { ...fields, [name]: { value, error: '' } } };
    }
    case 'LOAD_FORM': {
      const data = localStorage.getItem('blank');
      if (!data) {
        return state;
      }
      return JSON.parse(data);
    }
    case 'CLEAR_FORM': {
      localStorage.setItem('blank', JSON.stringify(initialState));
      return initialState;
    }
    case 'SUBMIT_FORM': {
      localStorage.setItem('blank', JSON.stringify(state));
      return { ...state, isDisabledForm: true, isVisibleBlank: true };
    }
    default:
      return state;
  }
};
