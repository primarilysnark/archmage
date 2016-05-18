import React, { Component, PropTypes } from 'react';
import { renderToString } from 'react-dom/server';

export default class Html extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const content = renderToString(this.props.children);

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <title>Archmage</title>
          <link href="https://necolas.github.io/normalize.css/4.1.1/normalize.css" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" type="text/css" />
          <link rel="stylesheet" href="/dist/styles.css" />
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
          <script src="/dist/bundle.js" />
        </body>
      </html>
    );
  }
}
