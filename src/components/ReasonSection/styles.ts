import styled from 'styled-components';

import bannerBackground from '../../assets/images/banner-background.svg';
import bannerBackgroundComplement from '../../assets/images/banner-background-complement.svg';

import bannerIcons from '../../assets/images/banner-icons.svg';



export const ReasonContainer = styled.section`
  max-width: 1366px;
  margin: 0 auto;
  background-color: #2B79EE;
  color: white;
  padding-top: 100px;
  padding-bottom:30px;
  position: relative;
  &::before{
    content: '';
    width: 100%;
    height: 230px;
    display: block;
    background-color: #2B79EE;
    position: absolute;
    top: -160px;

  }
  h2{
    width:90%;
    font-size: 3.6rem;
    line-height:5.4rem;
    text-align: center;
    margin: 0 auto

  }
  p{
    width:90%;
    line-height:2.4rem;
    margin: 24px auto;
    max-width: 550px;

    & ~p{
      margin-top: 0;
    }
  }
  form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input{
      display: none;
    }
    label{
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
      border: 0;
      margin-bottom: 24px
    }
    div{
      max-width: 450px;
      width: 90vw;

      position: relative;
      overflow: hidden;
      border-radius: 32px;
      margin: 0 auto;
      background-color: #005FEE;
      display: none;

      img{

        width:115%;
        position: absolute;
        transform: translate(-50%,-50%);
        top: 50%;
        left: 50%;
      }

    }
  }
 `;
