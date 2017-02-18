import React, { PropTypes } from 'react';
// components
// styles
import css from './FixedItem.css';
// assets
import screw from '../assets/icons/screw.svg';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

const LineItem = () => (
  <div className={css.fixedItem}>
    <img src={screw} alt="icon" />
    <p className="text">
      Fixed to the bottom
    </p>
    <img src={screw} alt="icon" />
  </div>
);

LineItem.propTypes = propTypes;

export default LineItem;
