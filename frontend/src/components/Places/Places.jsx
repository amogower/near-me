import React, { Fragment } from 'react';
import { css } from 'aphrodite/no-important';
import shortid from 'shortid';

import styles from './styles';

import { groupsType } from '../../prop-types';

const Places = ({ groups }) => (
  <div className={css(styles.places)}>
    <div className={css(styles.group)}>
      {groups.map(({ items, type }) => (
        <Fragment
          key={shortid.generate()}
        >
          <h1>
            {type}
          </h1>
          <ul className={css(styles.list)}>
            {items.map(({ venue: { categories, location: { address, postalCode }, name } }) => {
              const hasCategories = categories.length > 0;
              return (
                <li
                  key={shortid.generate()}
                  className={css(styles.card)}
                >
                  <h3 className={css(styles.cardTitle)}>
                    {`${name}${hasCategories ? ' (' : ''}`}
                    {
                      hasCategories
                      && categories.map(({ shortName }, index) => (
                        <Fragment>
                          {index === (categories.length - 1) ? shortName : `${shortName}, `}
                        </Fragment>
                      ))
                    }
                    {
                      hasCategories
                      && ')'
                    }
                  </h3>
                  {
                    !!address
                    && (
                      <p>
                        {address ? postalCode ? `${address}, ${postalCode}` : address : ''}
                      </p>
                    )
                  }
                </li>
              );
            })}
          </ul>
        </Fragment>
      ))}
    </div>
  </div>
);

Places.propTypes = {
  groups: groupsType.isRequired,
};

export default Places;
