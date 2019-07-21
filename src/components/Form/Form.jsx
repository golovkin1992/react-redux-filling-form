import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from './TextField';
import './Form.sass';
import groupFields from '../../constants/groupFields';

export default class Form extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit();
  }

  handleResetClick = () => {
    const { onReset } = this.props;
    onReset();
  }

  render() {
    const {
      formData,
      onValidateField,
      onChangeField,
      isSubmit,
      isDisabled,
    } = this.props;
    return (
      <div className="container">
        {groupFields.map(group => (
          <div
            className={classNames('group', group.className)}
            key={group.title}
          >
            <p className="group__label">{group.title}</p>
            {group.fields.map(field => (
              <TextField
                key={field.name}
                name={field.name}
                label={field.title}
                value={formData[field.name].value}
                error={formData[field.name].error}
                onValidateField={onValidateField}
                onChangeField={onChangeField}
                isDisabled={isDisabled}
                isDate={field.isDate}
              />
            ))}
          </div>
        ))}
        <button
          className="btn btn_run"
          type="submit"
          disabled={isSubmit}
          onClick={this.handleClick}
        >
      Сформировать
        </button>
        <button
          className="btn btn_reset"
          type="submit"
          onClick={this.handleResetClick}
        >
      Очистить
        </button>
      </div>
    );
  }
}
Form.propTypes = {
  onChangeField: PropTypes.func.isRequired,
  onValidateField: PropTypes.func.isRequired,
  formData: PropTypes.objectOf(PropTypes.object).isRequired,
  isSubmit: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};
