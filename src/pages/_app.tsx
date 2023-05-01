// import { GoogleAnalytics, usePageView } from '@src/lib/gtag';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { DefaultSeo } from 'next-seo';
import { RecoilRoot } from 'recoil';

import { nextseoConfig } from '@src/lib/utils/nextseo';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  // usePageView();
  return (
    <>
      {/* <GoogleAnalytics /> */}
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>{' '}
      <DefaultSeo {...nextseoConfig} />
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default MyApp;
