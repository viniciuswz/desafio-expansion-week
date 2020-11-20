import styled from 'styled-components';






export const SectionContainer = styled.section`
  max-width: 1366px;
  margin: 0 auto;
  color: #000;
  margin-top: 90px;
  position: relative;

  h2{
    width:90%;
    font-size: 3.6rem;
    line-height:5.4rem;
    text-align: center;
    margin: 0 auto;

  }


 `;

 export const ItemsContainer = styled.div`
  margin-top: 32px;
  margin-bottom: 140px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  div{
    padding: 24px 26px;
    color: #263238;
    background-color: #F2F0FE;
    box-shadow: 0 3px 6px 0px rgba(0,0,0,0.16);
    width: 256px;
    border-radius: 8px;
    margin-right: 32px;
    &:last-child {
      margin-right: 0;
    }
    img{
      width: 187px;
      margin: 0 auto;
    }
    h3{
      font-size: 2.4rem;
      line-height: 3.6rem;
      margin-top: 16px;
    }
    p{
      font-size: 1.4rem;
      line-height: 2.1rem;
      margin-top: 8px;
    }
  }
 `
