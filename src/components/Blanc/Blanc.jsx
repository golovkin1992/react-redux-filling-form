import PropTypes from 'prop-types';
import React from 'react';
import './Blanc.sass';

const Blanc = ({ isVisible, data }) => {
  const {
    trackNum,
    fio,
    adress,
    passSeries,
    passNumber,
    passIssueDate,
    passIssuingAuthority,
    passUnitCode,
  } = data;
  return (
    !isVisible
      ? (
        <p className="hint">Заполните форму!</p>
      ) : (
        <div className="container-blank">
          <p className="container-blank__label">Трек-номер: {trackNum.value}</p>
          <p className="container-blank__label">Получатель: {fio.value}</p>
          <p className="container-blank__label">Паспорт: серия {passSeries.value} номер {passNumber.value}</p>
          <p className="container-blank__label">Выдан: {passIssueDate.value} {passIssuingAuthority.value} </p>
          <p className="container-blank__label">Код подразделения: {passUnitCode.value}</p>
          <p className="container-blank__label">Адрес: {adress.value}</p>
          <p className="container-blank__label">Подпись: ________________</p>
        </div>

      )
  );
};

export default Blanc;

Blanc.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  isVisible: PropTypes.bool.isRequired,
};
