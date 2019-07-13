import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TextField.css';

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
    } = this.props;
    return (
      <div className="group">
        <label htmlFor={name} className="field">
          <input
            type="text"
            placeholder=" "
            className="input"
            id={name}
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleChange}
            autoComplete="off"
          />
          <span className={`label ${error === '' ? 'valid' : 'invalid'}`}>{label}</span>
          <span className={`border ${error === '' ? 'valid' : 'invalid'}`} />
          <p className="error">{error}</p>
        </label>

      </div>
    );
  }
}
TextField.propTypes = {
  onValidate: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
