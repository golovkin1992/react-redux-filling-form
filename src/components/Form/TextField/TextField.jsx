import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TextField.sass';
import maskDate from '../../../utils/maskDate';

export default class TextField extends PureComponent {
  getValue = (e) => {
    const { value } = e.target;
    const { isDate } = this.props;

    if (isDate) {
      return maskDate(value);
    }

    return value;
  }

  handleChange = (e) => {
    const { onChangeField, name } = this.props;
    onChangeField(name, this.getValue(e));
  }

  handleBlur = (e) => {
    const { value } = e.target;
    const { onValidateField, name } = this.props;
    onValidateField(name, value);
  }

  render() {
    const {
      label,
      value,
      error,
      name,
      isDisabled,
    } = this.props;
    return (
      <label htmlFor={name} className="field">
        <input
          type="text"
          placeholder={'\u00A0'}
          className={`field__text-block ${error === '' ? 'valid_input' : 'invalid_input'}`}
          id={name}
          value={value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          autoComplete="off"
          disabled={isDisabled}
        />
        <span className={`field__label ${error === '' ? 'valid' : 'invalid'}`}>{label}</span>
        <p className="field__error">{error}</p>
      </label>
    );
  }
}
TextField.propTypes = {
  onChangeField: PropTypes.func.isRequired,
  onValidateField: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isDate: PropTypes.bool,
};
