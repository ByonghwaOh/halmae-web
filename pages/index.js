import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { Typography } from '@mui/material';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Survey from '../src/components/Survey';
import Info from '../src/components/Info';
import Footer from '../src/components/Footer';
import { NextSeo } from 'next-seo';
import { Environment } from '../src/environment';

// Initializing GA and Tracking Pageviews (Universal)
//import ReactGA from 'react-ga';
//if (typeof window !== "undefined") {
//  ReactGA.initialize('UA-238703857-1');
//  ReactGA.pageview(window.location.pathname + window.location.search);
//};

// netlify build option
// https://answers.netlify.com/t/deployment-of-nextjs-website-page-not-found/28870

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

const HomePage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <NextSeo
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
        additionalMetaTags={[{
          name: 'keywords',
          content: Environment.keywords,
        }]}
      />
      <Tabs
        centered
        value={value}
        onChange={handleChange}
      >
        <Tab label={<TabText text={'할인메이트'} />} />
        <Tab label={<TabTextColored
          text={'설문조사'} subtext={'(스벅쿠폰증정!)'} color={'crimson'} />} />
        <Tab icon={<HelpOutlineIcon />} />
      </Tabs>
      <Header viewText={value === 0 ? true : false} />
      <RenderScreen value={value} />
      <Footer />
    </div>
  );
};

export default HomePage;
