import React from 'react';
import { bool, func } from 'prop-types';

import { suggestionsType } from '../../../prop-types';

const AutoCompleteSuggestion = ({
  getInputProps,
  suggestions,
  getSuggestionItemProps,
  loading,
}) => (
  <div>
    <input
      {...getInputProps({
        placeholder: 'Search places ...',
        className: 'location-search-input',
      })}
    />
    <div className="autocomplete-dropdown-container">
      {
        loading && (
          <div>
            Loading...
          </div>
        )
      }
      {suggestions.map((suggestion) => {
        const className = suggestion.active
          ? 'suggestion-item--active'
          : 'suggestion-item';
        return (
          <div
            {...getSuggestionItemProps(suggestion, {
              className,
            })}
          >
            <span>
              {suggestion.description}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

AutoCompleteSuggestion.propTypes = {
  getInputProps: func.isRequired,
  getSuggestionItemProps: func.isRequired,
  loading: bool.isRequired,
  suggestions: suggestionsType.isRequired,
};

export default AutoCompleteSuggestion;
