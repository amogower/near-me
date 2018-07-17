/* eslint-disable jsx-a11y/label-has-for */

import React from 'react';
import { func } from 'prop-types';
import { css } from 'aphrodite/no-important';

import styles from './styles';

const AutoCompleteInput = ({ bindInput, getInputProps, onBlur, onFocus }) => (
  <span className={css(styles.input)}>
    <input
      {...getInputProps({
        placeholder: 'Search places ...',
        id: 'autoComplete',
        className: css(styles.inputField),
        onBlur,
        onFocus,
        ref: bindInput,
      })}
    />
  </span>
);

AutoCompleteInput.propTypes = {
  bindInput: func.isRequired,
  getInputProps: func.isRequired,
  onBlur: func.isRequired,
  onFocus: func.isRequired,
};

export default AutoCompleteInput;
