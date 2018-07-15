import React from 'react';
import { hydrate } from 'react-dom';
import { StyleSheet } from 'aphrodite';

import App from './App';

const aphroditeStyles = window.APHRODITE_STYLES;
delete window.APHRODITE_STYLES;

StyleSheet.rehydrate(aphroditeStyles);

hydrate(
  <App />,
  document.querySelector('#app'),
);
