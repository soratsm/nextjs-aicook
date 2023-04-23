// import { GoogleAnalytics, usePageView } from '@src/lib/gtag';
import { nextseoConfig } from '@src/commons/utils/nextseo';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';

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
