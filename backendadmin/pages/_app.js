import Router from "next/router";
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  return (
    <>
    <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta name="description" content="Responsive Admin Template" />
          <meta name="author" content="SmartUniversity" />
          <title>CDKTDL</title>
    </Head>
      {loading ? (
        <h1>Loading...Wait a minute . Create by Thanh Tran</h1>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}
