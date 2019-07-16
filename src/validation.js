import errors from './constants/ErrorsField';

const isEmpty = str => str.trim() === '';
const validateField = (value, name) => {
  let errorField = '';
  const { pattern, error } = errors[name];
  if (isEmpty(value)) {
    errorField = 'Обязательное поле!';
    return errorField;
  } if (pattern.test(value)) {
    errorField = '';
  } else errorField = error;
  return errorField;
};
export {
  isEmpty,
  validateField,
};
