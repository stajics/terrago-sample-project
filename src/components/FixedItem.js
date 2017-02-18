import React from 'react';
// components
// styles
import css from './FixedItem.css';
// assets
import screw from '../assets/icons/screw.svg';

const LineItem = () => (
  <div className={css.fixedItem}>
    <img src={screw} alt="icon" />
    <p className="text">
      Fixed to the bottom
    </p>
    <img src={screw} alt="icon" />
  </div>
);

export default LineItem;
