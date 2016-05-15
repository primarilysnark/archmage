import { Component, PropTypes } from 'react';
import { IndexLink } from 'react-router';
import './index.less';

export default class CharacterHeader extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    params: PropTypes.shape({
      action: PropTypes.string,
    }).isRequired,
  };

  renderCharacterAction() {
    return (
      <a className="character-header__header__navigation__segment character-header__header__navigation__segment--active">Create a Character</a>
    );
  }

  render() {
    return (
      <div className="character-header">
        <header className="character-header__header">
          <nav className="character-header__header__navigation">
            <IndexLink to="/characters" className="character-header__header__navigation__segment">Characters</IndexLink>
            {this.props.params.action != null ? this.renderCharacterAction() : null}
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}
