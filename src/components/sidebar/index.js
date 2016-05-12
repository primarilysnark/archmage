import { Component, PropTypes } from 'react';
import './index.less';

export default class Sidebar extends Component {
  static propTypes = {
    openInfo: PropTypes.func.isRequired,
  };

  render() {
    return (
      <nav className="sidebar">
        <a className="sidebar__option sidebar__option--primary">Archmage</a>
        <a className="sidebar__option">Option</a>
        <a className="sidebar__option">Option</a>
        <a className="sidebar__option">Option</a>
        <a className="sidebar__option">Option</a>
        <button className="sidebar__option sidebar__option--base" onClick={this.props.openInfo}>Info</button>
      </nav>
    );
  }
}
