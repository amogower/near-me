import React, { PureComponent } from 'react';
import { css } from 'aphrodite/no-important';
import axios from 'axios';

import styles from './styles';

import AutoComplete from './components/AutoComplete';
import Places from './components/Places';

export default class App extends PureComponent {
  state = {
    groups: [],
    isFocused: false,
  }

  handleBlur = () => {
    this.setState({ isFocused: false });
  }

  handleFocus = () => {
    this.setState({ isFocused: true });
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
    const { groups, isFocused } = this.state;
    return (
      <div className={css(styles.page)}>
        <h1 className={css(styles.header)}>
          Near Me
        </h1>
        <AutoComplete
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          onLocationSelected={this.handleLocationSelected}
        />
        {
          !isFocused
          && <Places groups={groups} />
        }
      </div>
    );
  }
}
