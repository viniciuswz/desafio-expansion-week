import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import littleSection from '../../assets/images/little-section.svg';
import tabletIcon from '../../assets/images/tabletIcon.svg';
import smartphoneIcon from '../../assets/images/smartphoneIcon.svg';


import { SectionContainer,ItemsContainer } from './styles';

const LittleSection: React.FC = () => {
  return (
    <SectionContainer>
      <h2>Começamos evitando o celular</h2>
      <ItemsContainer>
        <div>
            <img src={tabletIcon} alt=""/>
            <h3>Crie horários</h3>
            <p>
              Posso usar o celular nas tarefas?<br/>
              Nãaaaaaaaaaao😡<br/>
              Defina horarios específicos para usar o seu celular.
            </p>
        </div>
        <div>
            <img src={smartphoneIcon} alt=""/>
            <h3>Limite seus app's</h3>
            <p>
              Tudo em excesso não faz bem, use a tecnologia a seu favor, procure algum app que limite o tempo de uso do Facebook que você tanto não abre mão.<br/>
            </p>
        </div>
        <div>
            <img src={littleSection} alt=""/>
            <h3>Fora de alcance</h3>
            <p>
             Experimente deixar seu celular fora de alcance nas primeiras horas do seu dia, eu sei que você logo após acordar continua deitado e vai olhar seu twitter 😏
            </p>
        </div>
      </ItemsContainer>
    </SectionContainer>

  );
};

export default LittleSection;
