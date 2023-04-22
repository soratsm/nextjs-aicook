import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
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
