import React from 'react';


import './slot-icons.scss'
import MakeSlotIcon from '../make-slot-icon/make-slot-icon.component'
import ICONS_DATA from './slot-icons.data'

class SlotIcons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      iconListData: ICONS_DATA

    }

  }

  render() {

    const {iconListData} = this.state
    return(
      <div className='slot-icon'>
        <div className='container'>
          <div className='row'>
            <h2 className='slot-icon__snipe center-align'>Did You Know that we offer?</h2> 
            <div className='divider'></div>
          </div>
          <div className='row'>
            {iconListData.map(({id, ...otherProps}) => 
              <MakeSlotIcon key={id} {...otherProps}/>
              )}
          </div>
        </div>
      </div>
    )
  }
}

export default SlotIcons;

