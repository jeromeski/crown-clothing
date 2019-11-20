import React from 'react';
import './slot-text.styles.scss';

import 'materialize-css/dist/css/materialize.min.css';

const SlotTextContainer = (props) => {

  return (
    <div className='slot-container'>
      <div className='custom-cta-module'>
        <h2 className='cta-snipe center-align'>{props.title}</h2>
        <h3 className='cta-title center-align'>{props.subtitle}</h3>
        <div className='cta-wrapper center'>
          <button className='btn btn-large white black-text cta-button accent-3 waves-effect waves-dark'>Shop now</button>
        </div>
      </div>
    </div>
  )
}

export default SlotTextContainer;