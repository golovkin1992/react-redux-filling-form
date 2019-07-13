const isEmpty = str => str.trim() === '';
const validateField = (value, name) => {
  let error = '';
  if (isEmpty(value)) {
    error = 'Обязательное поле!';
  } else {
    switch (name) {
      case 'tel': {
        if (
          (/^((\+?7|8)[ \-] ?)?((\(\d{3}\))|(\d{3}))?([ \-])?(\d{3}[\- ]?\d{2}[\- ]?\d{2})$/).test(value)) {
          error = '';
        } else error = 'Введите корректный номер телефона';
        return error;
      }
      case 'email': {
        if (
          (/.+@.+\..+/).test(value)) {
          error = '';
        } else error = 'Введите корректный адрес электронный почты';
        return error;
      }
      default:
        return error;
    }
  }
  return error;
};


export {
  isEmpty,
  validateField,
};

// (/((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{11}/)
