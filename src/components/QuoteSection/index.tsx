import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import quoteUser from '../../assets/images/quoteUser.svg';

import quoteBottomRightIcon from '../../assets/images/quoteBottomRightIcon.svg';
import quoteTopLeftIcons from '../../assets/images/quoteTopLeftIcons.svg';



import { QuoteContainer, QuoteItem } from './styles';

const QuoteSection: React.FC = () => {
  return (
    <QuoteContainer>
      <img className="top" src={quoteTopLeftIcons} alt=""/>
      <QuoteItem>
        <div>
          <q>
            O tempo não é reembolsável.<br/>
            Use-o com intenção.
          </q>
          <p>- Desconhecido</p>
        </div>
        <img src={quoteUser} alt=""/>
      </QuoteItem>
      <img className="bottom" src={quoteBottomRightIcon} alt=""/>

    </QuoteContainer>
  );
};

export default QuoteSection;
