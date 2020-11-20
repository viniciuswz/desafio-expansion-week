import React from 'react';


import BannerTime from '../../assets/images/banner-time.svg'

import { BannerContent,BannerContentText,BannerContentImage,BannerContainer } from './styles';

const BannerTop: React.FC = () => {
  return (
    <BannerContainer>
    <BannerContent>
     <BannerContentText >
         <h1>Lorem ipsun dolor ?</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nihil esse non! Eos laboriosam molestiae unde quia pariatur perspiciatis ratione vitae iste illum ipsum explicabo deserunt, inventore, non ex? Laboriosam.</p>
         <button>Aprender a controlar o tempo</button>
       </BannerContentText>
       <BannerContentImage>
         <img src={BannerTime} alt=""/>
       </BannerContentImage>
    </BannerContent>
   </BannerContainer>
  );
};

export default BannerTop;
