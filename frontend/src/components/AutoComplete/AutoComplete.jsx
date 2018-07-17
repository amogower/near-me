import React, { PureComponent } from 'react';
import { func } from 'prop-types';
import { css } from 'aphrodite/no-important';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import styles from './styles';

import AutoCompleteInput from './AutoCompleteInput';
import AutoCompleteSuggestion from './AutoCompleteSuggestion';

export default class SearchBar extends PureComponent {
  static propTypes = {
    onBlur: func.isRequired,
    onFocus: func.isRequired,
  }

  state = {
    location: '',
  }

  bindInput = (input) => {
    this.input = input;
  }

  handleChange = (location) => {
    this.setState({ location });
  }

  handleSelect = async (address) => {
    const { onLocationSelected } = this.props;
    try {
      const results = await geocodeByAddress(address);
      const latLng = await getLatLng(results[0]);
      onLocationSelected(latLng);
      this.input.blur();
    } catch (err) {
      throw new Error(err);
    }
  }

  renderSuggestions = props => <AutoCompleteSuggestion {...props} />

  render() {
    const { onBlur, onFocus } = this.props;
    const { location } = this.state;
    return (
      <PlacesAutocomplete
        value={location}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={css(styles.autoCompleteContainer)}>
            <AutoCompleteInput
              bindInput={this.bindInput}
              getInputProps={getInputProps}
              onBlur={onBlur}
              onFocus={onFocus}
            />
            <div className="autocomplete-dropdown-container">
              {
                loading
                && (
                  <div>
                    Loading...
                  </div>
                )
              }
              {
                suggestions.map(suggestion => (
                  <AutoCompleteSuggestion
                    getSuggestionItemProps={getSuggestionItemProps}
                    suggestion={suggestion}
                  />
                ))
              }
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    );
  }
}
