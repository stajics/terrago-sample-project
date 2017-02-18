import React, { PropTypes } from 'react';
// components
// styles
import css from './Columns.css';
// assets

const propTypes = {
  height: PropTypes.string.isRequired,
  numberOfRows: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

const Columns = ({ height, numberOfRows, backgroundColor }) => {
  const columns = [];
  for (let i = 0; i < numberOfRows; i += 1) {
    columns.push(<div key={i} className="column" style={{ height, backgroundColor }} />);
  }
  return (
    <div className={css.columns}>
      {columns}
    </div>
  );
};

Columns.propTypes = propTypes;

export default Columns;
