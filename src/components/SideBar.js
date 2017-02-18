import React, { PropTypes, Component } from 'react';
// components
// styles
import css from './SideBar.css';
// assets

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
      <div className={css.sideBar}>
        AAA
      </div>
    );
  }
}

AppBar.propTypes = propTypes;

export default AppBar;
