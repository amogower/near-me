import React, { Fragment } from 'react';
import shortid from 'shortid';

import { groupsType } from '../../prop-types';

const Places = ({ groups }) => (
  <div>
    {groups.map(({ items, type }) => (
      <Fragment
        key={shortid.generate()}
      >
        <h1>
          {type}
        </h1>
        <ul>
          {items.map(({ venue: { categories, location: { address, postalCode }, name } }) => (
            <li
              key={shortid.generate()}
            >
              <h3>
                {name}
              </h3>
              <p>
                {
                  (!!address || !!postalCode)
                  && `${address ? postalCode ? `${address}, ${postalCode}` : address : ''}`
                }
              </p>
              <p>
                Categories:
              </p>
              <ul>
                {categories.map(({ shortName }) => (
                  <li>
                    {shortName}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Fragment>
    ))}
  </div>
);

Places.propTypes = {
  groups: groupsType.isRequired,
};

export default Places;
