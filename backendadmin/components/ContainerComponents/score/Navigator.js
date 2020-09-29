import React, { Component } from 'react'

export class Navigator extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <ul className="nav customtab nav-tabs" role="tablist">
            <li className="nav-item"><a href="#tab1" className="nav-link active" data-toggle="tab">List
                View</a></li>
            <li className="nav-item"><a href="#tab2" className="nav-link" data-toggle="tab">Grid
                View</a></li>
          </ul>
        )
    }
}

export default Navigator
