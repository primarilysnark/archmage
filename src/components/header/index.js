import { Component } from 'react';
import './index.less';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="header__navigation">
          <a className="header__navigation__segment">Characters</a>
          <a className="header__navigation__segment header__navigation__segment--active">Create a Character</a>
        </nav>
      </header>
    );
  }
}
