import React, { Component } from "react";
import { Send_Get_RestAPI,Send_Post_RestAPI } from "../../../Request/imw_request";
import _ from 'lodash';
import Router from 'next/router';

export class EditScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ID_Loaidiem: "",
      SodiemEdit: "",
    };

  }
  handleChange = (event) => {
    this.setState({
        [event.target.id]: event.target.value,
      });
  }

  

  RenderListTypeScores() {
    return  this.props.results_typescores.map((value,index) => {
      const {ID_LoaiDiem,Ten_LoaiDiem} = value;
      return (
      <option value={ID_LoaiDiem} key={ID_LoaiDiem}>{Ten_LoaiDiem}</option>
      )
    })
  }

   handleSubmit = async(event) => {
    event.preventDefault();
    const Ngaysua = new Date();
  // alert(Ngaynhap)
   const input ={'ID_SV_MH':this.props.idtable,'ID_Loaidiem': this.state.ID_Loaidiem,'SodiemEdit':this.state.SodiemEdit,"Ngaysua":Ngaysua,"Nguoisua": this.props.cookies.unknow}
    const res = await Send_Post_RestAPI(`http://${process.env.HOSTPRE}:3001/score/update`,input,this.props.cookies.accessToken)
    const result =await res.json()
    this.props.onClickupdate()
    alert(result)
   //alert(`Add Success with ${this.state.ID_SV_MH} and TypeScore is ${this.state.ID_Loaidiem} and Now is ${Ngaynhap}`)
   /* console.log(result)*/
  }

   handleCancel  = async(event) => {
    event.isDefaultPrevented()
    Router.push('/scores/score')
  }

  
  render() {
    return (
      <div>
        <div>
          <div className="row">
            <div className="col-sm-12">
              <div className="card-box">
                <div className="card-head">
                  <header>Form Edit</header>
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
                      <input className="mdl-textfield__input" type="text" maxLength="1" pattern="-?[0-9]*(\.[0-9]+)?" id="SodiemEdit" value={this.state.Sodiem} onChange={this.handleChange} required/>
                      <label className="mdl-textfield__label" htmlFor="text5">
                        Score:
                      </label>
                      <span className="mdl-textfield__error">
                        Number required!
                      </span>
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

export default EditScore;
