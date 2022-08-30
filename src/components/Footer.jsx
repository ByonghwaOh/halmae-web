import { Box, Typography } from '@mui/material';
import styles from '../styles/main.module.css';

const Footer = () => {
  return (
    <Box display='flex' width='100%'>
      <Box m='auto' width='100%'>
        <div className={styles.footer}>
          <Typography variant='overline'>
            © 2022. 퓨게더 Co. all rights reserved.
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;
