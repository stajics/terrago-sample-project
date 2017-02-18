import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
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
      <ReactCSSTransitionGroup
        transitionName="example"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        >
        {columns}
      </ReactCSSTransitionGroup>
    </div>
  );
};

Columns.propTypes = propTypes;

export default Columns;
