import React, { Component } from 'react'
import Layout from '../../components/layout'
import StaffComponent from '../../../API_CD/PageComponents/PageContent/staff/staffComponent'
import {Send_Get_RestAPI} from '../../Request/imw_request'

export class Staff extends Component {
    static async getInitialProps(ctx) {
        const res = await Send_Get_RestAPI('http://localhost:3001/staff')//them vo
        const json = await res.json();
        return {results : json , header: 'List Staff',name : 'Thanh' };
      }
    render() {
        return (
            <div>
               <Layout>
                   <StaffComponent {...this.props}/>
               </Layout>
            </div>
        )
    }
}

export default Staff
