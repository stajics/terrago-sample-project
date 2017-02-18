import React, { PropTypes, Component } from 'react';
// components
// styles
import css from './ThemeSwithcer.css';

const propTypes = {
  theme: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

class ThemeSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = { state: true };
  }

  render() {
    const { theme, onChange } = this.props;
    return (
      <div className={css.themeSwitcher} style={{ borderColor: theme }}>
        <option
          onClick={() => { onChange('green'); }}
          style={{
            backgroundColor: theme === 'green' ? 'green' : 'transparent',
            color: theme === 'green' ? 'white' : 'red',
          }}
        >
          Green
        </option>
        <option
          onClick={() => { onChange('red'); }}
          style={{
            backgroundColor: theme === 'red' ? 'red' : 'transparent',
            color: theme === 'red' ? 'white' : 'green',
          }}
        >
          Red
        </option>
      </div>
    );
  }
}

ThemeSwitcher.propTypes = propTypes;

export default ThemeSwitcher;
