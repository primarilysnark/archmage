import { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './index.less';

export default class Sidebar extends Component {
  static propTypes = {
    openInfo: PropTypes.func.isRequired,
  };

  render() {
    return (
      <nav className="sidebar">
        <a className="sidebar__option sidebar__option--primary">Archmage</a>
        <Link activeClassName="sidebar__option--active" className="sidebar__option" to="/characters">Characters</Link>
        <a className="sidebar__option">Option</a>
        <a className="sidebar__option">Option</a>
        <a className="sidebar__option">Option</a>
        <button className="sidebar__option sidebar__option--base" onClick={this.props.openInfo}>Info</button>
      </nav>
    );
  }
}
