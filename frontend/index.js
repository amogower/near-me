const express = require('express');
const path = require('path');
const helmet = require('helmet');

const renderAppToString = require('./dist/server');
const template = require('./dist/template');

const app = express();

app.use(helmet());

app.use('/dist', express.static(path.resolve(__dirname, 'dist')));

app.get('/', (req, res) => {
  const content = renderAppToString();
  const response = template('Home | Near Me', content);

  res.send(response);
});

app.listen(process.env.PORT || 3000);
