import styled from 'styled-components';

export const AllCenterContainer = styled.section`
  max-width: 1366px;
  margin: 140px auto;
  color: #000;
  padding: 0 32px;

  position: relative;
  h2{
    width:90%;
    font-size: 3.6rem;
    line-height:5.4rem;
    text-align: center;
    margin: 0 auto;

  }
  p{
    margin-top: 24px;
    font-size: 1.8rem;
    line-height: 2.7rem;
    max-width: 636px;
    width: 90%;
    margin: 0 auto;
    text-align: center;


  }

  @media (max-width: 1024px){
    max-width:480px;
    width:90%;
    h2{
      font-size: 2.4rem;
      line-height: 3.6rem;
    }
  }



 `;


