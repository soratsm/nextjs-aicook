// https://github.com/garmeeh/next-seo
// next-seoのdefaultConfigを設定する
// これを使うと、全てのページに共通するSEO設定を簡単にできる
// 例えば、titleTemplateを設定すると、全てのページのtitleに共通の文字列を付けることができる
// また、titleの文字列を設定すると、全てのページのtitleに共通の文字列を付けることができる
// 他にも、descriptionやcanonicalなどの設定ができる
// このファイルを作成したら、pages\_app.tsxでimportして使う

export const nextseoConfig = {
  title: process.env.NEXT_PUBLIC_TITLE,
  titleTemplate: '%s | Next.js + WordPressでブログを作る',
  description: 'Next.js + WordPressでブログを作る',
  canonical: 'https://nextjs-wordpress-blog.vercel.app/',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://nextjs-wordpress-blog.vercel.app/',
    site_name: 'Next.js + WordPressでブログを作る',
    title: 'Next.js + WordPressでブログを作る',
    description: 'Next.js + WordPressでブログを作る',
    images: [
      {
        url: 'https://nextjs-wordpress-blog.vercel.app/ogp.png',
        width: 1200,
        height: 630,
        alt: 'Next.js + WordPressでブログを作る',
      },
    ],
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};
