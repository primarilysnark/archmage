import { Component } from 'react';
import Header from '../header';
import InformationPanel from '../information-panel';
import LabelledInput from '../labelled-input';
import Sidebar from '../sidebar';
import Wizard from '../wizard';
import WizardPanel from '../wizard-panel';
import './index.less';

const STEPS = [
  {
    label: 'Overview',
    href: 'overview',
  },
  {
    label: 'Ability Scores',
    href: 'abilityScores',
  },
  {
    label: 'Classes',
    href: 'classes',
  },
  {
    label: 'Combat & Equipment',
    href: 'overview',
  },
  {
    label: 'Review',
    href: 'Review',
  },
];

export default class App extends Component {
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
      <div className={`app ${this.state.isInfoOpen ? 'app--pop-over-open' : ''}`}>
        <Sidebar openInfo={this.openInfo} />
        <div className="app__content">
          <Header />
          <Wizard steps={STEPS} currentStep={0}>
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
          </Wizard>
        </div>
        {!this.state.isInfoOpen ? null :
          <div className="app__pop-over">
            <p>This website uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Paizo Inc. For more information about Paizo's Community Use Policy, please visit <a href="https://www.paizo.com/communityuse">paizo.com/communityuse</a>. For more information about Paizo Inc. and Paizo products, please visit <a href="https://www.paizo.com">paizo.com</a>.</p>
          </div>
        }
      </div>
    );
  }
}
