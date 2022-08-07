import styles from './index.module.css';

import React from 'react';

const itemList = (props) => {
  const { removeItem, state } = props;
  return (
    <div className={styles.itemList}>
      {state.personList.map((person) => {
        return (
          <section className={styles.item} key={person.id} data-id={person.id}>
            <h3>{person.personName}</h3>
            <button onClick={(e) => removeItem(e)}>remove</button>
          </section>
        );
      })}
    </div>
  );
};

export default itemList;
