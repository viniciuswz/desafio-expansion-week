import styled from 'styled-components';

export const AlternateSideContainer = styled.section`
  max-width: 1140px;
  margin: 140px auto;
  color: #000;

  position: relative;


 `;

 export const ItemSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

 `


