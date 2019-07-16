import { connect } from 'react-redux';
import App from './App';
import {
  inputValidateAction,
  loadDataAction,
  saveDataAction,
  clearDataAction,
} from '../../actions';

const hasErrors = state => Object.keys(state).every(item => state[item].error === '')
  && !Object.keys(state).some(item => state[item].value === '');

const mapStateToProps = state => ({
  data: state,
  hasErrors: !hasErrors(state),
});
export default
connect(mapStateToProps,
  {
    inputValidate: inputValidateAction,
    loadData: loadDataAction,
    saveData: saveDataAction,
    clearData: clearDataAction,
  })(App);
