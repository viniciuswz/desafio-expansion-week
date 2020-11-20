import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'

import { BannerContent,BannerContentText,BannerContentImage,BannerContainer } from './styles';

const BannerTop: React.FC = () => {
  return (
    <BannerContainer>
    <BannerContent>
     <BannerContentText >
         <h1>Produtividade nas nossas vidas, sim ou claro ?</h1>
         <p>
           Quantas vezes você adiou uma tarefa para outro dia? ou se distraiu com as notificações do seu celular enquanto trabalhava em algum código?
           <br/>
           Vamos te apresentar algumas maneiras de como vencer a procrastinação e ser produtivo, venha comigo nessa leitura!
         </p>

         <button>Eu quero ser produtivo</button>
       </BannerContentText>
       <BannerContentImage>
         <img src={BannerTime} alt=""/>
       </BannerContentImage>
    </BannerContent>
   </BannerContainer>
  );
};

export default BannerTop;
