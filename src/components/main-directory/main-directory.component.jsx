import React from 'react';

import './main-directory.styles.scss'

const MainDirItem = ({title, imageUrl, size}) => (
  <div className={`${size} main-menu__item`}>
    <div className='main-menu__image' 
      style={{
        backgroundImage: `url(${imageUrl})`,
        filter: 'brightness(100%)'
      }}
      alt={`${title}`}
    />
    <div className='main-menu__content'>
      <h1 className='main-menu__title'>{title}</h1>
      <span className='main-menu__subtitle'>Shop Now</span>
    </div>
  </div>
)


class MainDirectory extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      sections: [
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/Swq5hj3/men.jpg',
          size: 'large',
          id: 5,
          linkUrl: ''
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/02YhyR5/women.jpg',
          size: 'large',
          id: 4,
          linkUrl: ''
        }
      ]
    }
  }

  render() {
    const { sections } = this.state
    return (
      <div className='main-directory'>
        { 
          sections.map(({id, ...otherProps}) => <MainDirItem key={id} {...otherProps}/>)
        }
      </div>
    )
  }
}

export default MainDirectory;

/*
<div className='main-menu__item'>
          <img  className='main-menu__image' 
                src={require("../../../src/img/men.jpg")} 
                alt='man'
          />
          <div className='main-menu__content'>
            <h1 className='main-menu__title'>Men</h1>
            <span className='main-menu__subtitle'>Shop Now</span>
          </div>
        </div>
        <div className='main-menu__item'>
          <img  className='main-menu__image' 
                src={require("../../../src/img/women.jpg")} 
                alt='woman'
          />
          <div className='main-menu__content'>
            <h1 className='main-menu__title'>Women</h1>
            <span className='main-menu__subtitle'>Shop Now</span>
          </div>
        </div>
*/ 