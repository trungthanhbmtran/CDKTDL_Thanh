import React, { Component } from 'react'
import Index from '../index'
import {Send_Get_RestAPI} from '../../Request/imw_request'
import LayoutPage from '../../components/ContainerComponents/LayoutContentPage/LayoutPage'
import AddForm from '../../components/ContainerComponents/staff/AddForm'

export class AddStaff extends Component {
    static async getInitialProps(ctx) {
         let res_departments = await Send_Get_RestAPI("http://localhost:3001/score/departments");
         let results_departments = await res_departments.json();
         let res_brenches = await Send_Get_RestAPI("http://localhost:3001/score/brenches");
         let results_brenches = await res_brenches.json();
         let res_classes = await Send_Get_RestAPI("http://localhost:3001/score/classes");
         let results_classes = await res_classes.json();
         let res_subjects = await Send_Get_RestAPI("http://localhost:3001/score/subjects");
         let results_subjects = await res_subjects.json();
         let res_students = await Send_Get_RestAPI("http://localhost:3001/score/students");
         let results_students = await res_students.json();
         let res_typescores =  await Send_Get_RestAPI("http://localhost:3001/score/typescores");
         let results_typescores = await res_typescores.json();
     return {results_departments : results_departments,results_brenches: results_brenches ,results_classes: results_classes,
       results_subjects :results_subjects,results_students :results_students,results_typescores:results_typescores, header: 'List Staff',name:"thanh"};
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
