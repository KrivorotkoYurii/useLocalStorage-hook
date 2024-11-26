import React from 'react';
import './styles/main.scss';
import styles from './styles/App.module.scss';
import { useLocalStorage } from './hooks/useLocalStorage';

export const App: React.FC = () => {
  const [ids, setIds] = useLocalStorage<number[]>('ids', []);

  const addValue = (value: number) => {
    setIds([...ids, value]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.firstDiv}>
        <div className={styles.buttons}>
          {[1, 2, 3, 4, 5].map(number => (
            <button
              key={number}
              onClick={() => addValue(number)}
              className={styles.button}
            >
              {number}
            </button>
          ))}
        </div>

        <div className={styles.results}>{ids.join(', ')}</div>

        <button className={styles.button} onClick={() => setIds([])}>
          Reset
        </button>
      </div>
    </section>
  );
};
