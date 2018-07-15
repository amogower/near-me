import React, { PureComponent } from 'react';
// import { css } from 'aphrodite/no-important';
import PlacesAutocomplete, {
  geocodeByAddress,
  // geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';

// import styles from './styles';

import AutoCompleteSuggestion from './AutoCompleteSuggestion';

export default class SearchBar extends PureComponent {
  state = {
    location: '',
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
    } catch (err) {
      throw new Error(err);
    }
  }

  renderSuggestions = props => <AutoCompleteSuggestion {...props} />

  render() {
    const { location } = this.state;
    return (
      <PlacesAutocomplete
        value={location}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {this.renderSuggestions}
      </PlacesAutocomplete>
    );
  }
}
