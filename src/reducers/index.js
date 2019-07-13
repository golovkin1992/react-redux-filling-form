import * as validate from '../validation';

const { validateField } = validate;

const initialState = {
  data: [
    {
      name: 'tel',
      label: 'Телефон',
      value: '',
      error: '',
    },
    {
      name: 'email',
      label: 'E-mail',
      value: '',
      error: '',
    },
    {
      name: 'date',
      label: 'Дата',
      value: '',
      error: '',
    },
    {
      name: 'stopka',
      label: 'Стопка',
      value: '',
      error: '',
    },

  ],
};

export default (state = initialState, action) => {
  const { data } = state;
  const { type, payload } = action;
  switch (type) {
    case 'INPUT_VALIDATE': {
      const { name, value } = payload;
      /* / const newState = payload
        .test(/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}/);
      console.log(newState);/ */

      // const isEnabled = Object.keys(state).some(x => state[x].error === '');
      // console.log(isEnabled);
      const index = data.findIndex(el => el.name === name);
      const updatedObj = Object.assign({}, data[index], { value, error: validateField(value, name) });
      const newState = {
        data: [
          ...data.slice(0, index),
          updatedObj,
          ...data.slice(index + 1),
        ],
      };

      return newState;
    }
    default:
      return state;
  }
};
