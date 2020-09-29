import Link from 'next/link'
import React, { Component } from 'react'

export class SidebarMenu extends Component {
  constructor(props){
    super(props)
  }
  render() {
     return(
      <div className="sidebar-container">
      <div className="sidemenu-container navbar-collapse collapse fixed-menu">
        <div id="remove-scroll" className="left-sidemenu">
          <ul className="sidemenu  page-header-fixed slimscroll-style" data-keep-expanded="false" data-auto-scroll="true" data-slide-speed={200} style={{paddingTop: '20px'}}>
            <li className="sidebar-toggler-wrapper hide">
              <div className="sidebar-toggler">
                <span />
              </div>
            </li>
            <li className="sidebar-user-panel">
              <div className="user-panel">
                <div className="pull-left image">
                  <img src="../assets/img/dp.jpg" className="img-circle user-img-circle" alt="User Image" />
                </div>
                <div className="pull-left info">
    <p> Hello Thanh</p>
                  <a href=""><i className="fa fa-circle user-online" /><span className="txtOnline">
                      Online</span></a>
                </div>
              </div>
            </li>
            <li className="nav-item start " className="nav-item active open">
              <Link href='/scores/addscores'>
              <a  className="nav-link nav-toggle">
                <i className="material-icons">score</i>
                <span className="title">score</span>
                <span className="arrow" />
              </a>
              </Link>
              <ul className="sub-menu">
                <li className="nav-item">
                  <Link  href='/scores/score'>
                  <a className="nav-link ">
                    <span className="title">MainScore</span>
                  </a>
                  </Link>
                  <Link  href='/scores/addscores'>
                  <a className="nav-link ">
                    <span className="title">AddScore</span>
                  </a>
                  </Link>
                </li>
              </ul>
            </li>
            </ul>
        </div>
      </div>
    </div>
    )
  }
}

export default SidebarMenu

    
