import { Typography, CardContent, Card, CardMedia, CardActions, Button, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styles from '../styles/main.module.css';
import { Environment } from '../environment';
import Image from 'next/image';

const CompanyCard = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      alt="halmae cartoon"
      height="210"
      src={Environment.imageDict['info']}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div" paragraph={true}>
        Fugether = Future + Together
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        팀 소개
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph={true}>
        퓨게더는 AI 연구/개발 전문성을 가진 팀원들로 구성된 팀입니다. 
        온라인 마케팅 플랫폼 개발을 하고 있으며, 향후 오프라인 위치기반 마케팅 시장 진출을 목표로 하고 있습니다.
        2022 예비창업패키지에 선정되었습니다. 
        온라인 쇼핑몰의 할인 정보 제공 장치 및 방법 (출원번호: 10-2022-0101259) 으로 출원 완료 상태입니다.
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        제품 소개
      </Typography>
      <Typography variant="body2" color="text.secondary" paragraph={true}>
        "온라인 쇼핑몰의 게릴라성 할인 정보 알림과 예측" 서비스를 제공하고 있습니다. 
        온라인 쇼핑몰에서의 매일 달라지는 (1) 신용카드 혜택과 (2) 단기 할인 이벤트 정보를 제공하고, 
        혜택 예측 정보를 제공합니다. 
        현재 신용카드 할인정보를 제공하는 웹 MVP를 런칭하였으며, 연말 앱 런칭을 앞두고 있습니다.
      </Typography>
      <Typography gutterBottom variant="h6" component="div">
        앱 화면 (개발 중)
      </Typography>
      <StandardImageList />
    </CardContent>
    <CardActions>
      <Button
        size="small"
        sx={{textTransform: 'none'}}
        href={`mailto:fugether2022@gmail.com`}
      >
        의견 보내기
      </Button>
    </CardActions>
  </Card>
);

const StandardImageList = () => {
  return (
    <ImageList cols={4} >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <Image
            src={item.img}
            alt={item.title}
            loading="lazy"
            width='100%'
            height='100%'
          />
        </ImageListItem>
        ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: Environment.imageDict['screen01'],
    title: 'halmae_app_01',
  },
  {
    img: Environment.imageDict['screen02'],
    title: 'halmae_app_02',
  },
  {
    img: Environment.imageDict['screen03'],
    title: 'halmae_app_03',
  },
  {
    img: Environment.imageDict['screen04'],
    title: 'halmae_app_04',
  },
];

const Info = () => {
  return (
    <Box display='flex' width='100%'>
      <Box m='auto'>
        <div className={styles.container}>
          <CompanyCard />
        </div>
      </Box>
    </Box>
  );
};

export default Info;
