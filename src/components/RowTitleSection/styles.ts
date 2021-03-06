import styled from 'styled-components';

export const RowTitleContainer = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  color: #000;
  margin-top: 90px;
  position: relative;
  display:flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 32px;

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
  }


 `;


