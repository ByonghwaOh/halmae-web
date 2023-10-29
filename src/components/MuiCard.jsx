import React from 'react';
import { Typography, Avatar, Stack, Box, CardContent, Card, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Environment } from '../environment';
import { useWindowDimensions } from '../utils';

const benefitColors = {
  '1%': 'darkcyan',
  '5%': 'darkblue',
  '4%': 'darkslateblue',
  '6%': 'indigo',
  '7%': 'rebeccapurple',
  '8%': 'deeppink',
  '10%': 'crimson',
};

const sortKeys = unordered => (
  Object.keys(unordered).sort().reduce((obj, key) => {
    obj[key] = unordered[key];
    return obj;
  }, {})
);

const classifyBenefit = benefitStr => {
  const matches = benefitStr.match(/([^,]+:\s*[\d]+%)/g);
  const result = {};
  if ( matches ) {
    matches.forEach(match => {
      const [key, value] = match.split(':').map(s => s.trim());
      result[value] = result[value] ? result[value] + ', ' + key : key;
    });
  };
  return sortKeys(result);
};

const RenderMall = ({ mall, slim }) => {
  const setting = Environment.widthSetting[slim ? 'slim' : 'normal'];
  return (
    <Stack direction='column' justifyContent='center' alignItems='center'>
      {/*<Image*/}
      <img
        src={Environment.iconDict[mall]}
        height={setting['mallIconWH']}
        width={setting['mallIconWH']}
        style={setting['mallIconStyle']}
        alt={mall}
      />
      <Typography
        align='center'
        sx={{fontSize: setting['mallIconCaptionSize'], fontWeight: 'medium'}}
      >
        {mall.replace(' ', '')}
      </Typography>
    </Stack>
  );
};

const RenderBenefit = ({ benefit, slim }) => {
  const classified = classifyBenefit(benefit);
  const discounts = Object.keys(classified);
  const setting = Environment.widthSetting[slim ? 'slim' : 'normal'];
  const sxTypo = {fontSize: setting['benefitFontSize'], fontWeight: 'medium'}

  if (discounts.length === 0) {
    return <Typography sx={sxTypo}>{'혜택이 없습니다!'}</Typography>
  };

  return (
    <Stack spacing={setting['benefitSpacing']}>
      {discounts.map(key =>
        <Stack
          direction='row'
          alignItems='center'
          spacing={setting['benefitPercentSpacing']}
          key={'b' + key}
        >
          <Avatar
            sx={{ bgcolor: benefitColors[key],
              height: setting['benefitPercentWH'],
              width: setting['benefitPercentWH'],
              fontSize: setting['benefitPercentFontSize'],
              fontWeight: setting['benefitPercentFontWeight'] }}
          >{key}</Avatar>
          <Typography sx={sxTypo}>
            {key === '10%' ? classified[key] + ' (일부 상품)' : classified[key]}
          </Typography>
        </Stack>
        )}
    </Stack>
  );
};

const ContentCard = ({ element, width }) => {
  const slim = width >= Environment.widthSetting['slimWidth'] ? false : true;
  const setting = Environment.widthSetting[slim ? 'slim' : 'normal'];

  return (
    <Card variant='outlined' sx={{ margin: setting['cardMargin'] }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
        <CardContent
          sx={{ width: setting['mallIconAreaWidth'],
          bgcolor: '#eeeeee' }
        }>
          <RenderMall mall={element['mall']} slim={slim} />
        </CardContent>
        <CardContent sx={{ flex: 3 }}>
          <RenderBenefit benefit={element['benefit']} slim={slim} />
        </CardContent>
        <IconButton
          aria-label='바로가기'
          sx={{ width: setting['arrowIconWidth'] }}
          onClick={() => window.open(element['link'], '_blank')}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

const CardList = ({ elements }) => {
  const { height, width } = useWindowDimensions();

  return (
    <div>
      {elements.map(element =>
        <ContentCard
          element={element}
          width={width}
          key={element['id']}
        />)}
    </div>
  );
};

export default CardList;
