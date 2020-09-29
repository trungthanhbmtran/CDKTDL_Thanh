import React, { useState } from 'react';
import { useRouter } from 'next/router'


class QuickSetting extends  React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
        <div className="settingSidebar">
  <a href="  " className="settingPanelToggle"> <i className="fa fa-spin fa-cog" />
  </a>
  <div className="settingSidebar-body ps-container ps-theme-default">
    <div className=" fade show active">
      <div className="setting-panel-header">Setting Panel
      </div>
      <div className="quick-setting slimscroll-style">
        <ul id="themecolors">
          <li>
            <p className="sidebarSettingTitle">Sidebar Color</p>
          </li>
          <li className="complete">
            <div className="theme-color sidebar-theme">
              <a href=" " data-theme="white"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="dark"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="blue"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="indigo"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="cyan"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="green"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="red"><span className="head" /><span className="cont" /></a>
            </div>
          </li>
          <li>
            <p className="sidebarSettingTitle">Header Brand color</p>
          </li>
          <li className="theme-option">
            <div className="theme-color logo-theme">
              <a href=" " data-theme="logo-white"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="logo-dark"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="logo-blue"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="logo-indigo"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="logo-cyan"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="logo-green"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="logo-red"><span className="head" /><span className="cont" /></a>
            </div>
          </li>
          <li>
            <p className="sidebarSettingTitle">Header color</p>
          </li>
          <li className="theme-option">
            <div className="theme-color header-theme">
              <a href=" " data-theme="header-white"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="header-dark"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="header-blue"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="header-indigo"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="header-cyan"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="header-green"><span className="head" /><span className="cont" /></a>
              <a href=" " data-theme="header-red"><span className="head" /><span className="cont" /></a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
    )
  }
}
export default QuickSetting;
