/* eslint no-console: 0 */
import compression from 'compression';
import express from 'express';
import path from 'path';

const PORT = process.env.port || 8080;
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('*', (req, res) => {
  res.sendFile('index.html', {
    root: path.join(__dirname, '..', 'public'),
  });
});

app.listen(PORT, () => {
  console.log(`Production express server running at localhost:${PORT}`);
});
