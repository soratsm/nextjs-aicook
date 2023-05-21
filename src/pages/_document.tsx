import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        {/* Robotoフォント読み込み */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
        {/* Noto Sans JPフォント読み込み */}
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap'
        />
        <body>
          <noscript>
            このサイトはJavascriptで動作しています。Javascriptを有効にして下さい。
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
