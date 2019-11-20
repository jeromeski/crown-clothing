import React from 'react';

import './sub.styles.scss'

class SubMenu extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets'
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers'
        }
      ]
    }

  }
  render() {
    return(
      <div className='sub-menu'>
        {this.state.sections.map(({id, title,imageUrl}) => 
          <div className='menu-item' key={id}>
            <div 
              className='background-image' 
              style={{
              backgroundImage: `url(${imageUrl})`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `center`,
              backgroundSize: `cover`
              }} 
            />
            <div className='content'>
              <h1 className='title'>{title}</h1>
              <span className='subtitle'>Shop Now</span>
            </div>
          </div>
        )}    
      </div> 
  )
}
}

export default SubMenu;
