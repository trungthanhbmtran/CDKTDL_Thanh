import React, { Component } from 'react'

export class MainCourses extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Course Details</header>
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
                    <i className="material-icons">assistant_photo</i>Action
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
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="txtCourseName"
                    />
                    <label className="mdl-textfield__label">Course Name</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="txtCourseCode"
                    />
                    <label className="mdl-textfield__label">Course Code</label>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield txt-full-width">
                    <textarea
                      className="mdl-textfield__input"
                      rows={4}
                      id="text7"
                      defaultValue={""}
                    />
                    <label className="mdl-textfield__label" htmlFor="text7">
                      Course Details
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="date"
                    />
                    <label className="mdl-textfield__label">Start From</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="txtTimeLength"
                    />
                    <label className="mdl-textfield__label">
                      Course Time Length
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="txtPrice"
                    />
                    <label className="mdl-textfield__label">Course Price</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="list2"
                      defaultValue
                      readOnly
                      tabIndex={-1}
                    />
                    <label htmlFor="list2" className="pull-right margin-0">
                      <i className="mdl-icon-toggle__label material-icons">
                        keyboard_arrow_down
                      </i>
                    </label>
                    <label htmlFor="list2" className="mdl-textfield__label">
                      Professor Name
                    </label>
                    <ul
                      data-mdl-for="list2"
                      className="mdl-menu mdl-menu--bottom-left mdl-js-menu"
                    >
                      <li className="mdl-menu__item" data-val="DE">
                        Pr. Jayesh Patel
                      </li>
                      <li className="mdl-menu__item" data-val="BY">
                        Pr. Salini Parmar
                      </li>
                      <li className="mdl-menu__item" data-val="BY">
                        Pr. Mayank Trivedi
                      </li>
                      <li className="mdl-menu__item" data-val="BY">
                        Pr. Parit Varma
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      pattern="-?[0-9]*(\.[0-9]+)?"
                      id="maxStu"
                    />
                    <label className="mdl-textfield__label" htmlFor="maxStu">
                      Maximum Students
                    </label>
                    <span className="mdl-textfield__error">
                      Number required!
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      pattern="-?[0-9]*(\.[0-9]+)?"
                      id="text5"
                    />
                    <label className="mdl-textfield__label" htmlFor="text5">
                      Contact Number
                    </label>
                    <span className="mdl-textfield__error">
                      Number required!
                    </span>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20">
                  <label className="control-label col-md-3">Course Photo</label>
                  <div className="col-md-12">
                    <div id="id_dropzone" className="dropzone" />
                  </div>
                </div>
                <div className="col-lg-12 p-t-20 text-center">
                  <button
                    type="button"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
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
        )
    }
}

export default MainCourses
