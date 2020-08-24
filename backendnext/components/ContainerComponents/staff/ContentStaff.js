import React, { Component } from "react";
import HeaderPage from ".//HeaderPage";
import TabPane from "./TabPane";
import GirdData from "./GirdData";
import Navigator from "./Navigator";
import Modal from "./Modal";
import {fnExcelReport} from '../../../Export/Excel'


export class ContentStaff extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      loading:true,
      data : this.props.results
    }
  }
  
  async fnExcel() {
    fnExcelReport()
  }
  
  renderTableData() {
    return this.state.data.map((staff, index) => {
      const {
        MANHANVIEN,
        HOTEN,
        BIDANH,
        NGAYSINH,
        GIOITINH,
        VANHOA,
        NGOAINGU,
        SOTRUONG,
        CHUYENMON,
        TRINHDO,
        NGAYLUUHS,
        LYDOLUUHS,
        TRANGTHAI,
        DANTOC,
        TONGIAO,
        SOBHXH,
        NOI_DKKCB,
        NHANVIEN_ID,
        ngaynhap,
        nguoinhap,
        ngaysua,
        nguoisua,
        SOCMND,
        NGAYCAP,
        NOICAP,
        DIDONG,
        DIENTHOAIBAN,
        DIACHIEMAIL,
        MASOTHUE,
        Diachi,
        Quequan,
        Website,
        bangcapkhac,
        chungchikhac,
        uudiem,
        khuyetdiem,
        diachilienhe,
        kinhnghiem
      } = staff;
      return (
        <tr key={MANHANVIEN}>
          <td>
            <a href="edit_professor.html" className="btn btn-primary btn-xs">
              <i className="fa fa-pencil" />
            </a>
            <button className="btn btn-danger btn-xs">
              <i className="fa fa-trash-o " />
            </button>
          </td>
          <td>{MANHANVIEN}</td>
          <td>{HOTEN}</td>
          <td>{BIDANH}</td>
          <td>{NGAYSINH}</td>
          <td>{GIOITINH}</td>
          <td>{VANHOA}</td>
          <td>{NGOAINGU}</td>
          <td>{SOTRUONG}</td>
          <td>{CHUYENMON}</td>
          <td>{TRINHDO}</td>
          <td>{NGAYLUUHS}</td>
          <td>{LYDOLUUHS}</td>
          <td>{TRANGTHAI}</td>
          <td>{DANTOC}</td>
          <td>{TONGIAO}</td>
          <td>{SOBHXH}</td>
          <td>{NOI_DKKCB}</td>
          <td>{NHANVIEN_ID}</td>
          <td>{ngaynhap}</td>
          <td>{nguoinhap}</td>
          <td>{ngaysua}</td>
          <td>{nguoisua}</td>
          <td>{SOCMND}</td>
          <td>{NGAYCAP}</td>
          <td>{NOICAP}</td>
          <td>{DIDONG}</td>
          <td>{DIENTHOAIBAN}</td>
          <td>{DIACHIEMAIL}</td>
          <td>{MASOTHUE}</td>
          <td>{Diachi}</td>
          <td>{Quequan}</td>
          <td>{Website}</td>
          <td>{bangcapkhac}</td>
          <td>{chungchikhac}</td>
          <td>{uudiem}</td>
          <td>{khuyetdiem}</td>
          <td>{diachilienhe}</td>
          <td>{kinhnghiem}</td>
        </tr>
      )
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.data[0])
    const newheader = header.unshift('tools')
    return header.map((key, index) =>
      <th key={index}>
        {key.toUpperCase()}
      </th>)
  }
  render() {
    return (
          <div className="row">
            <div className="col-md-12">
              <div className="tabbable-line">
                <Navigator />
                <div className="tab-content">
                <div className="tab-pane active fontawesome-demo" id="tab1">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card card-box">
                          <div className="card-head">
                            <header>{this.props.header}</header>
                            <div className="tools">
                              <a className="fa fa-repeat btn-color box-refresh" href="javascript:;" />
                              <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;" />
                              <a className="t-close btn-color fa fa-times" href="javascript:;" />
                            </div>
                          </div>
                          <div className="card-body ">
                            <div className="row">
                              <div className="col-md-6 col-sm-6 col-6">
                                <div className="btn-group">
                                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Add New</button>
                                </div>
                              </div>
                              <div className="col-md-6 col-sm-6 col-6">
                                <div className="btn-group pull-right">
                                  <a className="btn deepPink-bgcolor  btn-outline dropdown-toggle" data-toggle="dropdown">Tools
                                    <i className="fa fa-angle-down" />
                                  </a>
                                  <ul className="dropdown-menu pull-right">
                                    <li>
                                      <a href="javascript:;">
                                        <i className="fa fa-print" /> Print </a>
                                    </li>
                                    <li>
                                      <a href="javascript:;">
                                        <i className="fa fa-file-pdf-o" /> Save as
                                        PDF </a>
                                    </li>
                                    <li>
                                      <a onClick={this.fnExcel}>
                                        <i className="fa fa-file-excel-o" />
                                        Export to Excel </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="table-scrollable">
                              <table className="table table-striped table-bordered table-hover table-checkable order-column valign-middle" id="example4">
                                <thead>
                                <tr>{this.renderTableHeader()}</tr>
                                </thead>
                                <tbody>
                                {this.renderTableData()}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <TabPane />
                  <Modal />
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default ContentStaff;
