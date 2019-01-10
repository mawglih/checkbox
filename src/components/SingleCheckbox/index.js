import React, { Fragment } from 'react';
import styles from './single.css';

export default ({
  name,
  value,
  onChange,
  checked,
}) => (
    <Fragment>
      <label className={styles.container}>
        {name}
        <input
          type="checkbox"
          className={styles.checkbox}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span
          className={styles.checkmark}
        />
      </label>
    </Fragment>
  );
