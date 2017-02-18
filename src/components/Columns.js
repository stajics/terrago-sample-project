import React, { PropTypes } from 'react';
// components
// styles
import css from './Columns.css';
// assets

const propTypes = {
  height: PropTypes.string.isRequired,
  numberOfColumns: PropTypes.number.isRequired,
  theme: PropTypes.string.isRequired,
};

const Columns = ({ height, numberOfColumns, theme }) => {
  const columns = [];
  for (let i = 0; i < numberOfColumns; i += 1) {
    columns.push(<div key={i} className="column" style={{ height, backgroundColor: theme }} />);
  }
  return (
    <div className={css.columns}>
      {columns}
    </div>
  );
};

Columns.propTypes = propTypes;

export default Columns;
