import styled from 'styled-components';

import memeBackground from '../../assets/images/memeBackground.png'

export const MemeContainer = styled.section`
  max-width: 1366px;
  height:100vh;
  max-height: 560px;
  margin: 0 auto;
  display: flex;
  justify-content:center;
  position: relative;
  background-image: url(${memeBackground});
  background-size: cover;
  .goal{
    position: absolute;
    bottom: 0;
    right: 0;
    img{
      width: 100%;
      max-width:400px;
    }
    &__you{
      bottom: 294px;
      right: 210px;
      transform: rotate(10deg);
    }
    &__she{

    bottom: 214px;
    right: -3px;
    transform: rotate(-13deg);



    }

    &__she,&__you{
      position: absolute;
      font-size: 46px;
      color: #fff;
      font-weight: bold
    }

  }
  .distraction{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-100%,-0%);
    img{
      width: 100%;
    }
    &__title{
      position: absolute;
      font-size: 46px;
      color: #fff;
      font-weight: bold;
      white-space: nowrap;
      left: 0;
      top: -50px;


    }
  }
`;
