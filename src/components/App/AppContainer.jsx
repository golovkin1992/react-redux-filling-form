import { connect } from 'react-redux';
import { isEmpty } from '../../validation';
import App from './App';
import { inputValidateAction } from '../../actions';

const isEnabled = data => !data.every(item => isEmpty(item.error));
const mapStateToProps = (state) => {
  const { data } = state;
  return {
    data,
    hasErrors: isEnabled(data),
  };
};
export default
connect(mapStateToProps,
  { inputValidate: inputValidateAction })(App);
