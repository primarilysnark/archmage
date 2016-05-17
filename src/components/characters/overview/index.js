import InformationPanel from '../../information-panel';
import LabelledInput from '../../labelled-input';
import React, { Component, PropTypes } from 'react';
import WizardPanel from '../../wizard-panel';
import './index.less';

export default class CharacterCreatorOverview extends Component {
  static propTypes = {
    creator: PropTypes.shape({
      background: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      race: PropTypes.string.isRequired,
    }).isRequired,
    setCreatorField: PropTypes.func.isRequired,
  };

  updateBackground = (event) => this.props.setCreatorField('background', event.target.value);
  updateName = (event) => this.props.setCreatorField('name', event.target.value);
  updateRace = (event) => this.props.setCreatorField('race', event.target.value);

  render() {
    return (
      <div className="character-creator">
        <WizardPanel>
          <LabelledInput onChange={this.updateName} label="Name" size={2} value={this.props.creator.name} />
          <LabelledInput onChange={this.updateRace} label="Race" value={this.props.creator.race} />
          <LabelledInput onChange={this.updateBackground} label="Background" value={this.props.creator.background} />
        </WizardPanel>
        <WizardPanel>
          <InformationPanel size={2} />
          <InformationPanel />
          <InformationPanel />
        </WizardPanel>
      </div>
    );
  }
}
