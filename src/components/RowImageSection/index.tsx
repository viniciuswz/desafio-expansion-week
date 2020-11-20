import React from 'react';




import rowImage from '../../assets/images/rowImage.svg';


import { RowImageContainer } from './styles';

const RowImageSection: React.FC = () => {
  return (
    <RowImageContainer>
      <div>
          <img src={rowImage} alt=""/>

      </div>
      <div>
        <h2>Gerenciando tempo com eficiência</h2>
        <p>
          Aprendemos nos últimos momentos a como gerenciar nosso tempo de forma mais precisa e clara.
        </p>
        <p>
          Nossas vidas podem mudar muito se a cada dia que passa exercitarmos nosso aprendizado sobre a produtividade, estamos plantando agora para colher no futuro.<br/>
          Como você se sente com seu aprendizado de hoje sobre produtividade?<br/>
          Vou encerrando por aqui 🤠

        </p>
      </div>

    </RowImageContainer>

  );
};

export default RowImageSection;
