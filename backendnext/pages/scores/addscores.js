import React, { Component } from 'react'
import Index from '../index'
import {Send_Get_RestAPI} from '../../Request/imw_request'
import LayoutPage from '../../components/ContainerComponents/LayoutContentPage/LayoutPage'
import AddScore_Component from '../../components/ContainerComponents/score/AddScore'

export class addscores extends Component {
    static async getInitialProps(ctx) {
         const res_departments = await Send_Get_RestAPI("http://localhost:3001/score/departments");
         const results_departments = await res_departments.json();
         const res_brenches = await Send_Get_RestAPI("http://localhost:3001/score/brenches");
         const results_brenches = await res_brenches.json();
         const res_classes = await Send_Get_RestAPI("http://localhost:3001/score/classes");
         const results_classes = await res_classes.json();
         const res_subjects = await Send_Get_RestAPI("http://localhost:3001/score/subjects");
         const results_subjects = await res_subjects.json();
         const res_students = await Send_Get_RestAPI("http://localhost:3001/score/students");
         const results_students = await res_students.json();
         const res_typescores =  await Send_Get_RestAPI("http://localhost:3001/score/typescores");
         const results_typescores = await res_typescores.json();
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
                        <AddScore_Component {...this.props}/>
                 </LayoutPage>
            </Index>
        )
    }
}

export default addscores
