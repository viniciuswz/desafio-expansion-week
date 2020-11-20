import styled from 'styled-components';

export const RowImageContainer = styled.section`
  max-width: 1140px;
  color: #000;
  margin: 90px auto;
  position: relative;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;


  div{
    width: 48%;
    h2{
      width:90%;
      font-size: 3.6rem;
      line-height:5.4rem;
      text-align: start;

    }
    p{
      font-size: 1.8rem;
      line-height: 2.7rem;
      & ~ p{
        margin-top: 24px;


      }
    }

  }

  @media (max-width: 1024px){
    div{
      width: 90%;
      max-width:480px;
      margin: 0 auto;
      h2{
        font-size: 2.4rem;
        line-height: 3.6rem;
        margin-bottom: 24px;
      }
    }

    img{
      width: 70%;
      max-width: 320px;
      display: block;
      margin: 0 auto;
    }
  }


 `;


