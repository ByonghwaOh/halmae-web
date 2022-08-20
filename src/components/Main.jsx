import DataTable from './MuiCard';
import { useState } from 'react';
import styles from '../assets/styles/main.module.css';
import { useFetch } from '../useFetch';
import { Environment } from '../environment';

const Main = () => {
  const [mainData, setMainData] = useState([]);
  const { data, error, inProgress } = useFetch(Environment.getCardURL);

  if (data && mainData.length === 0) {
    let mallData = [];
    for (let i in data) {
      let element = {...data[i]};
      element['id'] = i;
      element['link'] = Environment.urlDict[element['mall']];
      mallData.push(element);
    };
    setMainData(mallData);
  };

  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        {mainData.length > 0 ? <DataTable elements={mainData} /> : null}
      </div>
    </main>
  );
};

export default Main;
