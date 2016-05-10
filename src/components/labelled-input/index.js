import { Component, PropTypes } from 'react';
import './index.less';

export default class InformationPanel extends Component {
  static propTypes = {
    size: PropTypes.number,
  };

  static defaultPropTypes = {
    size: 1,
  };

  render() {
    return (
      <div className={`labelled-input ${this.props.size !== 1 ? `labelled-input--${this.props.size}` : ''}`}>
        <label className="labelled-input__label" data-label="Character Name">
          <input className="labelled-input__label__input" name="characterName" type="text" defaultValue="Leanansidhe" />
        </label>
      </div>
    );
  }
}
