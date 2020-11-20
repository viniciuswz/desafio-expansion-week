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
          <h2>Faça uma lista das suas tarefas</h2>
      </div>
      <div>
        <p>
          Seja por qual meio, digital ou no lápis e papel, nas primeiras horas do seu dia defina o que você vai fazer.
        </p>
        <p>
          Se a tarefa for muito grande divida ela em pedaços, e separe o que você já fez do que resta fazer.
          A cada nova tarefa que você finaliza é mais uma dose de dopamina para te deixar feliz e satisfeito.
        </p>
      </div>

    </RowTitleContainer>

  );
};

export default RowTitleSection;
