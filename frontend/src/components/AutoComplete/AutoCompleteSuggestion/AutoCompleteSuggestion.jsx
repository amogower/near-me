import React from 'react';
import { func } from 'prop-types';
import { css } from 'aphrodite/no-important';

import { suggestionType } from '../../../prop-types';
import styles from './styles';

const AutoCompleteSuggestion = ({ getSuggestionItemProps, suggestion }) => (
  <div
    {...getSuggestionItemProps(suggestion, {
      className: css(styles.suggestion, suggestion.active && styles.suggestion__active),
    })}
  >
    <span className={css(styles.suggestionInner)}>
      {suggestion.description}
    </span>
  </div>
);

AutoCompleteSuggestion.propTypes = {
  getSuggestionItemProps: func.isRequired,
  suggestion: suggestionType.isRequired,
};

export default AutoCompleteSuggestion;
