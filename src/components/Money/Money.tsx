import React, { useState } from 'react';

import styles from './styles.module.css';

const initialState = [
  { id: 1, banknote: 'dollar', nominal: 100, number: 'a1234567890' },
  { id: 2, banknote: 'ruble', nominal: 50, number: 'z1234567890' },
  { id: 3, banknote: 'dollar', nominal: 99, number: 'w1234567890' },
  { id: 4, banknote: 'ruble', nominal: 80, number: 'c1234567890' },
  { id: 5, banknote: 'dollar', nominal: 42, number: 'r1234567890' },
  { id: 6, banknote: 'ruble', nominal: 65, number: 'n1234567890' },
  { id: 7, banknote: 'ruble', nominal: 44, number: 'f1234567890' },
  { id: 8, banknote: 'dollar', nominal: 2, number: 'd1234567890' },
  { id: 9, banknote: 'ruble', nominal: 11, number: 's1234567890' },
]

const Money = () => {

  const [money, setMoney] = useState(initialState);

  const filterMoney = (str: string) => {
    if (str === 'all') {
      setMoney([...initialState])
    } else {
      const filteredMoney = initialState.filter(m => m.banknote === str);
      setMoney(filteredMoney)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={() => filterMoney('all')}>all</button>
      <button onClick={() => filterMoney('ruble')}>ruble</button>
      <button onClick={() => filterMoney('dollar')}>dollar</button>
      <ul className={styles.list}>
        {money && money.map(m => (
          <li key={m.id} className={styles.listItem}>
            <span>{m.id}.</span>
            <span>{m.banknote}</span>
            <span>{m.nominal}</span>
            <span>{m.number}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Money;