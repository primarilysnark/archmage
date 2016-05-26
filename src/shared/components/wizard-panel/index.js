import React, { Component, PropTypes } from 'react';
import './index.less';

export default class WizardPanel extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="wizard-panel">
        {this.props.children}
      </div>
    );
  }
}
