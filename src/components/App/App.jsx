import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import Form from '../Form';
import Blanc from '../Blanc';

const App = ({ data, hasErrors, inputValidate }) => (
  <Fragment>
    <Form
      data={data}
      inputValidate={inputValidate}
      submitEnabled={hasErrors}

    />
    <Blanc />
  </Fragment>
);
export default App;

App.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  inputValidate: PropTypes.func.isRequired,
  hasErrors: PropTypes.bool.isRequired,
};
