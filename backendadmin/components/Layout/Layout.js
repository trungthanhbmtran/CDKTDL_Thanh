import React, { Component } from "react";
import Header from "./Header";
import QuickSetting from "./QuickSetting";
import SidebarMenu from "./SidebarMenu";
import Footer from "./Footer";
import LayoutPage from "./LayoutPage";

export class Layout extends Component {
      constructor(props) {
        super(props)
    }
  render() {
    return (
        <>
      <div className="page-wrapper">
        <Header {...this.props} />
        <QuickSetting />
        <div className="page-container">
          <SidebarMenu />
          <div className="page-content-wrapper">
            <div className="page-content">
               <LayoutPage/>
               {this.props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      </>
    );
  }
}

export default Layout;
