import React, { PropTypes } from 'react';
// components
// styles
import css from './InputWithLabel.css';
// assets

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  sufix: PropTypes.number,
};

const defaultProps = {
  sufix: '',
};

const InputWithLabel = ({ label, sufix, onChange, value }) => (
  <div className={css.inputWithLabel}>
    <label htmlFor={label}>{label}</label>
    <input id={label} value={value} onChange={onChange} />
    <span>{sufix}</span>
  </div>
);

InputWithLabel.propTypes = propTypes;
InputWithLabel.defaultProps = defaultProps;

export default InputWithLabel;
