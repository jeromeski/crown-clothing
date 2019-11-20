import React from 'react';
import Hero from '../../components/slider/hero.component';
import SlotTextContainer from '../../components/slot-text/slot-text.component';
import MainDirectory from '../../components/main-directory/main-directory.component';
import SubMenu from '../../components/sub/sub.component';
import SlotIconsContainer from '../../components/slot-icons/slot-icons.component';

import './homepage.styles.scss';

const HomePage = () => {
  const data = [
    {
      title: 'Collections',
      subtitle: 'Keep up with the latest fashion trends'
    },
    {
      title: 'New Arrivals',
      subtitle: 'Get your favorite brands at great discounts'
    }
  ]

  return (
    <div className='homepage'>
      <Hero />
      <SlotTextContainer title={data[0].title} subtitle={data[0].subtitle}/>
      <MainDirectory />
      <SlotTextContainer title={data[1].title} subtitle={data[1].subtitle}/>
      <SubMenu />
      <SlotIconsContainer />
    </div>
  )
}
export default HomePage;
