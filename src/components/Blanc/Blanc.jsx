import PropTypes from 'prop-types';
import React from 'react';
import './Blanc.sass';
import groupFields from '../../constants/groupFields';

const Blanc = ({ isVisible, data }) => (
  isVisible
    ? (
      <div className="container-blank">
        {groupFields.map(item => item.fields.map(
          i => <p className="container-blank__label">{i.title}: {data[i.name].value}</p>,
        ))}
      </div>

    ) : (
      <p className="hint">Заполните форму!</p>
    )
);
Blanc.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
  isVisible: PropTypes.bool.isRequired,
};
export default Blanc;
