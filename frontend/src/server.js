import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './components/app';

module.exports = () => renderToString(<App />);
