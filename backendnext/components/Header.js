import React, { useState } from 'react';
import { useRouter } from 'next/router'


class Header extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
        <div className="page-header navbar navbar-fixed-top">
            <div className="page-header-inner ">
                {/* logo start */}
                <div className="page-logo">
                    <a href="index.html">
                    <span className="logo-icon material-icons fa-rotate-45">school</span>
                    <span className="logo-default">HOME</span> </a>
                </div>
                {/* logo end */}
                <ul className="nav navbar-nav navbar-left in">
                    <li><a href="#" className="menu-toggler sidebar-toggler"><i className="icon-menu" /></a></li>
                </ul>
                <form className="search-form-opened" action="#" method="GET">
                    <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." name="query" />
                    <span className="input-group-btn">
                        <a href="javascript:;" className="btn submit">
                        <i className="icon-magnifier" />
                        </a>
                    </span>
                    </div>
                </form>
                {/* start mobile menu */}
                <a href="javascript:;" className="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse">
                    <span />
                </a>
                {/* end mobile menu */}
                {/* start header menu */}
                <div className="top-menu">
            <ul className="nav navbar-nav pull-right">
              <li><a href="javascript:;" className="fullscreen-btn"><i className="fa fa-arrows-alt" /></a></li>
              {/* start language menu */}
              <li className="dropdown language-switch">
                <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false"> <img src="../assets/img/flags/gb.png" className="position-left" alt="" /> English <span className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="deutsch"><img src="../assets/img/flags/de.png" alt="" /> Deutsch</a>
                  </li>
                  <li>
                    <a className="ukrainian"><img src="../assets/img/flags/ua.png" alt="" /> Українська</a>
                  </li>
                  <li>
                    <a className="english"><img src="../assets/img/flags/gb.png" alt="" /> English</a>
                  </li>
                  <li>
                    <a className="espana"><img src="../assets/img/flags/es.png" alt="" /> España</a>
                  </li>
                  <li>
                    <a className="russian"><img src="../assets/img/flags/ru.png" alt="" /> Русский</a>
                  </li>
                </ul>
              </li>
              {/* end language menu */}
              {/* start notification dropdown */}
              <li className="dropdown dropdown-extended dropdown-notification" id="header_notification_bar">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <i className="fa fa-bell-o" />
                  <span className="badge headerBadgeColor1"> 6 </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="external">
                    <h3><span className="bold">Notifications</span></h3>
                    <span className="notification-label purple-bgcolor">New 6</span>
                  </li>
                  <li>
                    <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                      <li>
                        <a href="javascript:;">
                          <span className="time">just now</span>
                          <span className="details">
                            <span className="notification-icon circle deepPink-bgcolor"><i className="fa fa-check" /></span>
                            Congratulations!. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span className="time">3 mins</span>
                          <span className="details">
                            <span className="notification-icon circle purple-bgcolor"><i className="fa fa-user o" /></span>
                            <b>John Micle </b>is now following you. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span className="time">7 mins</span>
                          <span className="details">
                            <span className="notification-icon circle blue-bgcolor"><i className="fa fa-comments-o" /></span>
                            <b>Sneha Jogi </b>sent you a message. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span className="time">12 mins</span>
                          <span className="details">
                            <span className="notification-icon circle pink"><i className="fa fa-heart" /></span>
                            <b>Ravi Patel </b>like your photo. </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span className="time">15 mins</span>
                          <span className="details">
                            <span className="notification-icon circle yellow"><i className="fa fa-warning" /></span> Warning! </span>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;">
                          <span className="time">10 hrs</span>
                          <span className="details">
                            <span className="notification-icon circle red"><i className="fa fa-times" /></span> Application error. </span>
                        </a>
                      </li>
                    </ul>
                    <div className="dropdown-menu-footer">
                      <a href="javascript:void(0)"> All notifications </a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* end notification dropdown */}
              {/* start message dropdown */}
              <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <i className="fa fa-envelope-o" />
                  <span className="badge headerBadgeColor2"> 2 </span>
                </a>
                <ul className="dropdown-menu">
                  <li className="external">
                    <h3><span className="bold">Messages</span></h3>
                    <span className="notification-label cyan-bgcolor">New 2</span>
                  </li>
                  <li>
                    <ul className="dropdown-menu-list small-slimscroll-style" data-handle-color="#637283">
                      <li>
                        <a href="#">
                          <span className="photo">
                            <img src="../assets/img/prof/prof2.jpg" className="img-circle" alt="" />
                          </span>
                          <span className="subject">
                            <span className="from"> Sarah Smith </span>
                            <span className="time">Just Now </span>
                          </span>
                          <span className="message"> Jatin I found you on LinkedIn... </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="photo">
                            <img src="../assets/img/prof/prof3.jpg" className="img-circle" alt="" />
                          </span>
                          <span className="subject">
                            <span className="from"> John Deo </span>
                            <span className="time">16 mins </span>
                          </span>
                          <span className="message"> Fwd: Important Notice Regarding Your Domain
                            Name... </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="photo">
                            <img src="../assets/img/prof/prof1.jpg" className="img-circle" alt="" />
                          </span>
                          <span className="subject">
                            <span className="from"> Rajesh </span>
                            <span className="time">2 hrs </span>
                          </span>
                          <span className="message"> pls take a print of attachments. </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="photo">
                            <img src="../assets/img/prof/prof8.jpg" className="img-circle" alt="" />
                          </span>
                          <span className="subject">
                            <span className="from"> Lina Smith </span>
                            <span className="time">40 mins </span>
                          </span>
                          <span className="message"> Apply for Ortho Surgeon </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className="photo">
                            <img src="../assets/img/prof/prof5.jpg" className="img-circle" alt="" />
                          </span>
                          <span className="subject">
                            <span className="from"> Jacob Ryan </span>
                            <span className="time">46 mins </span>
                          </span>
                          <span className="message"> Request for leave application. </span>
                        </a>
                      </li>
                    </ul>
                    <div className="dropdown-menu-footer">
                      <a href="#"> All Messages </a>
                    </div>
                  </li>
                </ul>
              </li>
              {/* end message dropdown */}
              {/* start manage user dropdown */}
              <li className="dropdown dropdown-user">
                <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                  <img alt="" className="img-circle " src="../assets/img/dp.jpg" />
                  <span className="username username-hide-on-mobile"> {this.props.name} </span>
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="dropdown-menu dropdown-menu-default">
                  <li>
                    <a href="user_profile.html">
                      <i className="icon-user" /> Profile </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-settings" /> Settings
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="icon-directions" /> Help
                    </a>
                  </li>
                  <li className="divider"> </li>
                  <li>
                    <a href="lock_screen.html">
                      <i className="icon-lock" /> Lock
                    </a>
                  </li>
                  <li>
                    <a href="login.html">
                      <i className="icon-logout" /> Log Out </a>
                  </li>
                </ul>
              </li>
              {/* end manage user dropdown */}
              <li className="dropdown dropdown-quick-sidebar-toggler">
                <a id="headerSettingButton" className="mdl-button mdl-js-button mdl-button--icon pull-right" data-upgraded=",MaterialButton">
                  <i className="material-icons">more_vert</i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        </div>
    )
  }
}
export default Header;
