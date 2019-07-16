import PropTypes from 'prop-types';
import React, { PureComponent, Fragment } from 'react';
import Form from '../Form';
import Blanc from '../Blanc';

export default class App extends PureComponent {
  state = {
    isVisibleBlank: false,
    disabledInputs: false,
  }

  componentDidMount() {
    const { loadData } = this.props;
    loadData();
  }

  update = () => {
    const { saveData } = this.props;
    saveData();
    this.setState({ isVisibleBlank: true, disabledInputs: true });
  }

  render() {
    const {
      isVisibleBlank,
      disabledInputs,
    } = this.state;
    const {
      data,
      inputValidate,
      hasErrors,
      clearData,
    } = this.props;
    return (
      <Fragment>
        <Form
          data={data}
          inputValidate={inputValidate}
          submitEnabled={hasErrors}
          update={this.update}
          disabledInputs={disabledInputs}
          reset={clearData}
        />
        <Blanc
          data={data}
          isVisible={isVisibleBlank}
        />
      </Fragment>
    );
  }
}

App.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  inputValidate: PropTypes.func.isRequired,
  hasErrors: PropTypes.bool.isRequired,
  loadData: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
  clearData: PropTypes.func.isRequired,
};
