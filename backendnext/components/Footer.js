import React, { useState } from 'react';
import { useRouter } from 'next/router'


class Footer extends  React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
        <div className="page-footer">
        <div className="page-footer-inner"> 2017 © Smart University Theme By
          <a href="mailto:redstartheme@gmail.com" target="_top" className="makerCss">Redstar Theme</a>
        </div>
        <div className="scroll-to-top">
          <i className="icon-arrow-up" />
        </div>
      </div>
    )
  }
}
export default Footer;
