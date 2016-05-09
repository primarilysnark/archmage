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
  render() {
    return (
      <div className="app">
        <Sidebar />
        <div className="app__content">
          <Header />
          <Wizard steps={STEPS} currentStep={0}>
            <WizardPanel>
              <LabelledInput size={2} />
              <LabelledInput />
              <LabelledInput />
            </WizardPanel>
            <WizardPanel>
              <InformationPanel size={2} />
              <InformationPanel />
              <InformationPanel />
            </WizardPanel>
          </Wizard>
        </div>
      </div>
    );
  }
}
