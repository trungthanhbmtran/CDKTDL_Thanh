import React, { Component } from "react";
import { Send_Get_RestAPI,Send_Post_RestAPI } from "../../../Request/imw_request";
import _ from 'lodash';

export class AddScore_Component extends Component {
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
    console.log(this.state.brench)
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
    const input ={"abc": "thanh"}
    const res = await Send_Post_RestAPI("https://localhost:3001/scores/add",input)
    const json =await res.json()
    console.log(json)
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
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="chat-sidebar-container"
          data-close-on-body-click="false"
        >
          <div className="chat-sidebar">
            <ul className="nav nav-tabs">
              <li className="nav-item">
                <a
                  href="#quick_sidebar_tab_1"
                  className="nav-link active tab-icon"
                  data-toggle="tab"
                >
                  {" "}
                  <i className="material-icons">chat</i>Chat
                  <span className="badge badge-danger">4</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#quick_sidebar_tab_3"
                  className="nav-link tab-icon"
                  data-toggle="tab"
                >
                  {" "}
                  <i className="material-icons">settings</i>
                  Settings
                </a>
              </li>
            </ul>
            <div className="tab-content">
              {/* Start User Chat */}
              <div
                className="tab-pane active chat-sidebar-chat in active show"
                role="tabpanel"
                id="quick_sidebar_tab_1"
              >
                <div className="chat-sidebar-list">
                  <div
                    className="chat-sidebar-chat-users slimscroll-style"
                    data-rail-color="#ddd"
                    data-wrapper-class="chat-sidebar-list"
                  >
                    <div className="chat-header">
                      <h5 className="list-heading">Online</h5>
                    </div>
                    <ul className="media-list list-items">
                      <li className="media">
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof3.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="online dot" />
                        <div className="media-body">
                          <h5 className="media-heading">John Deo</h5>
                          <div className="media-heading-sub">Spine Surgeon</div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-success">5</span>
                        </div>{" "}
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof1.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="busy dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Rajesh</h5>
                          <div className="media-heading-sub">Director</div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof5.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="away dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Jacob Ryan</h5>
                          <div className="media-heading-sub">Ortho Surgeon</div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-danger">8</span>
                        </div>{" "}
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof4.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="online dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Kehn Anderson</h5>
                          <div className="media-heading-sub">CEO</div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof2.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="busy dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Sarah Smith</h5>
                          <div className="media-heading-sub">Anaesthetics</div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof7.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="online dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Vlad Cardella</h5>
                          <div className="media-heading-sub">Cardiologist</div>
                        </div>
                      </li>
                    </ul>
                    <div className="chat-header">
                      <h5 className="list-heading">Offline</h5>
                    </div>
                    <ul className="media-list list-items">
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-warning">4</span>
                        </div>{" "}
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof6.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="offline dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Jennifer Maklen</h5>
                          <div className="media-heading-sub">Nurse</div>
                          <div className="media-heading-small">
                            Last seen 01:20 AM
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof8.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="offline dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Lina Smith</h5>
                          <div className="media-heading-sub">Ortho Surgeon</div>
                          <div className="media-heading-small">
                            Last seen 11:14 PM
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <div className="media-status">
                          <span className="badge badge-success">9</span>
                        </div>{" "}
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof9.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="offline dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Jeff Adam</h5>
                          <div className="media-heading-sub">Compounder</div>
                          <div className="media-heading-small">
                            Last seen 3:31 PM
                          </div>
                        </div>
                      </li>
                      <li className="media">
                        <img
                          className="media-object"
                          src="../assets/img/prof/prof10.jpg"
                          width={35}
                          height={35}
                          alt="..."
                        />
                        <i className="offline dot" />
                        <div className="media-body">
                          <h5 className="media-heading">Anjelina Cardella</h5>
                          <div className="media-heading-sub">
                            Physiotherapist
                          </div>
                          <div className="media-heading-small">
                            Last seen 7:45 PM
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* End User Chat */}
              {/* Start Setting Panel */}
              <div
                className="tab-pane chat-sidebar-settings"
                role="tabpanel"
                id="quick_sidebar_tab_3"
              >
                <div className="chat-sidebar-settings-list slimscroll-style">
                  <div className="chat-header">
                    <h5 className="list-heading">Layout Settings</h5>
                  </div>
                  <div className="chatpane inner-content ">
                    <div className="settings-list">
                      <div className="setting-item">
                        <div className="setting-text">Sidebar Position</div>
                        <div className="setting-set">
                          <select className="sidebar-pos-option form-control input-inline input-sm input-small ">
                            <option value="left" selected="selected">
                              Left
                            </option>
                            <option value="right">Right</option>
                          </select>
                        </div>
                      </div>
                      <div className="setting-item">
                        <div className="setting-text">Header</div>
                        <div className="setting-set">
                          <select className="page-header-option form-control input-inline input-sm input-small ">
                            <option value="fixed" selected="selected">
                              Fixed
                            </option>
                            <option value="default">Default</option>
                          </select>
                        </div>
                      </div>
                      <div className="setting-item">
                        <div className="setting-text">Footer</div>
                        <div className="setting-set">
                          <select className="page-footer-option form-control input-inline input-sm input-small ">
                            <option value="fixed">Fixed</option>
                            <option value="default" selected="selected">
                              Default
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="chat-header">
                      <h5 className="list-heading">Account Settings</h5>
                    </div>
                    <div className="settings-list">
                      <div className="setting-item">
                        <div className="setting-text">Notifications</div>
                        <div className="setting-set">
                          <div className="switch">
                            <label
                              className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                              htmlFor="switch-1"
                            >
                              <input
                                type="checkbox"
                                id="switch-1"
                                className="mdl-switch__input"
                                defaultChecked
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item">
                        <div className="setting-text">Show Online</div>
                        <div className="setting-set">
                          <div className="switch">
                            <label
                              className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                              htmlFor="switch-7"
                            >
                              <input
                                type="checkbox"
                                id="switch-7"
                                className="mdl-switch__input"
                                defaultChecked
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item">
                        <div className="setting-text">Status</div>
                        <div className="setting-set">
                          <div className="switch">
                            <label
                              className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                              htmlFor="switch-2"
                            >
                              <input
                                type="checkbox"
                                id="switch-2"
                                className="mdl-switch__input"
                                defaultChecked
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item">
                        <div className="setting-text">2 Steps Verification</div>
                        <div className="setting-set">
                          <div className="switch">
                            <label
                              className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                              htmlFor="switch-3"
                            >
                              <input
                                type="checkbox"
                                id="switch-3"
                                className="mdl-switch__input"
                                defaultChecked
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="chat-header">
                      <h5 className="list-heading">General Settings</h5>
                    </div>
                    <div className="settings-list">
                      <div className="setting-item">
                        <div className="setting-text">Location</div>
                        <div className="setting-set">
                          <div className="switch">
                            <label
                              className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                              htmlFor="switch-4"
                            >
                              <input
                                type="checkbox"
                                id="switch-4"
                                className="mdl-switch__input"
                                defaultChecked
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item">
                        <div className="setting-text">Save Histry</div>
                        <div className="setting-set">
                          <div className="switch">
                            <label
                              className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                              htmlFor="switch-5"
                            >
                              <input
                                type="checkbox"
                                id="switch-5"
                                className="mdl-switch__input"
                                defaultChecked
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="setting-item">
                        <div className="setting-text">Auto Updates</div>
                        <div className="setting-set">
                          <div className="switch">
                            <label
                              className="mdl-switch mdl-js-switch mdl-js-ripple-effect"
                              htmlFor="switch-6"
                            >
                              <input
                                type="checkbox"
                                id="switch-6"
                                className="mdl-switch__input"
                                defaultChecked
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
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
