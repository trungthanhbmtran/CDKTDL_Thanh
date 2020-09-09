import React, { Component } from "react";
import { Send_Get_RestAPI,Send_Post_RestAPI } from "../../../Request/imw_request";
import _ from 'lodash';
import Router from 'next/router';

export class MainScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments : 1004,
      brench : 4,
      class : 2006,
      subjects : 1088,
      ID_SV_MH: 1088,
      ID_Loaidiem: "",
      Sodiem: "",
      Ghichu: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleChange(event) {
    this.setState({
        [event.target.id]: event.target.value,
      });
  }

  RenderListDepartMents() {
    return  this.props.results_departments.map((value) => {
      const {TENDONVI,ID_Donvi} = value;
      return (
      <option value={ID_Donvi} key={ID_Donvi}>{TENDONVI}</option>
      )
    })
  }
  RenderListBrench() {
    /*return  this.props.results_classes.map((value) => {
      const {Id_Nganhnghe,Ten_Nganhnghe} = value;
        return (
        <option value={Id_Nganhnghe} key={Id_Nganhnghe}>{Ten_Nganhnghe}</option>
        )
    })*/

    console.log(JSON.stringify(this.state));

    return _.filter(this.props.results_brenches, { 'ID_Donvi': parseInt(this.state.departments) }).map((value) =>  {
      const {ID_Nganhnghe,Ten_Nganhnghe}= value;
        return (
          <option value={ID_Nganhnghe} key={ID_Nganhnghe}>{Ten_Nganhnghe}</option>
        )
    })
  }
  RenderListClasses() {
    return _.filter(this.props.results_classes, { 'ID_Nganhnghe' : parseInt(this.state.brench) }).map((value) =>  {
      const {ID_Lophoc,Ten_Lophoc} = value;
        return (
          <option value={ID_Lophoc} key={ID_Lophoc}>{Ten_Lophoc}</option>
        )
    })
  }

  RenderListSubjects() {
    /*return  this.props.results_classes.map((value) => {
      const {ID_Lophoc,Ten_Lophoc} = value;
        return (
        <option value={ID_Lophoc} key={ID_Lophoc}>{Ten_Lophoc}</option>
        )
    })*/
    return _.filter(this.props.results_subjects, {'ID_Lophoc':parseInt(this.state.class)  }).map((value) =>  {
      const {ID_Mon_Lophoc,ID_Lophoc,Ten_Monhoc} = value;
        return (
          <option value={ID_Mon_Lophoc} key={ID_Mon_Lophoc}>{Ten_Monhoc}</option>
        )
    })
  }
  RenderListSubjects() {
    /*return  this.props.results_classes.map((value) => {
      const {ID_Lophoc,Ten_Lophoc} = value;
        return (
        <option value={ID_Lophoc} key={ID_Lophoc}>{Ten_Lophoc}</option>
        )
    })*/
    return _.filter(this.props.results_subjects, { 'ID_Lophoc':parseInt(this.state.class) }).map((value) =>  {
      const {ID_Mon_Lophoc,ID_Lophoc,Ten_Monhoc,} = value;
        return (
          <option value={ID_Mon_Lophoc} key={ID_Mon_Lophoc}>{Ten_Monhoc}</option>
        )
    })
  }

  RenderListStudents() {
    /*return  this.props.results_classes.map((value) => {
      const {ID_Lophoc,Ten_Lophoc} = value;
        return (
        <option value={ID_Lophoc} key={ID_Lophoc}>{Ten_Lophoc}</option>
        )
    })*/
    return _.filter(this.props.results_students, {'ID_Mon_Lophoc' : parseInt(this.state.subjects)  }).map((value) =>  {
      const {ID_Sinhvien,ID_SV_MH,HOTEN,ID_Mon_Lophoc} = value;
        return (
          <option value={ID_SV_MH} key={ID_SV_MH}>{HOTEN}</option>
        )
    })
  }

  RenderListTypeScores() {
    return  this.props.results_typescores.map((value,index) => {
      const {ID_LoaiDiem,Ten_LoaiDiem} = value;
      return (
      <option value={ID_LoaiDiem} key={ID_LoaiDiem}>{Ten_LoaiDiem}</option>
      )
    })
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.ID_SV_MH)
    const input ={"ID_SV_MH": this.state.ID_SV_MH,'ID_LoaiDiem' : 3,'Sodiem':5,'Ghichu':1}
    const res = await Send_Post_RestAPI(`http://${process.env.HOST}:3001/score/add`,input)
    const result =await res.json()
    alert(`Add Success with ${this.state.ID_SV_MH} and TypeScore is ${this.state.ID_Loaidiem}`)
   /* console.log(result)*/
  }

  async handleCancel(event) {
    event.isDefaultPrevented()
    Router.push('/')
  }
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Form Score</header>
                  <button
                    id="panel-button"
                    className="mdl-button mdl-js-button mdl-button--icon pull-right"
                    data-upgraded=",MaterialButton"
                  >
                    <i className="material-icons">more_vert</i>
                  </button>
                  <ul
                    className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                    data-mdl-for="panel-button"
                  >
                    <li className="mdl-menu__item">
                      <i className="material-icons">assistant_photo</i>
                      Action
                    </li>
                    <li className="mdl-menu__item">
                      <i className="material-icons">print</i>Another action
                    </li>
                    <li className="mdl-menu__item">
                      <i className="material-icons">favorite</i>Something else
                      here
                    </li>
                  </ul>
                </div>
                <div className="card-body row">
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label  getmdl-select__fix-height txt-full-width">
                    <label
                        htmlFor="SelectBox1"
                        className="mdl-textfield__label"
                      >
                        Department
                      </label>
                      <select id="departments" onChange={this.handleChange} value={this.state.departments}   className="mdl-textfield__input">
                        {this.RenderListDepartMents()}
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label  getmdl-select__fix-height txt-full-width">
                    <label
                        htmlFor="SelectBox2"
                        className="mdl-textfield__label"
                      >
                        Brenches
                      </label>
                    <select id="brench" onChange={this.handleChange} value={this.state.brench}   className="mdl-textfield__input">
                       {this.RenderListBrench()}
                   </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select__fix-height txt-full-width">
                    <label
                        htmlFor="SelectBox3"
                        className="mdl-textfield__label"
                      >
                        Classes
                      </label>
                    <select id="class" onChange={this.handleChange} value={this.state.class}   className="mdl-textfield__input">
                       {this.RenderListClasses()}
                   </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select__fix-height txt-full-width">
                    <label
                        htmlFor="SelectBox5"
                        className="mdl-textfield__label"
                      >
                        Subjects
                      </label>
                    <select id="subjects" onChange={this.handleChange} value={this.state.subjects}   className="mdl-textfield__input">
                       {this.RenderListSubjects()}
                   </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select__fix-height txt-full-width">
                    <label
                        htmlFor="SelectBox5"
                        className="mdl-textfield__label"
                      >
                        Students
                      </label>
                    <select id="ID_SV_MH" onChange={this.handleChange} value={this.state.ID_SV_MH}   className="mdl-textfield__input">
                       {this.RenderListStudents()}
                   </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label  getmdl-select__fix-height txt-full-width">
                    <label
                        htmlFor="SelectBox5"
                        className="mdl-textfield__label"
                      >
                        TypeCore
                      </label>
                    <select id="ID_Loaidiem" onChange={this.handleChange} value={this.state.ID_Loaidiem}   className="mdl-textfield__input">
                       {this.RenderListTypeScores()}
                   </select>
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <input className="mdl-textfield__input" type="text" pattern="-?[0-9]*(\.[0-9]+)?" id="Sodiem" value={this.state.Sodiem} onChange={this.handleChange} />
                      <label className="mdl-textfield__label" htmlFor="text5">
                        Score:
                      </label>
                      <span className="mdl-textfield__error">
                        Number required!
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield txt-full-width">
                      <textarea
                        className="mdl-textfield__input"
                        rows={4}
                        id="Ghichu"
                        value={this.state.Ghichu}
                        onChange={this.handleChange}
                      />
                      <label className="mdl-textfield__label" htmlFor="text7">
                        Education
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-12 p-t-20 text-center">
                    <button
                      type="button"
                      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                      onClick={this.handleSubmit}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                      data-dismiss="modal"
                      onClick={this.handleCancel}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
              </div>
    );
  }
}

export default MainScore;
