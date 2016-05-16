import React, { Component, PropTypes } from 'react';
import Sidebar from '../sidebar';
import './index.less';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    isInfoOpen: false,
  };

  openInfo = () => this.setState({ isInfoOpen: true });

  renderInfoPopOver() {
    return (
      <div className="app__pop-over">
        <p>This website uses trademarks and/or copyrights owned by Paizo Inc., which are used under Paizo's Community Use Policy. We are expressly prohibited from charging you to use or access this content. This website is not published, endorsed, or specifically approved by Paizo Inc.</p>
        <p>For more information about Paizo's Community Use Policy, please visit <a href="https://www.paizo.com/communityuse">paizo.com/communityuse</a>. For more information about Paizo Inc. and Paizo products, please visit <a href="https://www.paizo.com">paizo.com</a>.</p>
      </div>
    );
  }

  render() {
    return (
      <div className={`app ${this.state.isInfoOpen ? 'app--pop-over-open' : ''}`}>
        <Sidebar openInfo={this.openInfo} />
        <div className="app__content">
          {this.props.children}
        </div>
        {this.state.isInfoOpen ? this.renderInfoPopOver() : null}
      </div>
    );
  }
}
