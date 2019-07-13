import React from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import './Form.css';

const Form = ({ data, inputValidate, submitEnabled }) => {
  const inputList = data.map(item => (
    <TextField
      key={item.name}
      onValidate={inputValidate}
      {...item}
    />
  ));
  return (
    <div className="container">
      {inputList}
      <button
        disabled={submitEnabled}
        type="submit"
      >
      Сформировать
      </button>
    </div>
  );
};

Form.propTypes = {
  inputValidate: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  submitEnabled: PropTypes.bool.isRequired,

};
export default Form;
