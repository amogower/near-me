import React, { Fragment, PureComponent } from 'react';
import axios from 'axios';

import AutoComplete from './components/AutoComplete';
import Places from './components/Places';

export default class App extends PureComponent {
  state = {
    groups: [],
  }

  handleLocationSelected = async ({ lat, lng: lon }) => {
    try {
      const { data: { response: { groups } } } = await axios({
        url: 'http://localhost:3000',
        params: {
          lat,
          lon,
        },
      });
      this.setState({ groups });
    } catch (err) {
      throw new Error(err);
    }
  }

  render() {
    const { groups } = this.state;
    return (
      <Fragment>
        <AutoComplete
          onLocationSelected={this.handleLocationSelected}
        />
        <Places
          groups={groups}
        />
      </Fragment>
    );
  }
}
