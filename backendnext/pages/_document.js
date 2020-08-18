import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md logo-blue blue-sidebar-color header-blue">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument