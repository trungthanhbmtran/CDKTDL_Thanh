import React, { Component } from "react";
import Layout from '../components/Layout/Layout'
import _ from 'lodash';
import Cookies from 'next-cookies'; 



export class Index extends Component {
  static async getInitialProps(ctx) {
    return {
      cookies: Cookies(ctx) || ''
    }
  }
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
        <Layout {...this.props}> 
           <iframe width="560" height="850" src="https://www.youtube.com/embed/tpgzpKp4Ge0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Layout>
    );
  }
}

export default Index;
