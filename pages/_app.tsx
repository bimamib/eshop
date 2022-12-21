import React, { Fragment } from 'react';
import Router from 'next/router';
import {wrapper} from '../store';

// global styles
import '../assets/css/styles.scss';

import type { AppProps } from 'next/app';

import * as gtag from './../utils/gtag';

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

// export default (MyApp);
export default wrapper.withRedux(MyApp);
