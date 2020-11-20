import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import littleSection from '../../assets/images/little-section.svg';


import { SectionContainer,ItemsContainer } from './styles';

const LittleSection: React.FC = () => {
  return (
    <SectionContainer>
      <h2>Um titulo maneiro meio grande</h2>
      <ItemsContainer>
        <div>
            <img src={littleSection} alt=""/>
            <h3>título curto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vestibulum quam sit amet posuere posuere. Praesent eget lacus non odio tincidunt porta.
            </p>
        </div>
        <div>
            <img src={littleSection} alt=""/>
            <h3>título curto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vestibulum quam sit amet posuere posuere. Praesent eget lacus non odio tincidunt porta.
            </p>
        </div>
        <div>
            <img src={littleSection} alt=""/>
            <h3>título curto</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum vestibulum quam sit amet posuere posuere. Praesent eget lacus non odio tincidunt porta.
            </p>
        </div>
      </ItemsContainer>
    </SectionContainer>

  );
};

export default LittleSection;
