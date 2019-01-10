import React, { Component } from 'react';
import SingleCheckbox from 'components/SingleCheckbox';
import cn from 'classnames';
import styles from './group.css';

export class CheckboxGroup extends Component {

  handleChange2 = (e) => {
    console.log(e);
  }
  render() {
    const {
      handleChange,
      obj : {
        radio,
        checked,
      }
    } = this.props;
    return (
      <div className={styles.checkDiv}>
        <SingleCheckbox
          name={radio}
          onChange={handleChange}
          value={radio}
          // checked={checked}
        />
        {checked ? (
          checked.map(item => (
            <div className={cn(
              styles.box2,
              )
              }
              key={encodeURIComponent(item.check)}
            >
              <SingleCheckbox
                name={item.check}
                onChange={e => this.handleChange2(e)}
                value={item.check}
              />
            </div>
          ))
        ) : null }
      </div>
    )
  }
}

export default CheckboxGroup;
