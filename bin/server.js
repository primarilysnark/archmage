/* eslint no-console: 0 */
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import React from 'react';
import compression from 'compression';
import express from 'express';
import path from 'path';
import routes from '../src/routes';

const PORT = process.env.port || 8080;
const app = express();

function renderPage(appHtml) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Archmage</title>
        <link href="https://necolas.github.io/normalize.css/4.1.1/normalize.css" rel="stylesheet" type="text/css">
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="/dist/styles.css">
      </head>
      <body>
        <div id="app">${appHtml}</div>
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
   `;
}

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  match({
    location: req.url,
    routes,
  }, (err, redirect, props) => {
    if (err) {
      res.status(500)
        .send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props} />);

      res.send(renderPage(appHtml));
    } else {
      res.status(404)
        .send('Not Found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Production express server running at localhost:${PORT}`);
});
