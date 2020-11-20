import styled from 'styled-components';

import bannerBackground from '../../assets/images/banner-background.svg';
import bannerBackgroundComplement from '../../assets/images/banner-background-complement.svg';

import bannerBalls from '../../assets/images/banner-balls.svg';
import bannerIcons from '../../assets/images/banner-icons.svg';



export const BannerContainer = styled.section`
  max-width: 1366px;
  margin: 0 auto;
  background-image: url(${bannerBackground});
  background-size:1366px;
  background-repeat: no-repeat;
  height: 652px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &::before{
    content: '';
    background-image: url(${bannerBackgroundComplement});
    background-repeat: no-repeat;
    background-position-y: -209px;
    display: block;
    position: absolute;
    right:0;
    top: 0;
    width: 736px;
    height:851px;
  }


  @media (max-width: 1280px) and ( min-width: 1100px){
    &::before{
      right:-8vw;
    }
  }

  @media (max-width: 1099px) and ( min-width: 1024px){
    &::before{
      right:-18vw;
    }
  }



  @media (max-width: 1023px) and  ( min-width: 900px) {
    &::before{
      content: none
    }
  }

  @media (max-width: 900px) {
    background-image: none;
    background-color: #005FEE;
    height: auto;
    padding-bottom: 60px
  }
`;

export const BannerContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
  padding: 0 20px;

  @media (max-width: 900px) {
   flex-direction: column;
   align-items: center
  }
`;

export const BannerContentText = styled.div`
  max-width: 448px;
  width:100%;
  height:571px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  h1, p, button{
    color: white;
  }

  h1{
    font-size: 3.6rem;
    line-height: 5.4rem;
  }

  p{
    line-height: 2.4rem;
    margin: 24px 0;
  }

  button{
    width: 252px;
    height: 53px;
    background: #E932C7;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    line-height: 2.4rem;
    font-weight: bold;
    appearance: none;
    border: 0
  }

  &::before{
    content: '';
    background-image: url(${bannerBalls});
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    left:0;
    top: 30px;
    width: 74px;
    height:54px;
  }
  &::after{
    content: '';
    background-image: url(${bannerIcons});
    background-repeat: no-repeat;
    display: block;
    position: absolute;
    right:-230px;
    bottom: 0;
    width: 222px;
    height:168px;
  }

  @media (max-width: 900px) and (min-width: 481px) {
    max-width: 80%;
    height: auto;
    order: 2;
    align-items:center;
    text-align: center;
    &::before,&::after{
      content: none
    }

  }

  @media (max-width: 480px)  {
    max-width: 90%;
    height: auto;
    order: 2;
    align-items:center;
    text-align: center;
    &::before,&::after{
      content: none
    }
  }
`;

export const BannerContentImage = styled.div`
  width: 45%;
  height:571px;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
  }
  @media (max-width: 900px) and (min-width: 481px) {
    width: 80%;
    height: auto;
    order: 1;
    margin: 40px;
    img{
      max-width: 320px;
    }
  }

  @media (max-width: 480px)  {
    max-width: 320px;
    width: 90%;
    order: 1;
    height: auto;
    margin: 40px;


  }
`;
