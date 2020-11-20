import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import { ReasonContainer } from './styles';

const ReasonSection: React.FC = () => {
  return (
    <ReasonContainer>
      <h2>O primeiro passo é reconhecer o erro</h2>
      <p>
        Reconhecer o motivo dos seus "amanhã eu faço" é um passo importante.<br/>
        É certo que existem certas distrações que você não controla, o volume do carro do ovo que passa na sua rua
        é uma delas, mas outras distrações você tem total controle, ninguém te obriga a ver se o trump venceu as eleições nos Estados Unidos não é mesmo ?
      </p>
      <p>
        Grande parte dos nossos "deixa para depois" parte de nós mesmos, e da mesma forma que pegamos vícios que tiram nosso foco,
        podemos trabalhar para eliminar essas atitudes negativas do nosso dia a dia<br/>
        Só é preciso foco, força de vontade e paciência.
      </p>

    </ReasonContainer>

  );
};

export default ReasonSection;
