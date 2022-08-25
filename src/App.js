import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';
import Header from './components/Header';
import Main from './components/Main';
import Survey from './components/Survey';
import Info from './components/Info';
import Footer from './components/Footer';

// Initializing GA and Tracking Pageviews
import ReactGA from 'react-ga';
ReactGA.initialize('UA-238703857-1');
ReactGA.pageview(window.location.pathname + window.location.search);

const TabText = ({ text, subtext=null }) => (
  <>
    <Typography variant='subtitle1' sx={{fontWeight: 600}}>
      {text}
    </Typography>
    {subtext ?
      <Typography variant='subtitle2' sx={{fontWeight: 600}}>
        {subtext}
      </Typography> : null}
  </>
);

const TabTextColored = ({ text, subtext=null, color=null }) => (
  <span style={{color: color}}>
    <TabText text={text} subtext={subtext} />
  </span>
)

const RenderScreen = ({ value }) => {
  if (value === 0) {
    return <Main />;
  } else if (value === 1) {
    return <Survey />;
  } else if (value === 2) {
    return <Info />;
  } else {
    return <Typography>구현 안됨!</Typography>
  };
};

const App = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='App'>
      <Tabs
        centered
        value={value}
        onChange={handleChange}
      >
        <Tab label={<TabText text={'할인메이트'} />} />
        <Tab label={<TabTextColored
          text={'설문조사'} subtext={'(9/12까지!)'} color={'crimson'} />} />
        <Tab icon={<HelpOutlineIcon />} />
      </Tabs>
      <Header viewText={value === 0 ? true : false} />
      <RenderScreen value={value} />
      <Footer />
    </div>
  );
};

export default App;
