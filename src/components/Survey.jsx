import React, { Component } from 'react';
import styles from '../assets/styles/main.module.css';

// https://stackoverflow.com/a/56916166
class SurveyMonkey extends Component {
  componentDidMount() {
    let el = document.createElement('script');
    el.src = 'surveymonkey.js';
    document.body.appendChild(el);
  };
  render() { return <div id='smcx-sdk'></div> };
};

const Survey = () => {
  return (
    <div className={styles.container}>
      <SurveyMonkey />
    </div>
  );
};

export default Survey;
