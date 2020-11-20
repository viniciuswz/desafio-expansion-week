import styled from 'styled-components';

export const QuoteContainer = styled.section`
  max-width: 1366px;
  margin: 140px auto;
  color: #000;
  background-color: #0054D4;

  padding: 100px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h2{
    width:90%;
    font-size: 3.6rem;
    line-height:5.4rem;
    text-align: center;
    margin: 0 auto;

  }
  p{



  }

  img{
    &.bottom{
      position: absolute;
      bottom: -40px;
      right: 50px;
    }
    &.top{
      position: absolute;
      top: -25px;
      left: 20px;
    }
  }

 `;

export const QuoteItem = styled.section`
  background-color: #005FEE;
  padding: 32px;
  max-width: 548px;
  width: 100%;
  min-height: 188px;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  border-radius: 8px;
  position: relative;
  z-index:1;
  margin: 24px;
  div{
    q{
      position: relative;
      font-size: 2.4rem;
      line-height: 3.6rem;
      font-weight: bold;


    }
    p{
      line-height: 2.4rem;
      margin-top: 8px;
    }
  }
  img{

  }

  @media (max-width: 554px){
    flex-direction: column-reverse;
    img{
      margin-bottom: 20px;
    }
    text-align: center;
  }
`
