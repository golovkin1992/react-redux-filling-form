import { connect } from 'react-redux';
import App from './App';
import {
  loadFormAction,
  clearFormAction,
  changeFieldAction,
  validateFieldAction,
  submitFormAction,
} from '../../actions';

const hasErrors = fields => !(Object.keys(fields).every((item => fields[item].error === ''))
  && !Object.keys(fields).some(item => fields[item].value === ''));

const mapStateToProps = state => ({
  formData: state.fields,
  hasErrors: hasErrors(state.fields),
  isVisibleBlank: state.isVisibleBlank,
  isDisabledForm: state.isDisabledForm,
});

export default
connect(mapStateToProps,
  {
    changeField: changeFieldAction,
    validateField: validateFieldAction,
    loadForm: loadFormAction,
    clearForm: clearFormAction,
    submitForm: submitFormAction,
  })(App);
