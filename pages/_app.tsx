// import { GoogleAnalytics, usePageView } from '@src/lib/gtag';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';

const MyApp: React.FC<AppProps> = (props) => {
  const { Component, pageProps } = props;
  // usePageView();
  return (
    <>
      {/* <GoogleAnalytics /> */}
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      {/* </ChakraProvider> */}
    </>
  );
};

export default MyApp;
