import React, { PropTypes } from 'react';
// components
// styles
import css from './InputWithLabel.css';
// assets

const propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: React.PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  sufix: PropTypes.string,
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
