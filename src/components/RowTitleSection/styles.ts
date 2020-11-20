import styled from 'styled-components';

export const RowTitleContainer = styled.section`
   max-width: 1140px;
  margin: 0 auto;
  color: #000;
  margin-top: 90px;
  position: relative;
  display:flex;
  justify-content: space-between;


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


 `;


