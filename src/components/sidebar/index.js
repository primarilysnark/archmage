import { Component } from 'react';
import './index.less';

export default class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <a className="sidebar__option sidebar__option--primary">
          Archmage
        </a>
        <a className="sidebar__option">
          Option
        </a>
        <a className="sidebar__option">
          Option
        </a>
        <a className="sidebar__option">
          Option
        </a>
        <a className="sidebar__option">
          Option
        </a>
        <a className="sidebar__option sidebar__option--base">
          Info
        </a>
      </nav>
    );
  }
}
