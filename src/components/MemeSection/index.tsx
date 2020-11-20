import React from 'react';

import { MemeContainer } from './styles';
import goalImage from '../../assets/images/goal.png';
import distractionImage_1 from '../../assets/images/distraction_1.png';

const MemeSection: React.FC = () => {
  return (
    <MemeContainer>
      <div className="distraction">
        <img src={distractionImage_1} alt=""/>
        <span className="distraction__title">Distrações</span>
      </div>
      <div className="goal">
        <span className="goal__you">Você</span>
        <span className="goal__she">Tarefas</span>
        <img src={goalImage} alt=""/>
      </div>
    </MemeContainer>

  );
};

export default MemeSection;
