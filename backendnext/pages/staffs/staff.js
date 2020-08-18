import React, { Component } from 'react'
import Index from '../index'
import ContentStaff from '../../components/ContainerComponents/staff/ContentStaff'
import {Send_Get_RestAPI} from '../../Request/imw_request'
import LayoutPage from '../../components/ContainerComponents/LayoutContentPage/LayoutPage'

export class Staff extends Component {
    static async getInitialProps(ctx) {
        const res = await Send_Get_RestAPI('http://localhost:3001/staff')
             const json = await res.json();
             return {results : json , header: 'List Staff' };
      }
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <Index>
                <LayoutPage {...this.props}>
                        <ContentStaff {...this.props}/>
                 </LayoutPage>
            </Index>
        )
    }
}

export default Staff
