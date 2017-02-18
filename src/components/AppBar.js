import React, { PropTypes, Component } from 'react';
// components
// styles
import css from './AppBar.css';
// assets
import myAppGreen from '../assets/images/my_app_green.png';
import myAppRed from '../assets/images/my_app_red.png';
import face from '../assets/images/face.jpg';

const propTypes = {
  theme: PropTypes.string.isRequired,
};

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { state: true };
  }

  render() {
    const { theme } = this.props;
    return (
      <div className={css.appBar}>
        <img src={myAppGreen} alt="My app" height="32" width="120" />
        <div className="avatar-wrapper">
          <div className="avatar" style={{ backgroundImage: `url(${face})` }} />
        </div>
      </div>
    );
  }
}

AppBar.propTypes = propTypes;

export default AppBar;
