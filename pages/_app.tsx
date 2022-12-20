import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import {wrapper} from '../store';


// global styles
// import 'swiper/swiper.scss';
// import 'rc-slider/assets/index.css';
// import 'react-rater/lib/react-rater.css';
import '../assets/css/styles.scss';
import Router from 'next/router';

import * as gtag from './../utils/gtag';
import { Fragment } from 'react';
import { wrapper } from '../store';

const isProduction = process.env.NODE_ENV === 'production';

// only events on production
if(isProduction) {
  
  // Notice how we track pageview when route is changed
  Router.events.on('routeChangeComplete', (url: string) => gtag.pageview(url));
}

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <Component {...pageProps} />
  </Fragment>
);

export default (MyApp);