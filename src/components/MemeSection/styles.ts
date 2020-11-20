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
  overflow: hidden;
  .goal{
    position: absolute;
    bottom: 0;
    right: 10px;
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
      font-size: 4.6rem;
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

  @media (max-width: 1024px) and (min-width: 768px){
    max-height: auto;

    .goal{
      width: 280px;
      right: 30px;
      &__you{
        bottom: 208px;
        right: 169px;


      }
      &__she{
       bottom: 194px;

      }

      &__she,&__you{
       font-size: 3.2rem;

      }
    }
    .distraction{
      top: auto;
      bottom: 0;
      left:30px;
      transform: none;
    }
  }

  @media (max-width: 767px){
    max-height: auto;

    .goal{
      width: 220px;
      right: 30px;
      top: 0;
      bottom: inherit;
      &__you{
        bottom: 180px;
        right: 122px;


      }
      &__she{
       bottom: 170px;

      }

      &__she,&__you{
       font-size: 3.2rem;

      }
    }
    .distraction{
      z-index: 1;
      top: auto;
      bottom: 0;
      left:30px;
      transform: none;
      width: 290px;
      &__title{
        font-size: 3.2rem;
      }

    }
  }
`;
