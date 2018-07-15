import React, { PureComponent } from 'react';

import AutoComplete from './components/AutoComplete';

export default class App extends PureComponent {
  handleLocationSelected = (latLng) => {
    console.log(latLng);
  }

  render() {
    return (
      <AutoComplete
        onLocationSelected={this.handleLocationSelected}
      />
    );
  }
}
