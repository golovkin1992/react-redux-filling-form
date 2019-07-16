import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextField from './TextField';
import './Form.sass';

export default class Form extends PureComponent {
  handleClick = (e) => {
    e.preventDefault();
    const { update } = this.props;
    update();
  }

  handleResetClick = () => {
    const { reset } = this.props;
    reset();
  }

  render() {
    const {
      data: {
        trackNum,
        fio,
        adress,
        passSeries,
        passNumber,
        passIssueDate,
        passIssuingAuthority,
        passUnitCode,
      },
      inputValidate,
      submitEnabled,
      disabledInputs,
    } = this.props;
    return (
      <form>
        <div className="container">
          <div className="group">
            <p className="group__label">Параметры отправления</p>
            <TextField
              name="trackNum"
              label="Трек-номер*"
              value={trackNum.value}
              error={trackNum.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
          </div>
          <div className="group">
            <p className="group__label">Информация о получателе</p>
            <TextField
              name="fio"
              label="ФИО*"
              value={fio.value}
              error={fio.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
            <TextField
              name="adress"
              label="Адрес*"
              value={adress.value}
              error={adress.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
          </div>
          <div className="group group_pass">
            <p className="group__label">Паспортные данные получателя</p>
            <TextField
              name="passSeries"
              label="Серия паспорта:*"
              value={passSeries.value}
              error={passSeries.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
            <TextField
              name="passNumber"
              label="Номер паспорта:*"
              value={passNumber.value}
              error={passNumber.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
            <TextField
              name="passIssueDate"
              label="Дата выдачи:*"
              value={passIssueDate.value}
              error={passIssueDate.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
            <TextField
              name="passIssuingAuthority"
              label="Кем выдан*"
              value={passIssuingAuthority.value}
              error={passIssuingAuthority.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
            <TextField
              name="passUnitCode"
              label="Код подразделения*"
              value={passUnitCode.value}
              error={passUnitCode.error}
              onValidate={inputValidate}
              disabledInputs={disabledInputs}
            />
          </div>
          <button
            className="btn btn_run"
            type="submit"
            disabled={submitEnabled}
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
      </form>

    );
  }
}
Form.propTypes = {
  inputValidate: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  submitEnabled: PropTypes.bool.isRequired,
  update: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  disabledInputs: PropTypes.bool.isRequired,
};
