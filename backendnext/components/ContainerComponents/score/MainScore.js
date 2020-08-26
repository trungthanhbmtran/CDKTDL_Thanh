import React, { Component } from "react";
import TabPane from "./TabPane";
import Navigator from "./Navigator";
import AddScore_Component from "./AddScore";
import {fnExcelReport} from '../../../Export/Excel'
import {Send_Post_RestAPI} from '../../../Request/imw_request'


export class MainScore extends Component {
  
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
    return this.state.data.map((scores, index) => {
      const {
        MANHANVIEN,
        NHANVIEN_ID,
        HOTEN,
        NGAYSINH,
        ID_SV_MH,
        ID_Mon_Lophoc,
        tinhdiem_tbc,
        hoclai,
        Lan_Hoc,
        Ghichu,
        Diem_Trungbinh,
        Diem_Trungbinh2,
        TB_KT,
        tx1,
        tx2,
        tx3,
        tx4,
        tx5,
        dk1,
        dk2,
        dk3,
        dk4,
        dk5,
        dk6,
        dk7,
        dk8,
        kt1,
        kt2,
      } = scores;
      return (
        <tr key={ID_SV_MH}>
          <td>
            <a href="edit_professor.html" className="btn btn-primary btn-xs">
              <i className="fa fa-pencil" />
            </a>
            <button className="btn btn-danger btn-xs">
              <i className="fa fa-trash-o " />
            </button>
          </td>
          <td>{MANHANVIEN}</td>
          <td>{NHANVIEN_ID}</td>
          <td>{HOTEN}</td>
          <td>{NGAYSINH}</td>
          <td>{ID_SV_MH}</td>
          <td>{ID_Mon_Lophoc}</td>
          <td>{tinhdiem_tbc}</td>
          <td>{hoclai}</td>
          <td>{Lan_Hoc}</td>
          <td>{Ghichu}</td>
          <td>{Diem_Trungbinh}</td>
          <td>{Diem_Trungbinh2}</td>
          <td>{TB_KT}</td>
          <td>{tx1}</td>
          <td>{tx2}</td>
          <td>{tx3}</td>
          <td>{tx4}</td>
          <td>{tx5}</td>
          <td>{dk1}</td>
          <td>{dk2}</td>
          <td>{dk3}</td>
          <td>{dk4}</td>
          <td>{dk5}</td>
          <td>{dk6}</td>
          <td>{dk7}</td>
          <td>{dk8}</td>
          <td>{kt1}</td>
          <td>{kt2}</td>
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
  renderModalAdd(){
      return (
        <div className="container">
        {/* Modal */}
        <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">
            {/* Modal content*/}
            <div className="modal-content">
            <AddScore_Component {...this.props}/>
            </div>
        </div>
        </div>
    </div>
      )
  }
  render() {
    return (
        <>
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
                  {this.renderModalAdd()}
                  <TabPane />
                </div>
              </div>
            </div>
          </div>
          </>
    );
  }
}

export default MainScore;
