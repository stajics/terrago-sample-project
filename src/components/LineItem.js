import React, { PropTypes } from 'react';
// components
// styles
import css from './LineItem.css';
// assets
import icon from '../assets/icons/icon.svg';
import iconRed from '../assets/icons/icon_red.svg';

const propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
};

const LineItem = ({ title, subtitle, theme }) => (
  <div className={css.lineItem}>
    <div className="left-items">
      <img src={theme === 'green' ? icon : iconRed} alt="icon" />
      <div className="title-subtitle">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </div>
    <div>A detail</div>
  </div>
);

LineItem.propTypes = propTypes;

export default LineItem;
