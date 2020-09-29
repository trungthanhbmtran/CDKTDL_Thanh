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
          {/* google font */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
            rel="stylesheet"
            type="text/css"
          />
          {/* icons */}
          <link
            href="../fonts/simple-line-icons/simple-line-icons.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../fonts/font-awesome/css/font-awesome.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../fonts/material-design-icons/material-icon.css"
            rel="stylesheet"
            type="text/css"
          />
          	<link href="../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.css" rel="stylesheet"/>
          {/*bootstrap */}
          <link
            href="../assets/plugins/bootstrap/css/bootstrap.min.css"
            rel="stylesheet"
            type="text/css"
          />
          	<link href="../assets/plugins/summernote/summernote.css" rel="stylesheet"></link>
          {/*inbox style */}
          <link href="../assets/css/pages/inbox.min.css" rel="stylesheet" type="text/css" />
          {/* Material Design Lite CSS */}
          <link
            rel="stylesheet"
            href="../assets/plugins/material/material.min.css"
          />
          <link rel="stylesheet" href="../assets/css/material_style.css" />
          {/* Theme Styles */}
          <link
            href="../assets/css/theme/light/theme_style.css"
            rel="stylesheet"
            id="rt_style_components"
            type="text/css"
          />
          <link
            href="../assets/css/theme/light/style.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../assets/css/plugins.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../assets/css/responsive.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="../assets/css/theme/light/theme-color.css"
            rel="stylesheet"
            type="text/css"
          />
          {/* dropzone */}
          <link
            href="../assets/plugins/dropzone/dropzone.css"
            rel="stylesheet"
            media="screen"
          />
          {/* Date Time item CSS */}
          <link
            rel="stylesheet"
            href="../assets/plugins/flatpicker/css/flatpickr.min.css"
          />
          {/* favicon */}
          <link rel="shortcut icon" href="../assets/img/favicon.ico" />
        </Head>
        <body className="page-header-fixed sidemenu-closed-hidelogo page-content-white page-md logo-blue blue-sidebar-color header-blue">
          <Main />
          <NextScript />
        <script src="../assets/plugins/jquery/jquery.min.js"></script>
        <script src="../assets/plugins/popper/popper.js"></script>
        <script src="../assets/plugins/jquery-blockui/jquery.blockui.min.js"></script>
        <script src="../assets/plugins/jquery-slimscroll/jquery.slimscroll.js"></script>

        <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="../assets/plugins/bootstrap-switch/js/bootstrap-switch.min.js"></script>

        <script src="../assets/plugins/datatables/jquery.dataTables.min.js"></script>
        <script src="../assets/plugins/datatables/plugins/bootstrap/dataTables.bootstrap4.min.js"></script>
        <script src="../assets/js/pages/table/table_data.js"></script>
      
        <script src="../assets/js/app.js"></script>
        <script src="../assets/js/layout.js"></script>
        <script src="../assets/js/theme-color.js"></script>

        <script src="../assets/plugins/material/material.min.js"></script>
        <script src="../assets/js/pages/material-select/getmdl-select.js"></script>
        <script src="../assets/plugins/flatpicker/js/flatpicker.min.js"></script>
        <script src="../assets/js/pages/date-time/date-time.init.js"></script>

        <script src="../assets/plugins/dropzone/dropzone.js"></script>
        <script src="../assets/plugins/dropzone/dropzone-call.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument