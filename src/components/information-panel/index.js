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
      <div className={`information-panel ${this.props.size !== 1 ? `information-panel--${this.props.size}` : ''}`}>
        <table className="information-panel__table">
          <tbody>
            <tr>
              <td className="information-panel__table__heading" data-label="Your alignment">Lawful Neutral</td>
            </tr>
            <tr>
              <td className="information-panel__table__description">
                <p>A lawful neutral character acts as law, tradition, or a personal code directs her. Order and organization are paramount. She may believe in personal order and live by a code or standard, or she may believe in order for all and favor a strong, organized government.</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
