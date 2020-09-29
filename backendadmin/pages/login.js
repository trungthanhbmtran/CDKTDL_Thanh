import React, { Component } from 'react'
import Head from 'next/head'
import LoginComponent from '../components/login/login'


export class login extends Component {
    render() {
        return (
            <>
         <Head>
            <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&amp;subset=all" rel="stylesheet" type="text/css" />
            <link href="fonts/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="../assets/plugins/iconic/css/material-design-iconic-font.min.css"/>
            <link href="../assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href="../assets/css/pages/extra_pages.css"/>
            <link rel="shortcut icon" href="../assets/img/favicon.ico" />
         </Head>
            <LoginComponent/>
          <script src="../assets/plugins/jquery/jquery.min.js"></script>
          <script src="../assets/plugins/bootstrap/js/bootstrap.min.js"></script>
          <script src="../assets/js/pages/extra-pages/pages.js"></script>
          </>
        )
    }
}

export default login