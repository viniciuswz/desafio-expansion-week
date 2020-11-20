import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'
import selfieCat from '../../assets/images/selfie-cat.jpg';

import alternateSectionIcon from '../../assets/images/alternateSectionIcon.svg';
import pomodoriIcon from '../../assets/images/pomodoriIcon.svg';
import headsetIcon from '../../assets/images/headsetIcon.svg';
import logoutIcon from '../../assets/images/logoutIcon.svg';







import { AlternateSideContainer,ItemSection } from './styles';

const AlternateSideSection: React.FC = () => {
  return (
    <AlternateSideContainer>

      <ItemSection>
        <div>
          <img src={pomodoriIcon} alt=""/>
        </div>
        <div>
          <h2>A técnica do pomodoro</h2>
          <p>
            Toda vez que for pegar uma tarefa, defina um tempo para focar nela sem parar, recomendo algo em torno de 20 minutos.
            Vamos chamar esse tempo de sessão, a cada sessão de foco você tira 5 minutos de descanso.
          </p>
        </div>
      </ItemSection>
      <ItemSection>
        <div>
          <img src={headsetIcon} alt=""/>
        </div>
        <div>
          <h2>Fones de ouvido</h2>
          <p>
            Quando se está trabalhando em grupo é comum se incomodar com uma barulheira em volta.
            Fones de ouvido são perfeitos para essa ocasião, além de abafar o som, conseguimos curtir uma, e dependendo da musica aumentamos nosso estado de foco.<br/>
            Eu curto escutar um Lofi Hiphop enquanto trabalho e estudo, e você?
          </p>
        </div>
      </ItemSection>
      <ItemSection>
        <div>
          <img src={alternateSectionIcon} alt=""/>
        </div>
        <div>
          <h2>Se recompense</h2>
          <p>
            Adora jogar um lolzinho? Quer um tênis novo?<br/>
            Crie uma meta, ao completar uma certa quantidade de tarefas você tira um tempo para te dar um mimo.<br/>
            Procrastinação em excesso não vai fazer bem, e trabalhar demais também va acabar com você, permitasse com moderação, tirar um tempo para si mesmo.
          </p>
        </div>
      </ItemSection>
      <ItemSection>
        <div>
          <img src={logoutIcon} alt=""/>
        </div>
        <div>
          <h2>Desconecte-se antes de ir dormir</h2>
          <p>
            Saia do celular, fique longe da TV, busque ficar tranquilo, esses aparelhos emitem luz azul, prejudicam seu sono, e no próximo dia como você irá produzir resultados fantásticos?<br/>
            Se é impossível ficar longe desses aparelhos, ao menos ative a opção de filtro de luz azul, a tela irá ficar amarelada, não forçando tanto sua visão.
          </p>
        </div>
      </ItemSection>
    </AlternateSideContainer>
  );
};

export default AlternateSideSection;
