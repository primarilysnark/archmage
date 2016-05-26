/* eslint no-console: 0 */
import { api } from '../src/server/api';
import { renderToStaticMarkup } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import Html from './html';
import React from 'react';
import compression from 'compression';
import express from 'express';
import path from 'path';
import routes from '../src/routes';

const PORT = process.env.port || 8080;
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', api);

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
      const content = renderToStaticMarkup(
        <Html>
          <RouterContext {...props} />
        </Html>
      );

      res.status(200)
        .send(`<!DOCTYPE html>${content}`);
    } else {
      res.status(404)
        .send('Not Found');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Production express server running at localhost:${PORT}`);
});
