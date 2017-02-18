import React, { PropTypes, Component } from 'react';
// components
import ThemeSwitcher from './ThemeSwithcer';
// styles
import css from './AppBar.css';
// assets
import myAppGreen from '../assets/images/my_app_green.png';
import myAppRed from '../assets/images/my_app_red.png';

import face from '../assets/images/face.jpg';

const propTypes = {
  theme: PropTypes.string.isRequired,
  onChangeTheme: PropTypes.func.isRequired,
};

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { state: true };
  }

  render() {
    const { theme, onChangeTheme } = this.props;
    return (
      <div className={css.appBar}>
        <img src={theme === 'green' ? myAppGreen : myAppRed} alt="My app" height="32" width="120" />
        <ThemeSwitcher theme={theme} onChange={onChangeTheme} />
        <div className="avatar-wrapper">
          <div className="avatar" style={{ backgroundImage: `url(${face})` }} />
        </div>
      </div>
    );
  }
}

AppBar.propTypes = propTypes;

export default AppBar;
