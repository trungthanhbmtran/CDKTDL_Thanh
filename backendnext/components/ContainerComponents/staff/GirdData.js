import React, { Component } from 'react'

export class GirdData extends Component {
    render() {
        return (
            <div className="tab-pane active fontawesome-demo" id="tab1">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-box">
                  <div className="card-head">
                    <header>All Students List</header>
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
                              <a href="javascript:;">
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
                          <tr>
                            <th />
                            <th> Roll No </th>
                            <th> Name </th>
                            <th> Department </th>
                            <th> Mobile </th>
                            <th> Email </th>
                            <th>Admission Date</th>
                            <th> Action </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std1.jpg" alt="" />
                            </td>
                            <td className="left">18</td>
                            <td>Rajesh Bhatt</td>
                            <td className="left">Mechanical</td>
                            <td><a href="tel:4444565756">
                                4444565756 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                rajesh@gmail.com </a></td>
                            <td className="left">22 Feb 2010</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std10.jpg" alt="" />
                            </td>
                            <td className="left">5</td>
                            <td>Pooja Patel</td>
                            <td className="left">Science</td>
                            <td><a href="tel:444786876">
                                444786876 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                pooja@gmail.com </a></td>
                            <td className="left">27 Aug 2005</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std2.jpg" alt="" />
                            </td>
                            <td className="left">15</td>
                            <td>Sarah Smith</td>
                            <td className="left">M.C.A.</td>
                            <td><a href="tel:44455546456">
                                44455546456 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                sarah@gmail.com </a></td>
                            <td className="left">05 Jun 2011</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std3.jpg" alt="" />
                            </td>
                            <td className="left">23</td>
                            <td>John Deo</td>
                            <td className="left">M.B.B.S.</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                john@gmail.com </a></td>
                            <td className="left">15 Feb 2012</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std4.jpg" alt="" />
                            </td>
                            <td className="left">10</td>
                            <td>Jay Soni</td>
                            <td className="left">Arts</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                kenh@gmail.com </a></td>
                            <td className="left">12 Nov 2012</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std5.jpg" alt="" />
                            </td>
                            <td className="left">14</td>
                            <td>Jacob Ryan</td>
                            <td className="left">Music</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                johnson@gmail.com </a></td>
                            <td className="left">03 Dec 2001</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std6.jpg" alt="" />
                            </td>
                            <td className="left">7</td>
                            <td>Megha Trivedi</td>
                            <td className="left">Commerce</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                megha@gmail.com </a></td>
                            <td className="left">17 Mar 2013</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std3.jpg" alt="" />
                            </td>
                            <td className="left">18</td>
                            <td>Rajesh</td>
                            <td className="left">Civil</td>
                            <td><a href="tel:4444565756">
                                4444565756 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                rajesh@gmail.com </a></td>
                            <td className="left">22 Feb 2000</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std10.jpg" alt="" />
                            </td>
                            <td className="left">5</td>
                            <td>Pooja Patel</td>
                            <td className="left">Computer</td>
                            <td><a href="tel:444786876">
                                444786876 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                pooja@gmail.com </a></td>
                            <td className="left">27 Aug 2005</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <a href="javasctipt().html" className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </a>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std1.jpg" alt="" />
                            </td>
                            <td className="left">18</td>
                            <td>Rajesh Bhatt</td>
                            <td className="left">Mechanical</td>
                            <td><a href="tel:4444565756">
                                4444565756 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                rajesh@gmail.com </a></td>
                            <td className="left">22 Feb 2010</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std10.jpg" alt="" />
                            </td>
                            <td className="left">5</td>
                            <td>Pooja Patel</td>
                            <td className="left">Science</td>
                            <td><a href="tel:444786876">
                                444786876 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                pooja@gmail.com </a></td>
                            <td className="left">27 Aug 2005</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std2.jpg" alt="" />
                            </td>
                            <td className="left">15</td>
                            <td>Sarah Smith</td>
                            <td className="left">M.C.A.</td>
                            <td><a href="tel:44455546456">
                                44455546456 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                sarah@gmail.com </a></td>
                            <td className="left">05 Jun 2011</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std3.jpg" alt="" />
                            </td>
                            <td className="left">23</td>
                            <td>John Deo</td>
                            <td className="left">M.B.B.S.</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                john@gmail.com </a></td>
                            <td className="left">15 Feb 2012</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std4.jpg" alt="" />
                            </td>
                            <td className="left">10</td>
                            <td>Jay Soni</td>
                            <td className="left">Arts</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                kenh@gmail.com </a></td>
                            <td className="left">12 Nov 2012</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std5.jpg" alt="" />
                            </td>
                            <td className="left">14</td>
                            <td>Jacob Ryan</td>
                            <td className="left">Music</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                johnson@gmail.com </a></td>
                            <td className="left">03 Dec 2001</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std6.jpg" alt="" />
                            </td>
                            <td className="left">7</td>
                            <td>Megha Trivedi</td>
                            <td className="left">Commerce</td>
                            <td><a href="tel:444543564">
                                444543564 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                megha@gmail.com </a></td>
                            <td className="left">17 Mar 2013</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std1.jpg" alt="" />
                            </td>
                            <td className="left">18</td>
                            <td>Rajesh</td>
                            <td className="left">Civil</td>
                            <td><a href="tel:4444565756">
                                4444565756 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                rajesh@gmail.com </a></td>
                            <td className="left">22 Feb 2000</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <button className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </button>
                            </td>
                          </tr>
                          <tr className="odd gradeX">
                            <td className="patient-img">
                              <img src="../assets/img/std/std10.jpg" alt="" />
                            </td>
                            <td className="left">5</td>
                            <td>Pooja Patel</td>
                            <td className="left">Computer</td>
                            <td><a href="tel:444786876">
                                444786876 </a></td>
                            <td><a href="mailto:shuxer@gmail.com">
                                pooja@gmail.com </a></td>
                            <td className="left">27 Aug 2005</td>
                            <td>
                              <a href="edit_professor.html" className="btn btn-primary btn-xs">
                                <i className="fa fa-pencil" />
                              </a>
                              <a href="javasctipt().html" className="btn btn-danger btn-xs">
                                <i className="fa fa-trash-o " />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        )
    }
}

export default GirdData
