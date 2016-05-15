import { Component, PropTypes } from 'react';
import Wizard from '../../wizard';
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

export default class CharacterCreator extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Wizard steps={STEPS} currentStep={0}>
        {this.props.children}
      </Wizard>
    );
  }
}
