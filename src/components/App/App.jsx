import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import Form from '../Form';
import Blanc from '../Blanc';

export default class App extends PureComponent {
  componentDidMount() {
    const { loadForm } = this.props;
    loadForm();
  }

  render() {
    const {
      formData,
      validateField,
      changeField,
      hasErrors,
      clearForm,
      submitForm,
      isDisabledForm,
      isVisibleBlank,
    } = this.props;
    return (
      <Fragment>
        <Form
          formData={formData}
          onChangeField={changeField}
          onValidateField={validateField}
          onReset={clearForm}
          isSubmit={hasErrors}
          isDisabled={isDisabledForm}
          onSubmit={submitForm}
        />
        <Blanc
          data={formData}
          isVisible={isVisibleBlank}
        />
      </Fragment>
    );
  }
}

App.propTypes = {
  formData: PropTypes.objectOf(PropTypes.object).isRequired,
  changeField: PropTypes.func.isRequired,
  validateField: PropTypes.func.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  loadForm: PropTypes.func.isRequired,
  submitForm: PropTypes.func.isRequired,
  clearForm: PropTypes.func.isRequired,
  isVisibleBlank: PropTypes.bool.isRequired,
  isDisabledForm: PropTypes.bool.isRequired,
};
