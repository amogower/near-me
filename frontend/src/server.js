import React from 'react';
import { renderToString } from 'react-dom/server';
import { StyleSheetServer } from 'aphrodite';

import App from './App';

module.exports = () => StyleSheetServer.renderStatic(() => renderToString(<App />));
