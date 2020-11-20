import styled from 'styled-components';

export const AlternateSideContainer = styled.section`
  max-width: 1140px;
  margin: 140px auto;
  color: #000;
  position: relative;
  padding: 0 20px;



 `;

 export const ItemSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  &:nth-child(even){
    flex-direction: row-reverse
  }
  div{

    width: 50%;
    &:first-child{
    max-width: 447px;

    }
    img{
      width:100%;

    }
    h2{
    width:90%;
    font-size: 3.6rem;
    line-height:5.4rem;
  }
  p{
    margin-top: 16px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    width: 90%;
  }
  }

  @media (max-width: 1024px){
    margin: 50px 0 ;
    div{
      width: 100%;
      max-width : 480px;
      margin: 0 auto;
      &:first-child{
        max-width: 447px;
        margin: 0 auto;

     }
     h2{
       width: 100%;
       font-size: 2.4rem;
       line-height: 3.6rem;
     }
    }
    img{
      max-width:320px;
      margin: 0 auto;
      display: block;
    }
    &:nth-child(even){
      flex-direction: row
    }
  }

 `


