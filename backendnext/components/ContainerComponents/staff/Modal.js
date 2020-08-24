import React, { Component } from 'react'
import {fetchPromised} from '../../../Request/imw_request'
import AddForm from './AddForm'
import AddStaff from '../../../pages/scores/addscores';

export class Modal extends Component {
    constructor(props) {
      super(props)
      this.state={
        "ID_SV_MH" : "",
        "ID_Loaidiem": "",
        "Sodiem" : "",
        "Ghichu" : "",
        "Ngaynhap":"",
        "Nguoinhap" : "",
        "Ngaysua" : "",
        "Nguoisua" : "",
        "Trangthai":""
      }
    }
    componentDidMount() {
      Promise.all([
        fetchPromised("http://backend/foo.txt", 500),
        fetchPromised("http://backend/baz.txt", 500)
    ]).then((data) => {
        let [ foo, bar, baz ] = data
        console.log(`success: foo=${foo} bar=${bar} baz=${baz}`)
    }, (err) => {
        console.log(`error: ${err}`)
    })
    }
     
    render()
    {
        return (
            <div className="container">
  {/* Modal */}
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
      {/* Modal content*/}
      <div className="modal-content">
        {/*them in here */}
         <AddStaff/>
        </div>
    </div>
  </div>
</div>
        )
    }
}

export default Modal
