import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TextField.sass';

export default class TextField extends PureComponent {
  handleChange = (e) => {
    const { onValidate, name } = this.props;
    onValidate(name, e.target.value);
  }

  render() {
    const {
      label,
      value,
      error,
      name,
      disabledInputs,
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
          onFocus={this.handleChange}
          autoComplete="off"
          disabled={disabledInputs}
        />
        <span className={`field__label ${error === '' ? 'valid' : 'invalid'}`}>{label}</span>
        <p className="field__error">{error}</p>
      </label>
    );
  }
}
TextField.propTypes = {
  onValidate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabledInputs: PropTypes.bool.isRequired,
};
