import { Component, PropTypes } from 'react';
import Header from '../header';
import Wizard from '../wizard';
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

export default class CharacterOverview extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div className="character-overview">
        <Header />
        <Wizard steps={STEPS} currentStep={0}>
          {this.props.children}
        </Wizard>
      </div>
    );
  }
}
