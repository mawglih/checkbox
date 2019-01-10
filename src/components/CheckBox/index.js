import React, { Component } from 'react';
// import cn from 'classnames';
// import without from 'lodash/without';
// import castArray from 'lodash/castArray';
import CheckboxGroup from 'components/CheckboxGroup';
import styles from './checkbox.css';

const Status = [
  { radio: 'Single', 
    checked: [
      { check: 'Never married' },
      { check: 'Divorced' },
      { check: 'Widow\'er' },
    ],
  },
  { radio: 'In a Relationship', checked: [{ check: 'Open' }],},
  { radio: 'Married', checked:[{ check: 'Open' }]},
  { radio: 'Civil Union', checked: [{ check: 'Open' }] },
  { radio: 'Domestic Partnership', checked: [{ check: 'Open' }] },
  { radio: 'Separated' },
];

class Searching extends Component {
  state = {
    checked: false,
  }

  handleChange =  (e) => {
    // e.target.checked ? castArray().concat(e.target.value)
    //   : without(castArray(), e.target.value)
    console.log(e.target.value, e.target.checked);
  }
  handleChange2 = (e) => {
    // this.setState({ checked: true });
    console.log(e.target.value, e.target.checked)
  }
  
  render() {
    const {
      checked,
    } = this.state;
    console.log('status of checked: ', checked);
    return (
      <div className={styles.container}>
        <form className={styles.form}>
          {
            Status.map(el => (
              <div
                key={el.radio}
              > 
                <CheckboxGroup
                  obj={el}
                  handleChange={this.handleChange}
                />
              </div>
            ))
          }
        </form>
      </div>
    );
  }
}

export default Searching;
