import React, { PropTypes, Component } from 'react';
// components
import LineItem from './LineItem';
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
        <LineItem title="long title Line item title" subtitle="Subheader here" theme={theme} />
        <LineItem title="Line item title" subtitle="Long Subheader Subheader here" theme={theme} />
        <LineItem title="Line item title" subtitle="Subheader here" theme={theme} />
      </div>
    );
  }
}

AppBar.propTypes = propTypes;

export default AppBar;
