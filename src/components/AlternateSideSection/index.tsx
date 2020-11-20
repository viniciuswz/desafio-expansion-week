import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import alternateSectionIcon from '../../assets/images/alternateSectionIcon.svg';


import { AlternateSideContainer,ItemSection } from './styles';

const AlternateSideSection: React.FC = () => {
  return (
    <AlternateSideContainer>

      <ItemSection>
        <div>
          <img src={alternateSectionIcon} alt=""/>
        </div>
        <div>
          <h2>Lorem ipsum dolor leptospirose iam asd rub</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum quam sit amet
            posuere posuere. Praesent eget lacus non odio tincidunt porta.Lorem
          </p>
        </div>
      </ItemSection>
      <ItemSection>
        <div>
          <img src={alternateSectionIcon} alt=""/>
        </div>
        <div>
          <h2>Lorem ipsum dolor leptospirose iam asd rub</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum quam sit amet
            posuere posuere. Praesent eget lacus non odio tincidunt porta.Lorem
          </p>
        </div>
      </ItemSection>
      <ItemSection>
        <div>
          <img src={alternateSectionIcon} alt=""/>
        </div>
        <div>
          <h2>Lorem ipsum dolor leptospirose iam asd rub</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum quam sit amet
            posuere posuere. Praesent eget lacus non odio tincidunt porta.Lorem
          </p>
        </div>
      </ItemSection>
      <ItemSection>
        <div>
          <img src={alternateSectionIcon} alt=""/>
        </div>
        <div>
          <h2>Lorem ipsum dolor leptospirose iam asd rub</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum quam sit amet
            posuere posuere. Praesent eget lacus non odio tincidunt porta.Lorem
          </p>
        </div>
      </ItemSection>
    </AlternateSideContainer>
  );
};

export default AlternateSideSection;
