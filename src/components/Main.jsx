import CardList from './MuiCard';
import { useState } from 'react';
import styles from '../styles/main.module.css';
import { useFetch } from '../useFetch';
import { Environment } from '../environment';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const { data, error, inProgress } = useFetch('/api/cardbenefit');

  if (data && mainData.length === 0) {
    let mallData = [];
    for (let i in data) {
      let element = {...data[i]};
      if (Environment.exceptMall.includes(element['mall'])) {
        continue;
      };
      element['id'] = i;
      element['link'] = Environment.urlDict[element['mall']];
      mallData.push(element);
    };
    setMainData(mallData);
  };

  return (
    <main className={styles.main_section}>
      <div className={styles.container_main}>
        {mainData.length > 0 ? <CardList elements={mainData} /> : <div />}
      </div>
    </main>
  );
};

export default Main;
