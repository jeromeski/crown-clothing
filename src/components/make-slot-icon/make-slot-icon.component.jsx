import React from 'react';

import 'materialize-css/dist/css/materialize.min.css';
// import M from 'materialize-css';

import './make-slot-icon.scss';

const MakeSlotIcon = ({classItem, classLink, classIconType, setIcon, classCaption, caption }) => {
  return(
      <div className={classItem}>
        <div className={classLink}>
          <i className={classIconType}>{setIcon}</i>
        </div>
        <span className={classCaption}>{caption}</span>
      </div>
  )
}

export default MakeSlotIcon;