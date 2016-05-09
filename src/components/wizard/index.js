import { Component, PropTypes } from 'react';
import './index.less';

export default class Wizard extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    currentStep: PropTypes.number.isRequired,
    steps: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className="wizard">
        <ol className="wizard__progress-bar">
          {this.props.steps.map((step, index) =>
            <li className={`wizard__progress-bar__step ${index === this.props.currentStep ? 'wizard__progress-bar__step--active' : ''}`} key={index}>{step.label}</li>
          )}
        </ol>
        <div className="wizard__content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
