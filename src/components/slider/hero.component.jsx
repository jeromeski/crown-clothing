import React from 'react';
import {Slider, Slide, Caption} from 'react-materialize';
import M from "materialize-css";

import './hero.styles.scss'


class Hero extends React.Component {

  componentDidMount() { 
    document.addEventListener('DOMContentLoaded', function() {
      let slider = document.querySelectorAll('.slider');
      M.Slider.init(slider, {});
    });   
  }

  
  render() {
    return (
      <Slider options={{indicators: false, height: 600, transition: 500, interval: 6000 }}>
        <Slide className='hero__item' image={<picture>
          <source srcSet={"https://i.ibb.co/nr4FLTm/hero-1-mobile.jpg"} media='(max-width: 576px)' />
          <img className="hero__img" src={'https://i.ibb.co/7VrRRKZ/hero-1.jpg'} alt='hero'/>
        </picture>}>
          <Caption className="hero__caption" placement='left'>
            <h5 className='hero__heading--small'>CC outlets</h5>
            <h1 className="hero__heading--main">Up to 40% off</h1>
            <h5 className="light grey-text text-lighten-3 hero__heading--sub">
            The best time to grab your items
            </h5>
            <button className="black-text btn white accent-3 btn-large waves-effect waves-dark hero__button">Shop now</button>
          </Caption>
        </Slide>
        <Slide className='hero__item' image={<picture>
          <source srcSet={'https://i.ibb.co/pwFw9Wx/hero-2-mobile.jpg'} media='(max-width: 576px)' />
          <img className="hero__img" src={'https://i.ibb.co/bsrStMk/hero-2.jpg'} alt='hero'/>
        </picture>}>
          <Caption className="hero__caption" placement='right'>
            <h5 className='hero__heading--small'>CC outlets</h5>
            <h1 className="hero__heading--main">Up to 40% off</h1>
            <h5 className="light grey-text text-lighten-3 hero__heading--sub">
            The best time to grab your items
            </h5>
            <button className="black-text btn white accent-3 btn-large waves-effect waves-dark hero__button">Shop now</button>
          </Caption>
        </Slide>
      </Slider>
    )
  }
}

export default Hero;

