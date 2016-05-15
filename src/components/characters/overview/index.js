import { Component } from 'react';
import InformationPanel from '../../information-panel';
import LabelledInput from '../../labelled-input';
import WizardPanel from '../../wizard-panel';
import './index.less';

export default class CharacterCreatorOverview extends Component {
  state = {
    character: {
      background: 'Regent',
      name: 'Leanansidhe',
      race: 'Half-Elf',
    },
  };

  openInfo = () => this.setState({ isInfoOpen: true })

  updateBackground = (event) => this.setState({
    character: {
      ...this.state.character,
      background: event.target.value,
    },
  });

  updateName = (event) => this.setState({
    character: {
      ...this.state.character,
      name: event.target.value,
    },
  });

  updateRace = (event) => this.setState({
    character: {
      ...this.state.character,
      race: event.target.value,
    },
  });

  render() {
    return (
      <div className="character-creator">
        <WizardPanel>
          <LabelledInput onChange={this.updateName} label="Name" size={2} value={this.state.character.name} />
          <LabelledInput onChange={this.updateRace} label="Race" value={this.state.character.race} />
          <LabelledInput onChange={this.updateBackground} label="Background" value={this.state.character.background} />
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
