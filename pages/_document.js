import Document, { Head, Main, NextScript, Html } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta name="" content="" />
          <meta itemProp="name" content="" />
          <meta itemProp="url" content="" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <meta name="author" content="@lemmusm" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
