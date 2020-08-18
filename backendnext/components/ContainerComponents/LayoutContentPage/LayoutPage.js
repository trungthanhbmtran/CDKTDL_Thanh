import React, { Component } from "react";
import HeaderPage from "../staff/HeaderPage";

export class LayoutPage extends Component {
  render() {
    return (
      <>
        <div className="page-content-wrapper">
          <div className="page-content">
            <HeaderPage />
             {this.props.children}
          </div>
        </div>
      </>
    );
  }
}

export default LayoutPage;
