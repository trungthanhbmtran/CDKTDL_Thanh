import React, { Component } from "react";

export class LayoutPage extends Component {
  render() {
    return (
      <div className="page-bar">
      <div className="page-title-breadcrumb">
        <div className=" pull-left">
          <div className="page-title">All Students List</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
          <li>
            <i className="fa fa-home" />
            &nbsp;
            <a className="parent-item" href="index.html">
              Home
            </a>
            &nbsp;
            <i className="fa fa-angle-right" />
          </li>
          <li>
            <a className="parent-item" href>
              Students
            </a>
            &nbsp;
            <i className="fa fa-angle-right" />
          </li>
          <li className="active">All Students List</li>
        </ol>
      </div>
    </div>
   
    );
  }
}

export default LayoutPage;
