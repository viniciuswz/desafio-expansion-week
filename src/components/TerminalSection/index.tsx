import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import titleIcons from '../../assets/images/title-icons.svg';


import { TerminalContainer, TerminalItem } from './styles';

const TerminalSection: React.FC = () => {
  return (
    <TerminalContainer>
      <TerminalItem>
        <header>
          <div className="green"></div>
          <div className="yellow"></div>
          <div className="red"></div>
        </header>
        <section >
          <div>
            $ layout -info<br/>
            <span>layout mande with love by github:viniciuswz</span><br/>
            <span>some images from this site are free to use but need assignment</span><br/>
            &nbsp;<br />
            $ layout -assignment<br/>
            <span>SVG's by FreePik</span><br/>


          </div>
        </section>
      </TerminalItem>

    </TerminalContainer>
  );
};

export default TerminalSection;
