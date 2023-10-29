import ReactStoreBadges from 'react-store-badges';
import { Environment } from '../environment';

const StoreBadge = ({ width=200, height=50 }) => (
  <ReactStoreBadges
    platform={'android'}
    url={Environment.appUrl}
    locale={'ko-kr'}
    width={width}
    height={height}
    target={'_blank'}
  />
);

export default StoreBadge;
