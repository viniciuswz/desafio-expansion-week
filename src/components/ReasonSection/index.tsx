import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import { ReasonContainer } from './styles';

const ReasonSection: React.FC = () => {
  return (
    <ReasonContainer>
      <h2>Identificando o motivo</h2>
      <p>
        Dentre milhares de maneira de identificar quem causa sua procrastinação,
        vou lhe oferecer um teste simples, preciso e objetivo de quem causa essa perturbação
        em sua vida e métodos de criar rotinas que melhorem seu dia a dia
      </p>
      <p>Para continuar precisamos analizar uma foto do seu rosto, vamos identificar seu perfil com nossa avançada I.A</p>
      <form action="">
        <input id="selfie" type="file"/>
        <label htmlFor="selfie">Enviar Selfie</label>
        <div>
          <img src={selfieCat} alt=""/>
        </div>
      </form>
    </ReasonContainer>

  );
};

export default ReasonSection;
