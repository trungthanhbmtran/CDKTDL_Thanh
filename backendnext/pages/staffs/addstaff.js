import React, { Component } from 'react'
import Index from '../index'
import {Send_Get_RestAPI} from '../../Request/imw_request'
import LayoutPage from '../../components/ContainerComponents/LayoutContentPage/LayoutPage'
import AddForm from '../../components/ContainerComponents/staff/AddForm'

export class AddStaff extends Component {
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
                        <AddForm {...this.props}/>
                 </LayoutPage>
            </Index>
        )
    }
}

export default AddStaff
