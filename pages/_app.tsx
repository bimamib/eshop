import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import {wrapper} from '../store';


// global styles
// import 'swiper/swiper.scss';
// import 'rc-slider/assets/index.css';
// import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps) => (
    <Component {...pageProps} />
);

export default MyApp;