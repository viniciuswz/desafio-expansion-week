import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import titleIcons from '../../assets/images/title-icons.svg';


import { RowTitleContainer } from './styles';

const RowTitleSection: React.FC = () => {
  return (
    <RowTitleContainer>
      <div>
          <img src={titleIcons} alt=""/>
          <h2>Lorem ipsum dolor leptospirose iam asd rub</h2>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum quam sit amet posuere posuere.
          Praesent eget lacus non odio tincidunt porta.Lorem
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum quam sit amet posuere posuere.
          Praesent eget lacus non odio tincidunt porta.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          vestibulum quam sit amet posuere posuere. Praesent eget lacus non odio tincidunt porta.
        </p>
      </div>

    </RowTitleContainer>

  );
};

export default RowTitleSection;
